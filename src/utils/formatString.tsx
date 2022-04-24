// https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform capitalize

export default function formatString(text: string) {
	if (!text) return "";
	const textArr = text.split(" ");
	const formatedFirstWord = textArr[0]
		.split("")
		.map((letter, id) => {
			return id === 0 ? letter.toUpperCase() : letter;
		})
		.join("");
	textArr[0] = formatedFirstWord;
	return textArr.join(" ");
}
