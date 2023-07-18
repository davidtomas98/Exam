# Pokémon Explorer

## Descripción del programa
Pokémon Explorer es una aplicación web que permite a los usuarios explorar la información de diferentes Pokémon. Los usuarios pueden ver una lista de Pokémon aleatorios, ver los detalles de un Pokémon específico y obtener información detallada sobre sus habilidades.

## Características principales
- Mostrar una lista de Pokémon aleatorios con imágenes y nombres.
- Ver detalles de un Pokémon seleccionado, incluyendo su imagen, generación y habilidades.
- Obtener información detallada sobre las habilidades de un Pokémon.

## Tecnologías utilizadas
- Angular: Framework de desarrollo web para construir la interfaz de usuario del programa.
- TypeScript: Lenguaje de programación utilizado en Angular.
- HTML y CSS: Lenguajes de marcado y estilos utilizados para la estructura y presentación de la aplicación.
- PokeAPI: API pública utilizada para obtener los datos de los Pokémon y sus habilidades.

## Instalación
1. Clonar el repositorio de GitHub: `git clone https://github.com/tuusuario/pokemon-explorer.git`
2. Navegar al directorio del proyecto: `cd pokemon-explorer`
3. Instalar las dependencias: `npm install`

## Uso
1. Iniciar la aplicación: `ng serve`
2. Abrir el navegador web y acceder a `http://localhost:4200`
3. La lista de Pokémon aleatorios se mostrará en la página de inicio.
4. Al hacer clic en el botón "View Details" de un Pokémon, se redirigirá a la página de detalles del Pokémon seleccionado.

## Estructura del proyecto
El proyecto está organizado de la siguiente manera:

pokemon-explorer/
  |-- src/
      |-- app/
          |-- components/
              |-- pokemon-list/            (Componente para mostrar la lista de Pokémon aleatorios)
                  |-- pokemon-list.component.html
                  |-- pokemon-list.component.css
                  |-- pokemon-list.component.ts
              |-- pokemon-detail/          (Componente para mostrar los detalles de un Pokémon)
                  |-- pokemon-detail.component.html
                  |-- pokemon-detail.component.css
                  |-- pokemon-detail.component.ts
          |-- services/
              |-- pokemon.service.ts       (Servicio para obtener datos de los Pokémon)
          |-- app.component.ts            (Componente principal de la aplicación)
          |-- app.module.ts               (Módulo principal de la aplicación)
      |-- assets/
      |-- index.html
      |-- styles.css                     (Estilos globales)
  |-- package.json
  |-- tsconfig.json
  |-- README.md


## Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar el programa, corregir errores o agregar nuevas características, siéntete libre de enviar una solicitud de extracción.
