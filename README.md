# API de Extracción de Palabra Aleatoria

Esta API utiliza Puppeteer para extraer el contenido de un sitio web y devolver una palabra aleatoria en formato JSON. La API está construida con Express y permite la comunicación entre servidores mediante CORS.

## Descripción

La API realiza las siguientes acciones:

1. Se conecta a `https://www.aleatorios.com/`.
2. Obtiene el contenido del primer `h2` de la página (una palabra aleatoria).
3. Devuelve la palabra obtenida en formato JSON.

## Instalación

Sigue los siguientes pasos para instalar y ejecutar la API en tu máquina local:

### 1. Clona el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <CARPETA_DEL_REPOSITORIO>
