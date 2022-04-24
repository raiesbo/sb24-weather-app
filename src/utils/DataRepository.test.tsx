import DataRepository from "./DataRepository";

const mockFetch = jest.spyOn(global, "fetch");

describe("repository tests", () => {
	it("returns the data", async () => {
		mockFetch.mockImplementation(() =>
			// @ts-ignore
			Promise.resolve({
				json: () => Promise.resolve({ test: "test result" }),
			})
		);

		const fetchedData = await DataRepository.getWeatherData({
			lat: 0,
			lon: 0,
		});

		expect(fetchedData).toEqual({ test: "test result" });
		expect(mockFetch).toHaveBeenCalledTimes(1);
	});
});
