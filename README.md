# Automatización de Pruebas: Mercado Libre
Este proyecto automatiza la búsqueda y filtrado de productos en [Mercado Libre](https://www.mercadolibre.com) 
usando **Puppeteer** y **Cucumber.js** (BDD).

## Dependencias principales
puppeteer
@cucumber/cucumber

## Instalación

Clona el repositorio:
   ```bash
   git clone https://github.com/DaysiMTS/planMejora.git
   cd planMejora

Para instalar las dependencias, se ejecuta:
   ```bash
   npm install

Ejecucion:
   ```bash
   npm run test

## Estructura

- `/features/test.feature`: Escenario BDD para buscar y filtrar productos.
- `/features/step_definitions/steps.js`: Definiciones de pasos con Puppeteer.
- `/capturas/`: Carpeta donde se guardan capturas de pantalla de cada paso.

## Ejemplo de salida
```bash
   Los primeros 5 productos son:
[
  {
    nombre: 'Consola Sony Playstation 5 Standard Color Blanco',
    precio: '42,000'
  },
  {
    nombre: 'Consola Sony Playstation 5 Digital Edición 30º Aniversario 1 Tb Gris Gris',
    precio: '34,999'
  },
  {
    nombre: 'Sony Playstation 5 Slim Digital 1tb Edición 30 Aniversario + Unidad Lectora De Discos Para Ps5.',
    precio: '21,703'
  },
  {
    nombre: 'Consola Sony Playstation 5 Digital 30o Aniversario 1 Tb Gris',
    precio: '19,999'
  },
  {
    nombre: 'Playstation 5 Digital Edición 30 Aniversario Slim Color Gris',
    precio: '19,999'
  }
]



## Notas
Las capturas de pantalla se guardan en la carpeta /capturas.
Si algún selector cambia en Mercado Libre, deberás actualizar los selectores en steps.js.
El navegador se abre en modo no headless para facilitar la depuración.



Autor: Daysi M Tolentino Sierra

