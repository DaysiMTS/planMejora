import { Given, When, Then } from '@cucumber/cucumber';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

import { timeout } from 'puppeteer-core';

let browser, page,productos;

Given('Entrar a Mercado Libre', async function()  {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("https://www.mercadolibre.com");
    //await page.waitForSelector('.ui-search-result', { timeout: 10000 });
    await page.screenshot({ path: 'capturas/1_Entrar a Mercado Libre.png' });
});

//Se selecciona el pais
When('selecciono "Mexico" como pais', async function () {
    try {
        //Seleeciona el pais de la lista
        await page.click('nav ul.ml-site-list li.ml-site-mlm');
        await page.screenshot({ path: 'capturas/2_selecciono_Mexico.png' });
    } catch (error) {
        console.error('Error al seleccionar pais', error);
    }
    
});

When('busca {string}', async function (palabra) {
    try {
        // Espera a que el campo de búsqueda esté visible
        await page.waitForSelector('input[name="as_word"]');
        // Se escribe la palabra a buscar
        await page.type('input[name="as_word"]', palabra, { delay: 100 });
        // Se da clic en el botón de búsqueda
        await page.keyboard.press('Enter');
        await page.screenshot({ path: 'capturas/3_busca_PlayStation.png' });
    } catch (error) {
        console.error(`Error al buscar "${palabra}":`, error);
    }
  });

  When('filtrar por condiciones {string}', async function(Nuevo)  {
    try {
        // Espera a que el filtro de condiciones esté visible
        await page.waitForSelector('.ui-search-filter-dl a[title^="'+Nuevo+'"]', { timeout: 10000 });
        // Se da clic en el filtro de Nuevo
        await page.click('.ui-search-filter-dl a[title^="'+Nuevo+'"]');
        //await page.waitForNavigation({ waitUntil: 'networkidle2' });
        await page.screenshot({ path: 'capturas/4_Filtro_Nuevo.png' });
    } catch (error) {
        console.error(`Error al filtrar por condiciones "${Nuevo}":`, error);
    }
});

When('filtrar por ubicacion {string}', async function(estado) {
    try {
        // Espera a que el filtro de ubicacion esté visible
        await page.waitForSelector('.ui-search-filter-dl a[title^="'+estado+'"]', { timeout: 10000 });
        // Se da clic en el Distrito Federal
        await page.click('.ui-search-filter-dl a[title^="'+estado+'"]');
        await page.screenshot({ path: 'capturas/5_Filtro_ubicacion.png' });
    } catch (error) {
        console.error(`Error al filtrar por condiciones "${estado}":`, error);
    }
});

When('ordenar de mayor a menor precio', async function() {
    try {
        //await page.waitfornavigation({ waitUntil: 'networkidle2' });
         // Espera a que el menú de ordenamiento esté visible
        await page.waitForSelector('.andes-dropdown__trigger', { visible: true});
        // Se da clic en el menú de ordenamiento
        await page.locator('.andes-dropdown__trigger').click();
        //await page.click('.andes-dropdown__trigger');
        await page.screenshot({ path: 'capturas/6_Ordenar_Select.png' });

        // Espera a que la opción "Mayor precio" esté visible
        await page.waitForSelector('li[data-key="price_desc"]', {visible: true});
        // Se da clic en la opción "Mayor precio"
        await page.locator('li[data-key="price_desc"]').click();
        //await page.click('li[data-key="price_desc"]');
        await page.screenshot({ path: 'capturas/7_ordenar_aplicado.png' });
        //await page.locator('li[data-key="price_desc"]').click();        
    }
    catch (error) {
        console.error(`Error al intentar ordenar`, error);
    }
});


When('obtener el nombre y precio de los primeros 5 productos', async function() {
    try {
            let items;
            await page.waitForSelector(".ui-search-layout__item", { timeout: 10000 });
            // Se obtiene el nombre y precio de los primeros 5 productos
            productos = await page.evaluate(() =>{
            items = Array.from(document.querySelectorAll(".ui-search-layout__item"));
            // Filtra los elementos que tienen el precio y nombre
                return items.slice(0, 5).map(item => {
                const nombre = item.querySelector('a[class="poly-component__title"]').textContent;
                // Se obtiene el precio
                const precio = item.querySelector('span[class="andes-money-amount__fraction"]').textContent;
                return { nombre, precio };
        });

    });
    }catch (error) {
        console.error(`Error al obtener productos`, error);
    }
    
});

When ('imprimir los resultados', async function () {
    try {
        console.log("Los primeros 5 productos son:");
        console.log(productos);
    } catch (error) {
        console.error(`Error al imprimir los resultados`, error);
    }
});

Then('Generar un reporte en formato pdf de los resultados', async function () {
   try {
        const capturasDir = path.join(process.cwd(), 'capturas');
        const imagenes = fs.readdirSync(capturasDir)
            .filter(file => /\.(png|jpg|jpeg)$/i.test(file))
            .sort();

        // Convierte cada imagen a base64
        const imagenesHtml = imagenes.map(img => {
            const imgPath = path.join(capturasDir, img);
            const ext = path.extname(img).substring(1);
            const base64 = fs.readFileSync(imgPath, { encoding: 'base64' });
            return `<li><div><p>${img}</p><img src="data:image/${ext};base64,${base64}" style="width:500px; margin-bottom:20px;"/></div></li>`;
        }).join('');

        let html = `
            <h1>Reporte de Ejecución - Mercado Libre</h1>
            <h2>Pasos</h2>
            <ul>
              ${imagenesHtml}
            </ul>
            <p>Fecha: ${new Date().toLocaleString()}</p>
        `;

        const reportesDir = path.join(process.cwd(), 'reportes');
        const pdfPath = path.join(reportesDir, 'reporte-ejecucion.pdf');
        if (!fs.existsSync(reportesDir)) {
            fs.mkdirSync(reportesDir, { recursive: true });
        }

        const reportPage = await browser.newPage();
        await reportPage.setContent(html, { waitUntil: 'networkidle0' });
        await reportPage.pdf({ path: pdfPath, format: 'A4' });
        await reportPage.close();
        console.log(`Reporte PDF generado: ${pdfPath}`);
    } catch (error) {
        console.error('Error al generar el reporte PDF:', error);
    } finally {
        await browser.close();
    }
});
