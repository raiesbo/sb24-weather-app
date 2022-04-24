// Is this function necessary at all? Why don't you just use the name of the city?

export default function getCityFromUrl(path: string): string {
	if (!path) return "";
	const arrayPath = path.split("/");
	const city = arrayPath[arrayPath.length - 1];
	return city === "berlin" || city === "london" ? city : "myLocation";
}
