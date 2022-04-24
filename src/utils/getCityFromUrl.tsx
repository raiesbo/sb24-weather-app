export default function getCityFromUrl(path: string): string {
	if (!path) return "";
	const arrayPath = path.split("/");
	const city = arrayPath[arrayPath.length - 1];
	return city === "berlin" || city === "london" ? city : "myLocation";
}
