import "./App.css";
import Home from "./Home";
import Details from "./City";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import getWeatherData from "./utils/DataRepository";
import WeatherDataContext from "./context/WeatherDataContext";
import UnitsContext from "./context/UnitsContext";
import ErrorModal from "./components/ErrorModal";

// All those states could have been better represented with useReducer and a "LocationsObject"

export default function App() {
	const [berlinData, setBerlinData] = useState(null);
	const [londonData, setLondonData] = useState(null);
	const [currentLocData, setCurrentLocData] = useState(null);
	// Did you mean
	const [currentLocCoords, setCurrentLocCoords] = useState(null);
	const [withFahrenheit, setWithFahrenheit] = useState(false);
	const [isModalActive, setIsModalActive] = useState(false);

	// No need to make this an object, const defaultCities = [{lat, lon}] would have given you an easier time working with all the cities
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
		// const [berlin, london] = await Promise.all(defaultCities.map(city => getWeatherData(city)))
		const [berlin, london] = await Promise.all([
			getWeatherData({
				lat: defaultCities.berlin.lat,
				lon: defaultCities.berlin.lon,
			}),
			getWeatherData({
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
			// getWeatherData(currentLocCoords)
			getWeatherData({
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		// Wouldn't it be better to write the fetchLocData here? you are only using it in this useEffect

		// Fetch user's data
		fetchLocData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentLocCoords]);

	return (
		// In all the other classes you are using camelCase, why did you capitalize App?
		<div className="App">
			<WeatherDataContext.Provider
				value={{
					berlin: berlinData,
					london: londonData,
					myLocation: currentLocData,
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
