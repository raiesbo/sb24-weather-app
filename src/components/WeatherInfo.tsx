import "./WeatherInfo.css";

type Props = {
	sunrise: number;
	sunset: number;
	humidity: number;
	visibility: number;
};

// The "suninfo" divs would be better extracted into its own component instead of copying and pasting
export default function WeatherInfo({
	sunrise,
	sunset,
	humidity,
	visibility,
}: Props) {
	return (
		<div className="weatherInfoWrapper">
			<div className="sunInfo">
				<p>Sunrise</p>
				<p className="sunInfoData">
					{new Date(sunrise * 1000).toISOString().substr(11, 5)}
				</p>
			</div>
			<div className="sunInfo">
				<p>Sunset</p>
				<p className="sunInfoData">
					{new Date(sunset * 1000).toISOString().substr(11, 5)}
				</p>
			</div>
			<div className="sunInfo">
				<p>Humidity</p>
				<p className="sunInfoData">{`${humidity} %`}</p>
			</div>
			<div className="sunInfo">
				<p>Visibility</p>
				<p className="sunInfoData">{`${Math.round(
					visibility / 1000
				)} Km`}</p>
			</div>
		</div>
	);
}
