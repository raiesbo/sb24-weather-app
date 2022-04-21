import { useLocation } from "react-router-dom";
import { useContext } from "react";
import WeatherDataContext from "./utils/WeatherDataContext";
import getCityFromPath from "./utils/getCityFromUrl";

export default function Details() {
	const weatherData = useContext(WeatherDataContext);
	type ObjectKey = keyof typeof weatherData;
	const city = getCityFromPath(useLocation().pathname) as ObjectKey;
	const weather = weatherData[city];

	console.log("weatherData", weatherData);
	return (
		<>
			<header>
				<h1>{`Weather from ${city}`}</h1>
			</header>
			<main>
				{weatherData[city] && (
					<div className="city">
						<h2 className="cityName">
							<span>{weather.name}</span>
							<sup>{weather.sys.country}</sup>
						</h2>

						<div className="cityTemp">
							{Math.round(weather.main.temp)}
							<sup>&deg;</sup>
						</div>

						<div className="info">
							<img
								className="cityIcon"
								src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
								alt={weather.weather[0].description}
							/>
							<p>{weather.weather[0].description}</p>
						</div>
					</div>
				)}
			</main>
		</>
	);
}
