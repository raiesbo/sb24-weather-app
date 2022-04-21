import "./App.css";
import Home from "./Home";
import Details from "./details";
import { Routes, Route } from "react-router-dom";
import DataRepository from "./utils/DataRepository";
import { useEffect, useState } from "react";
import WeatherDataContext from "./utils/WeatherDataContext";
import defaultValues from "./utils/defaultVales";

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

export default function App() {
	const [berlinData, setBerlinData] = useState(defaultValues);
	const [londonData, setLondonData] = useState(defaultValues);
	const [currentLocData, setCurrentLocData] = useState(defaultValues);

	const data = {
		Berlin: berlinData,
		London: londonData,
		"Your location": currentLocData,
	};

	useEffect(() => {
		const fetchData = async () => {
			const [berlin, london, currentLoc] = await Promise.all([
				DataRepository.getWeatherData({
					lat: defaultCities.berlin.lat,
					lon: defaultCities.berlin.lon,
				}),
				DataRepository.getWeatherData({
					lat: defaultCities.london.lat,
					lon: defaultCities.london.lon,
				}),
				DataRepository.getWeatherData({
					lat: defaultCities.london.lat,
					lon: defaultCities.london.lon,
				}),
			]);

			setBerlinData(berlin);
			setLondonData(london);
			setCurrentLocData(currentLoc);
		};

		fetchData();
	}, []);

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
