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
				The geolocation needs to be activated to display your location`s
				weather.
			</p>
			<i
				className="fa-solid fa-x"
				onClick={() => modalHandler(!isActive)}
			></i>
		</div>
	);
}
