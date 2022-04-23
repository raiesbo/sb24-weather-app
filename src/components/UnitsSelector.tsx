import "./UnitsSelector.css";
import { useContext } from "react";
import UnitsContext from "../context/UnitsContext";

export default function UnitsSelector() {
	const { withFahrenheit, setWithFahrenheit } = useContext(UnitsContext);

	const changeHandler = (e: any) => {
		setWithFahrenheit(e.target.value === "Celsius" ? false : true);
	};

	return (
		<div className="unitsSelectorWrapper">
			<label>Temperature unit:</label>
			<select className="unitsSelector" onChange={changeHandler}>
				<option value="Celsius" selected={!withFahrenheit}>
					Celsius
				</option>
				<option value="Fahrenheit" selected={withFahrenheit}>
					Fahrenheit
				</option>
			</select>
		</div>
	);
}
