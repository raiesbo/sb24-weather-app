# Weather App

[Demo website](https://weatherappsb24.netlify.app/) hosted on netlify.

## Getting started

### Main technologies

- React
- Typscript
- CSS

### Run the project

1. Make use to use the correct Node version `nvm use` (.nvmrc).
2. Run `npm run build` to generate the optimised version of the app.
3. Start the app with the `npm run start` command.

### Additional available scripts

#### `npm test`

Launches the test runner in the interactive watch mode (without the correct node version might trigger an error).

## Additional information

### The geolocalization API

To access the use's localisation, it is implemented the `Geolocation API` provided la JavaScript and available from the client side. For the API to be able to work, the user requires allowing the localisation access in its browser. [More info](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).

### Use of the context API

To manage the general app's state, the application uses react's `context API` and the `useContext` hook that allows to share information across the application injection its data directly in the required component. Due to the scope of the app, it is not implemented as a traditional “store” with its verbose development, but as a single way to share “global” information.
