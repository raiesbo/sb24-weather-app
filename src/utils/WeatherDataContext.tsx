import React from "react";
import defaultValues from "./defaultVales";

const WeatherDataContext = React.createContext({
	Berlin: defaultValues,
	London: defaultValues,
	"My location": defaultValues,
});

export default WeatherDataContext;
