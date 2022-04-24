export default async function getWeatherData({ lat, lon }: any) {
	const API_KEY = "f33a484cf794d08d0148764789aaba32";
	const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	try {
		const response = await fetch(URL);
		const data = await response.json();
		return data;
	} catch (e) {
		return e;
	}
}
