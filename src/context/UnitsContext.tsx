import React from "react";

// For default values for a context, is better to have the "setWithFahrenheit" function return the default state of the context
const UnitsContext = React.createContext({
	withFahrenheit: false,
	setWithFahrenheit: (active: boolean): void => {},
});

export default UnitsContext;
