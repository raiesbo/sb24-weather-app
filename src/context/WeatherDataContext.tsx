import React from "react";
import defaultValues from "../utils/defaultVales";

const WeatherDataContext = React.createContext({
	Berlin: defaultValues,
	London: defaultValues,
	"My location": defaultValues,
});

export default WeatherDataContext;
