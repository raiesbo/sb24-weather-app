import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import WeatherDataContext from "./utils/WeatherDataContext";
import getCityFromPath from "./utils/getCityFromUrl";
import "./City.css";

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
				<h1>
					{`${city}`}
					{/* <sup>{weather.sys.country}</sup> */}
				</h1>
			</header>
			<main>
				{weatherData[city] && (
					<div className="city">
						{/* <h2 className="cityName">
							<span>{weather.name}</span>
							<sup>{weather.sys.country}</sup>
						</h2> */}

						<div className="cityTemp">
							<div className="info">
								<p>{weather.weather[0].description}</p>
								<img
									className="weatherIcon"
									src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
									alt={weather.weather[0].description}
								/>
							</div>
							<p className="mainTemp">
								{`${Math.round(weather.main.temp)}°C`}
							</p>
							<div className="subTempWrapper">
								<p className="subTemp">
									H: {`${Math.round(weather.main.temp_max)}`}{" "}
									<sup>&deg;</sup>C
								</p>
								<p>
									L: {`${Math.round(weather.main.temp_min)}`}{" "}
									<sup>&deg;</sup>C
								</p>
							</div>
						</div>

						{/* <div className="info">
							<img
								className="weatherIcon"
								src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
								alt={weather.weather[0].description}
							/>
							<p>{weather.weather[0].description}</p>
						</div> */}

						<div className="sunInfoWrapper">
							<div className="sunInfo">
								<p>Sunrise</p>
								<p className="sunInfoData">
									{new Date(weather.sys.sunrise * 1000)
										.toISOString()
										.substr(11, 5)}
								</p>
							</div>
							<div className="sunInfo">
								<p>Sunset</p>
								<p className="sunInfoData">
									{new Date(weather.sys.sunset * 1000)
										.toISOString()
										.substr(11, 5)}
								</p>
							</div>
							<div className="sunInfo">
								<p>Humidity</p>
								<p className="sunInfoData">{`${weather.main.humidity} %`}</p>
							</div>
							<div className="sunInfo">
								<p>Visibility</p>
								<p className="sunInfoData">
									{weather.visibility}
								</p>
							</div>
						</div>
					</div>
				)}
			</main>
		</>
	);
}
