import {expect} from 'chai';
import Sum from './sum'

describe('--ESCOPO SUM.JS--', () => {
	it('Sum should be a Function', () => {
		expect(Sum).to.be.a('function');
    });
    
    it('sum (1, 2) should return 3', () => {
        expect(Sum(1, 2)).to.be.equal(3);
    })
});