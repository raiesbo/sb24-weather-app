import "./App.css";
import Home from "./Home";
import Details from "./City";
import { Routes, Route } from "react-router-dom";
import DataRepository from "./utils/DataRepository";
import { useEffect, useState } from "react";
import WeatherDataContext from "./utils/WeatherDataContext";
import defaultValues from "./utils/defaultVales";

export default function App() {
	const [berlinData, setBerlinData] = useState(defaultValues);
	const [londonData, setLondonData] = useState(defaultValues);
	const [currentLocData, setCurrentLocData] = useState(null);
	const [currentLocCoords, setCurrentLocCoords] = useState(null);

	const defaultCities = {
		berlin: {
			lat: 52.5170365,
			lon: 13.3888599,
		},
		london: {
			lat: 51.5072,
			lon: 0.1276,
		},
	};

	const data = {
		Berlin: berlinData,
		London: londonData,
		"My location": currentLocData,
	};

	const fetchData = async () => {
		const [berlin, london] = await Promise.all([
			DataRepository.getWeatherData({
				lat: defaultCities.berlin.lat,
				lon: defaultCities.berlin.lon,
			}),
			DataRepository.getWeatherData({
				lat: defaultCities.london.lat,
				lon: defaultCities.london.lon,
			}),
		]);
		setBerlinData(berlin);
		setLondonData(london);
	};

	const fetchLocData = async () => {
		const currentLoc = await Promise.resolve(
			DataRepository.getWeatherData({
				lat: currentLocCoords.lat,
				lon: currentLocCoords.lon,
			})
		);
		setCurrentLocData(currentLoc);
	};

	useEffect(() => {
		// Fetch default cities data
		// fetchData();

		// Get localization coords
		navigator.geolocation.getCurrentPosition(function (position) {
			let lat = position.coords.latitude;
			let lon = position.coords.longitude;

			setCurrentLocCoords({
				lat: parseFloat(lat.toFixed(2)),
				lon: parseFloat(lon.toFixed(2)),
			});
		});
	}, []);

	useEffect(() => {
		// fetchLocData();
	}, [currentLocCoords]);

	return (
		<div className="App">
			<WeatherDataContext.Provider value={data}>
				<Routes>
					<Route path="/:city" element={<Details />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</WeatherDataContext.Provider>
		</div>
	);
}
