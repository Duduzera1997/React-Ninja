import {expect} from 'chai';
import Sum from './sum'

describe('--ESCOPO SUM.JS--', () => {
	it('Sum should be a Function', () => {
		expect(Sum).to.be.a('function');
	});
});