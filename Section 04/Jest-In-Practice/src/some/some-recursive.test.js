import { expect } from 'chai';
import Some from './some-recursive';

describe('---Some Test---', () => {
	test('Some should be a Function.', () => {
		expect(Some).to.be.a('function');
	});

	test('Some([], (item) => item) should return false', () => {
		expect(Some([], item => item)).to.not.be.ok;
	});
	test('Some([1, 2], (item) => item) should return true', () => {
		expect(Some([1, 2], item => item)).to.be.ok;
	});
	test('Some([1, 2, 3], (item, index) => index % 2 === 0 ) should return true', () => {
        expect(Some([1, 2, 3], (item, index) => index % 2 === 0 )).to.be.ok;
    });
	test('Some([1, 3, 5], (item, index) => index % 2 === 0 ) should return false', () => {
        expect(Some([1, 3, 5], (item) => item % 2 === 0 )).to.be.not.ok;
    });
	test('Some([1, 3, 5], (item, index, array) => array.indexOf(2) === 1 ) should return true', () => {
        expect(Some([1, 2, 3], (item, index, array) => array.indexOf(2) === 1 )).to.be.ok;
    });
});
