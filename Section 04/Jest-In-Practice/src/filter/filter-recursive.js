const Filter = (array, func) => {
	return (function filterInternal(arrayInternal, counter) {
		const [head, ...tail] = arrayInternal;

		return arrayInternal.length === 0
			? []
			: (func(head, counter, array) ? [head] : []).concat(
					filterInternal(tail, counter + 1)
			  );
	})(array, 0);
};

export default Filter;
