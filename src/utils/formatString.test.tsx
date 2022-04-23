import formatString from "./formatString";

const casesSuit = [
	{
		text: "temperature",
		solution: "Temperature",
	},
	{
		text: "test text",
		solution: "Test text",
	},
	{
		text: "",
		solution: "",
	},
	{
		text: undefined,
		solution: "",
	},
];

describe("format temperature", () => {
	it("returns the right format", () => {
		for (let singleCase of casesSuit) {
			const { text, solution } = singleCase;
			expect(formatString(text)).toBe(solution);
		}
	});
});
