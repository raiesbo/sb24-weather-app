import "./Home.css";
import { useContext } from "react";
import WeatherDataContext from "./context/WeatherDataContext";
import DashboardItem from "./components/DashboardItem";
import UnitsSelector from "./components/UnitsSelector";

export default function Home() {
	const weatherData = useContext(WeatherDataContext);

	return (
		<>
			<header className="mainHeader">
				<h1>Dashboard</h1>
			</header>
			<main>
				<UnitsSelector />
				<div className="cardsWrapper">
					{weatherData &&
						// Why didn't you return the JSX directly instead of creating a function scope just to return it?
						Object.entries(weatherData).map((locData, i) => {
							return (
								<DashboardItem
									name={locData[0]}
									data={locData[1]}
									key={i}
								/>
							);
						})}
				</div>
			</main>
		</>
	);
}
