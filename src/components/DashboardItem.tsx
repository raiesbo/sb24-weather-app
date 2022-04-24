import "./DashboardItem.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UnitsContext from "../context/UnitsContext";
import formatTemp from "../utils/formatTemp";
import formatString from "../utils/formatString";

// Data is non-descriptive, it also doesn't help that you didn't assign a proper type
type Props = {
	name: string;
	data: any;
};

// Why didn't you assign "My location" to the name variable?
export default function DashboardItem({ name, data }: Props) {
	const { withFahrenheit } = useContext(UnitsContext);

	return !data?.name ? (
		<div className="card">
			<p>{name === "myLocation" ? "My location" : name}</p>
			<p>N.A.</p>
		</div>
	) : (
		<Link to={`/${name}`} style={{ textDecoration: "none" }}>
			<div className="card">
				<p>{name === "myLocation" ? data.name : name}</p>
				<p>{formatTemp(data.main.temp, withFahrenheit)}</p>
			</div>
		</Link>
	);
}
