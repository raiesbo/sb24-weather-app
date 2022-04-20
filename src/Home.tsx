import "./Home.css";
import { Link } from "react-router-dom";

export default function Home({ weatherData }: any) {
	return (
		<>
			<h1>Dashboard</h1>
			<div className="cardsWrapper">
				{weatherData &&
					weatherData.map((entry: any) => {
						console.log(entry);
						return (
							entry.name && (
								<Link to={`/${entry.name}`}>
									<div className="card">
										<p>{entry.name}</p>
										<p>{entry.main.temp}</p>
									</div>
								</Link>
							)
						);
					})}
			</div>
		</>
	);
}
