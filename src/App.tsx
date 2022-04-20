import "./App.css";
import Home from "./Home";
import Details from "./details";
import { Routes, Route } from "react-router-dom";
import DataRepository from "./utils/DataRepository";
import { useEffect, useState } from "react";

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
	const [berlinData, setBerlinData] = useState({});
	const [londonData, setLondonData] = useState({});
	const [currentLocationData, setCurrentLocationData] = useState({});

	useEffect(() => {
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

		fetchData();
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/:city" element={<Details />} />
				<Route
					path="/"
					element={
						<Home
							weatherData={[
								berlinData,
								londonData,
								currentLocationData,
							]}
						/>
					}
				/>
			</Routes>
		</div>
	);
}
