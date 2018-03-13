let isOddOrEven = require('../functions');
const expect = require('chai').expect;


describe('oddOrEven function tests', function () {
    it('Should return even upon execution with input parameter test', function () {
        expect(isOddOrEven('test')).to.be.equal('even');
    });
    it('Should return odd upon execution with input parameter check', function () {
        expect(isOddOrEven('check')).to.be.equal('odd');
    });
    it('Should return undefined upon execution with input parameter, the type of which is different ' +
        'than string', function () {
        expect(isOddOrEven(2)).to.be.equal(undefined);
    });

    it('Should return undefined upon execution with input parameter, the type of which is different' +
        'than string', function () {
        expect(isOddOrEven([])).to.be.equal(undefined);
    });
});