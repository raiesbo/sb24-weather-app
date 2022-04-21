import React from "react";
import WeatherDataType from './WeatherDataType';

type ContextType = React.Context<{
	Berlin: WeatherDataType;
	London: WeatherDataType;
	"Your location": WeatherDataType;
}>;

export default ContextType;