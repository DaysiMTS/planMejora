# Automatización de Pruebas: Mercado Libre

Este proyecto automatiza la búsqueda y filtrado de productos en [Mercado Libre](https://www.mercadolibre.com) 
usando **Puppeteer** y **Cucumber.js** (BDD).

## Estructura

- `/features/test.feature`: Escenario BDD para buscar y filtrar productos.
- `/features/step_definitions/steps.js`: Definiciones de pasos con Puppeteer.
- `/capturas/`: Carpeta donde se guardan capturas de pantalla de cada paso.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DaysiMTS/planMejora.git
   cd planMejora

2. Instala las dependencias:
npm install
3. Ejecución
Para correr los tests ejecuta:
npm run test

¿Qué hace el flujo automatizado?
1. Abre Mercado Libre.
2. Selecciona el país "México".
3. Busca "Playstation 5".
4. Filtra por condición "Nuevo".
5. Filtra por ubicación "Distrito Federal".
6. Ordena los resultados de mayor a menor precio.
7. Obtiene el nombre y precio de los primeros 5 productos.
8. Imprime los resultados en consola y toma capturas de pantalla de cada paso.

Notas
Las capturas de pantalla se guardan en la carpeta /capturas.
Si algún selector cambia en Mercado Libre, deberás actualizar los selectores en steps.js.
El navegador se abre en modo no headless para facilitar la depuración.

Dependencias principales
puppeteer
@cucumber/cucumber

Autor: Daysi M Tolentino Sierra

