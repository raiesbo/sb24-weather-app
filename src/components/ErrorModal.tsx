import "./ErrorModal.css";

// In other components you use a type Props variable to define the types, why did you inline them here?

// This component is not a Modal, it's a Snackbar
// Why didn't you inline the fragment when the modal is not active
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
