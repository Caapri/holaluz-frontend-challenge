# holaluz-frontend-challenge

Necesitamos una Landing Page que dada una búsqueda en CUPS muestre tanto la información del cliente como del punto de suministro, además de si éste puede formar parte de la
revolución de las azoteas incluyendo el tipo de oferta que obtendría.

En esta aplicación he intentado basarme en la estética de la página Holaluz y sus colores

Estructura del proyecto en src/:
- assets/: carpeta donde pongo archivos como imágenes, fuentes o estilos que luego uso en la aplicación
- components/: carpeta donde se ubican los componentes que entre ellos acaban formando una vista, con sus propios templates, estilos y lógica, junto con los tests unitarios dentro
de __tests__
- data/: carpeta donde están datos que luego usa la aplicación, en este caso los .json locales (ya que no hay backend)
- helpers/: carpeta donde se ubica lógica que luego pueden llamar los componentes. En este caso he hecho un archivo llamado functions.js donde he puesto la lógica para verificar
si el cliente puede optar al producto y el cálculo de los distintos descuentos en base a sus condiciones
- services/: carpeta donde he ubicado un archivo llamado api.js que hace las llamadas necesarias a los endpoints (en este caso no llama a ninguna api externa ni backend, pero
es una forma de simularlo aunque llame a los json locales). Aquí obtengo los datos del cliente y de su punto de suministro de los .json en base al cups insertado
- stores/: carpeta que guarda el store de la aplicación usando Pinia. En este caso guardo los datos del cliente y de su punto de suministro para poder acceder a ellos
desde cualquier componente siendo reactivo en todo momento
- views/: carpeta donde se ubican los componentes que en si mismos son una vista en la aplicación, en este caso la vista LandingPage.vue, junto con los tests unitarios dentro 
de __tests__
- App.vue: punto de entrada de la aplicación. Contiene el componente Header y el componente vista LandingPage

He distribuido la aplicación en los siguientes componentes (usando store con Pinia):

- App.vue incluye el componente AppHeader y el componente vista LandingPage
- LandingPage.vue incluye el formulario con el input de entrada del CUPS y los componentes ClientData, SupplyPointData y ProductElegibility que muestran los datos del cliente
si el cups es correcto. Este componente vista también incluye la lógica con las llamadas a services/api.js para verificar en base al cups si el cliente puede optar o no al producto
y si tiene o no descuento
- ClientData.vue incluye la vista de los datos del cliente
- SupplyPointData.vue incluye la vista con los datos del punto de suministro del cliente
- ProductElegibility.vue incluye la vista con los datos para mostrar si el usuario puede optar o no al producto y si puede, muestra si tiene descuento.

En la carpeta cypress/ se ubican los tests e2e de la aplicación
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
