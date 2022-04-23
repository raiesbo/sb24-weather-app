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
			<select
				className="unitsSelector"
				onChange={changeHandler}
				value={withFahrenheit ? "Fahrenheit" : "Celsius"}
			>
				<option value="Celsius">Celsius</option>
				<option value="Fahrenheit">Fahrenheit</option>
			</select>
		</div>
	);
}
