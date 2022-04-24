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

// When you write tests you must be descriptive of what the expected value should be, putting them in an array makes it difficult for a person to read and refactor

describe("format temperature", () => {
	it("returns the right format", () => {
		for (let singleCase of casesSuit) {
			const { text, solution } = singleCase;
			expect(formatString(text)).toBe(solution);
		}
	});
});
