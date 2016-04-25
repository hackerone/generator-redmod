export default (words = [], namespace = '', separator = '/') => {
	let output = {}
	words.forEach((word) => {
		output[word] = namespace + separator + word;
	});

	return output;
};