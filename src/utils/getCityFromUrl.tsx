export default function getCityFromPath(path: string): string {
	if (!path) return "";
	const arrayPath = path.split("/");
	const city = arrayPath[arrayPath.length - 1];
	return city === "Berlin" || city === "London" ? city : "Your location";
}
