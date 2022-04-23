import "./App.css";
import Home from "./Home";
import Details from "./City";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import DataRepository from "./utils/DataRepository";
import WeatherDataContext from "./context/WeatherDataContext";
import UnitsContext from "./context/UnitsContext";
import ErrorModal from "./components/ErrorModal";

export default function App() {
	const [berlinData, setBerlinData] = useState(null);
	const [londonData, setLondonData] = useState(null);
	const [currentLocData, setCurrentLocData] = useState(null);
	const [currentLocCoords, setCurrentLocCoords] = useState(null);
	const [withFahrenheit, setWithFahrenheit] = useState(false);
	const [isModalActive, setIsModalActive] = useState(false);

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

	const fetchData = async () => {
		if (berlinData && londonData) return;
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
		if (currentLocData || !currentLocCoords) return;
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
		fetchData();
		// Get localization coords
		navigator.geolocation.getCurrentPosition(
			(position) => {
				let lat = position.coords.latitude;
				let lon = position.coords.longitude;
				setCurrentLocCoords({
					lat: parseFloat(lat.toFixed(2)),
					lon: parseFloat(lon.toFixed(2)),
				});
			},
			() => setIsModalActive(true)
		);
	}, []);

	useEffect(() => {
		// Fetch user's data
		fetchLocData();
	}, [currentLocCoords]);

	return (
		<div className="App">
			<WeatherDataContext.Provider
				value={{
					Berlin: berlinData,
					London: londonData,
					"My location": currentLocData,
				}}
			>
				<UnitsContext.Provider
					value={{ withFahrenheit, setWithFahrenheit }}
				>
					<Routes>
						<Route path="/:city" element={<Details />} />
						<Route path="/" element={<Home />} />
					</Routes>
					<ErrorModal
						isActive={isModalActive}
						modalHandler={setIsModalActive}
					/>
				</UnitsContext.Provider>
			</WeatherDataContext.Provider>
		</div>
	);
}
