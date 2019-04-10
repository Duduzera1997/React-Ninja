import { expect } from 'chai';
import Filter from './filter-recursive';

describe('---Filter Tests---', () => {
	test('Filter should be a Function.', () => {
		expect(Filter).to.be.a('function');
	});

	test('Filter([1, 2, 3], (item) => item) should return [1, 2, 3]', () => {
		expect(Filter([1, 2, 3], item => item)).to.be.deep.equal([1, 2, 3]);
	});
	test('Filter([0, 1, 2], (item) => item) should return [1, 2]', () => {
		expect(Filter([0, 1, 2], item => item)).to.be.deep.equal([1, 2]);
	});
	test('Filter([1, 2, 3], (item) => item < 2) should return [1, 2, 3]', () => {
		expect(Filter([1, 2, 3], item => item < 2)).to.be.deep.equal([1]);
	});
	test('Filter([1, 2, 3, 5], (item, index) => item === indice + 1) should return [1, 2, 3]', () => {
		expect(
			Filter([1, 2, 3, 5], (item, index) => item === index + 1)
		).to.be.deep.equal([1, 2, 3]);
	});
	test('Filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item)))', () => {
		expect(
			Filter(
				[1, 2, 3, 2, 1, 5],
				(item, index, array) => index === array.indexOf(item)
			)
		).to.be.deep.equal([1, 2, 3, 5]);
	});
	test('', () => {});
});
