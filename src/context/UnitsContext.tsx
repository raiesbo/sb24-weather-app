import React from "react";

const UnitsContext = React.createContext({
	withFahrenheit: false,
	setWithFahrenheit: (active: boolean): void => {},
});

export default UnitsContext;
