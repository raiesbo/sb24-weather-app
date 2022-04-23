import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import WeatherDataContext from "./utils/WeatherDataContext";
import getCityFromPath from "./utils/getCityFromUrl";
import "./City.css";
import WeatherInfo from "./components/WeatherInfo";
import WeatherTemperature from "./components/WeatherTemperature";

export default function Details() {
	const weatherData = useContext(WeatherDataContext);
	type ObjectKey = keyof typeof weatherData;
	const city = getCityFromPath(useLocation().pathname) as ObjectKey;
	const weather = weatherData[city];

	console.log("weatherData", weatherData);
	return (
		<>
			<header className="mainHeader">
				<Link className="arrowLink" to={"/"}>
					<i className="fa-solid fa-arrow-left fa-2xl arrow"></i>
				</Link>
				<h1>{`${city === "My location" ? weather.name : city}`}</h1>
			</header>
			<main>
				{weatherData[city] && (
					<div className="city">
						<WeatherTemperature
							description={weather.weather[0].description}
							icon={weather.weather[0].icon}
							temp={weather.main.temp}
							tempMax={weather.main.temp_max}
							tempMin={weather.main.temp_min}
						/>
						<WeatherInfo
							humidity={weather.main.humidity}
							visibility={weather.visibility}
							sunset={weather.sys.sunset}
							sunrise={weather.sys.sunrise}
						/>
					</div>
				)}
			</main>
		</>
	);
}
