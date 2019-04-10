const Some = (array, func) => {
    for (let i = 0; i < array.length; i ++) {
        if (func(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

export default Some;