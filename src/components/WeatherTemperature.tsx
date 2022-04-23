import "./WeatherTemperature.css";
import UnitsContext from "../context/UnitsContext";
import { useContext } from "react";
import formatTemp from "../utils/formatTemp";

type Props = {
	description: string;
	icon: string;
	temp: number;
	tempMax: number;
	tempMin: number;
};

export default function WeatherTemperature({
	description,
	icon,
	temp,
	tempMax,
	tempMin,
}: Props) {
	const { withFahrenheit } = useContext(UnitsContext);

	return (
		<div className="cityTemp">
			<div className="info">
				<p>{description}</p>
				<img
					className="weatherIcon"
					src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
					alt={description}
					title={description}
				/>
			</div>
			<p className="mainTemp">{formatTemp(temp, withFahrenheit)}</p>
			<div className="subTempWrapper">
				<p className="subTemp">
					H: {formatTemp(tempMax, withFahrenheit)} <sup>&deg;</sup>C
				</p>
				<p>
					L: {formatTemp(tempMin, withFahrenheit)} <sup>&deg;</sup>C
				</p>
			</div>
		</div>
	);
}
