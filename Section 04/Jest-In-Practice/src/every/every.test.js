import { expect } from 'chai';
import Every from './every';

describe('---Every Test---', () => {
	test('Every should be a Function', () => {
		expect(Every).to.be.a('function');
	});

	test('Every([], (item) => item) should return true', () => {
		expect(Every([], item => item)).to.be.ok;
	});

	test('Every([0, 2, 3], (item) => item) should return false', () => {
		expect(Every([0, 2, 3], item => item)).to.not.be.ok;
	});

	test('Every([1, 2, 3], (item) => item) should return true', () => {
		expect(Every([1, 2, 3], item => item)).to.be.ok;
	});

	test('Every([1, 2, 3], (item, index) => index === item - 1) should return true', () => {
		expect(Every([1, 2, 3], (item, index) => index === item - 1)).to.be.ok;
	});

	test('Every([1, 2, 3], (item, index, array) => array.length === 3) should return true', () => {
		expect(Every([1, 2, 3], (item, index, array) => array.length === 3)).to.be.ok;
	});
});
