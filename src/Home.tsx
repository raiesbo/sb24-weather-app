import "./Home.css";
import { useContext } from "react";
import WeatherDataContext from "./utils/WeatherDataContext";
import DashboardItem from "./components/DashboardItem";

export default function Home() {
	const weatherData = useContext(WeatherDataContext);

	return (
		<>
			<header className="mainHeader">
				<h1>Dashboard</h1>
			</header>
			<main>
				<div className="cardsWrapper">
					{weatherData &&
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
