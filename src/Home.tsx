import "./Home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import WeatherDataContext from "./utils/WeatherDataContext";

export default function Home() {
	const weatherData = useContext(WeatherDataContext);

	console.log("weatherData", weatherData);

	return (
		<>
			<header className="mainHeader">
				<h1>Dashboard</h1>
			</header>
			<main>
				<div className="cardsWrapper">
					{weatherData &&
						Object.entries(weatherData).map((locData) => {
							return (
								<Link
									to={`/${locData[0]}`}
									style={{ textDecoration: "none" }}
								>
									<div className="card">
										<p>{locData[0]}</p>
										<p>{`${Math.round(
											locData[1].main.temp
										)} °C`}</p>
									</div>
								</Link>
							);
						})}
				</div>
			</main>
		</>
	);
}
