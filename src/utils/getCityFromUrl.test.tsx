import getCityFromUrl from "./getCityFromUrl";

const casesSuit = [
	{
		data: "subDirectory/test",
		solution: "myLocation",
	},
	{
		data: "subDirectory/berlin",
		solution: "berlin",
	},
	{
		data: "berlin",
		solution: "berlin",
	},
	{
		data: "subDirectory/london",
		solution: "london",
	},
	{
		data: "",
		solution: "",
	},
];

// Same as the other tests

describe("get city from path", () => {
	it("returns the correct city", () => {
		for (let singleCase of casesSuit) {
			const { data, solution } = singleCase;
			expect(getCityFromUrl(data)).toBe(solution);
		}
	});
});
