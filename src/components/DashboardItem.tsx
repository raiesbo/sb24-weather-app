import "./DashboardItem.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UnitsContext from "../context/UnitsContext";
import formatTemp from "../utils/formatTemp";
import formatString from "../utils/formatString";

type Props = {
	name: string;
	data: any;
};

export default function DashboardItem({ name, data }: Props) {
	const { withFahrenheit } = useContext(UnitsContext);

	return !data?.name ? (
		<div className="card">
			<p>{name}</p>
			<p>N.A</p>
		</div>
	) : (
		<Link to={`/${name}`} style={{ textDecoration: "none" }}>
			<div className="card">
				<p>{formatString(name === "myLocation" ? data.name : name)}</p>
				<p>{formatTemp(data.main.temp, withFahrenheit)}</p>
			</div>
		</Link>
	);
}
