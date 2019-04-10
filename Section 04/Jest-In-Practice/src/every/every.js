const Every = (array, func) => {
	for (let i = 0; i < array.length; i++) {
		if (!func(array[i], i, array)) {
			return false;
		}
	}
	return true;
};
export default Every;
