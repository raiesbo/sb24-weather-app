import DataRepository from "./DataRepository";

// @ts-ignore
const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() => {
	return Promise.resolve({
		json: () => ({ test: "test result" }),
	});
});

describe("repository tests", () => {
	it("returns the data", async () => {
		const fetchData = async () => {
			return DataRepository.getWeatherData({ lat: 0, lon: 0 });
		};
		expect(fetchMock).toHaveBeenCalled;
	});
});
