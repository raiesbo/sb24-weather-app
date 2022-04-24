import formatTemp from "./formatTemp";

const casesSuit = [
	{
		data: 26.35,
		solution: "26 °C",
		isFahrenheit: false,
	},
	{
		data: undefined,
		solution: "N.A.",
		isFahrenheit: false,
	},
	{
		data: 0,
		solution: "0 °C",
		isFahrenheit: false,
	},
	{
		data: 26.35,
		solution: "79 °F",
		isFahrenheit: true,
	},
	{
		data: 0,
		solution: "32 °F",
		isFahrenheit: true,
	},
];

describe("format temperature", () => {
	it("returns the right format", () => {
		for (let singleCase of casesSuit) {
			const { data, solution, isFahrenheit } = singleCase;
			expect(formatTemp(data, isFahrenheit)).toBe(solution);
		}
	});
});
