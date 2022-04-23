import "./WeatherTemperature.css";

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
			<p className="mainTemp">{`${Math.round(temp)}°C`}</p>
			<div className="subTempWrapper">
				<p className="subTemp">
					H: {`${Math.round(tempMax)}`} <sup>&deg;</sup>C
				</p>
				<p>
					L: {`${Math.round(tempMin)}`} <sup>&deg;</sup>C
				</p>
			</div>
		</div>
	);
}
