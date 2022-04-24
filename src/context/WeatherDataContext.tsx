import React from "react";
import defaultValues from "../utils/defaultValues";

const WeatherDataContext = React.createContext({
	berlin: defaultValues,
	london: defaultValues,
	myLocation: defaultValues,
});

export default WeatherDataContext;
