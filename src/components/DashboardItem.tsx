import "./DashboardItem.css";
import { Link } from "react-router-dom";

type Props = {
	name: string;
	data: any;
};

export default function DashboardItem({ name, data }: Props) {
	return !data?.name ? (
		<div className="card">
			<p>{name}</p>
			<p>N.A</p>
		</div>
	) : (
		<Link to={`/${name}`} style={{ textDecoration: "none" }}>
			<div className="card">
				<p>{name === "My location" ? data.name : name}</p>
				<p>{`${Math.round(data.main.temp)} °C`}</p>
			</div>
		</Link>
	);
}
