import React from "react";
import defaultValues from "../utils/defaultValues";

// This doesn't have any type, although you use the WeatherDataType type in other places

const WeatherDataContext = React.createContext({
	berlin: defaultValues,
	london: defaultValues,
	myLocation: defaultValues,
});

export default WeatherDataContext;
