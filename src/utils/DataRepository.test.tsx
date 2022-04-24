import getWeatherData from "./DataRepository";

// There's not really a reason why you are mocking fetch at a global scope
const mockFetch = jest.spyOn(global, "fetch");

// Instead of using "mockImplementation" you could have used mockResolvedValueOnce to return the value directly instead of creating a promise

describe("repository tests", () => {
	it("returns the data", async () => {
		mockFetch.mockImplementation(() =>
			// @ts-ignore
			Promise.resolve({
				json: () => Promise.resolve({ test: "test result" }),
			})
		);

		const fetchedData = await getWeatherData({
			lat: 0,
			lon: 0,
		});

		expect(fetchedData).toEqual({ test: "test result" });
		expect(mockFetch).toHaveBeenCalledTimes(1);
	});
});
