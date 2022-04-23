import React from "react";
import defaultValues from "../utils/defaultVales";

const WeatherDataContext = React.createContext({
	berlin: defaultValues,
	london: defaultValues,
	"my location": defaultValues,
});

export default WeatherDataContext;
