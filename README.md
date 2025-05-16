🧪 Automatización de Pruebas: Mercado Libre
Este proyecto automatiza la búsqueda y filtrado de productos en Mercado Libre usando Puppeteer y Cucumber.js (BDD).

📦 Dependencias principales
puppeteer

@cucumber/cucumber

⚙️ Instalación
Clona el repositorio y navega al directorio:

bash
Copiar
Editar
git clone https://github.com/DaysiMTS/planMejora.git
cd planMejora
Instala las dependencias necesarias:

bash
Copiar
Editar
npm install
🚀 Ejecución
Para ejecutar las pruebas:

bash
Copiar
Editar
npm run test
📁 Estructura del Proyecto
/features/test.feature: Escenario BDD para buscar y filtrar productos.

/features/step_definitions/steps.js: Definiciones de pasos usando Puppeteer.

/capturas/: Carpeta donde se guardan las capturas de pantalla por paso.

📌 Ejemplo de salida
bash
Copiar
Editar
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
📝 Notas
Las capturas de pantalla se almacenan en la carpeta /capturas.

Si Mercado Libre cambia su estructura o selectores, será necesario actualizar el archivo steps.js.

El navegador se ejecuta en modo no headless para facilitar la depuración visual.

👩‍💻 Autor
Daysi M Tolentino Sierra
GitHub

