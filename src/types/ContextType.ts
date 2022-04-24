import React from "react";
import WeatherDataType from './WeatherDataType';

// ContextType is not descriptive, you can have multiple contexts in an app, this could be "LocationsContext" or "WeatherContext"
// No need to append "Type" since we know it's a type

type ContextType = React.Context<{
	Berlin: WeatherDataType;
	London: WeatherDataType;
	"Your location": WeatherDataType;
}>;

export default ContextType;