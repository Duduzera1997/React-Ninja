const Sum = require('./sum');

console.assert(typeof Sum === 'function', 'Sum is not a function!');
console.assert(Sum(1, 2) === 3, 'Sum(1,2) not equals 3!');
console.assert(Sum(2, 3), 'Sum(2, 3) not equals 5!');

console.log('All tests Passed!');
