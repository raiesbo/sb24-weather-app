import "./ErrorModal.css";

export default function ErrorModal({
	isActive,
	modalHandler,
}: {
	isActive: boolean;
	modalHandler: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	if (!isActive) return <></>;

	return (
		<div className="errorModal">
			<p className="errorMessage">
				The geolocation needs to be activated in your browser to display
				your current location's weather.
			</p>
			<i
				className="fa-solid fa-x"
				onClick={() => modalHandler(!isActive)}
			></i>
		</div>
	);
}
