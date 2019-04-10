const map = (array = [], func = item => item) => {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.push(func(array[i], i, array));
	}
	return newArray;
};
export default map;
