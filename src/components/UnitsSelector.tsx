import "./UnitsSelector.css";
import { useContext } from "react";
import UnitsContext from "../context/UnitsContext";

// The active value could have been simplified with e.target.value !== "Celsius"
// Your UnitsContext could have been simplified a lot if you saved the actual value, C or F instead of a boolean
export default function UnitsSelector() {
	const { withFahrenheit, setWithFahrenheit } = useContext(UnitsContext);

	const changeHandler = (e: any) => {
		setWithFahrenheit(e.target.value === "Celsius" ? false : true);
	};

	return (
		<div className="unitsSelectorWrapper">
			<label>Preferred units:</label>
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
