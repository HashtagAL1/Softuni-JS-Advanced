let lookupChar = require('../functions');
const expect = require('chai').expect;

describe('lookupChar function tests', function () {
    it('Should return undefined with input lookupChar([], 1), as the type of [] is not string', function () {
        expect(lookupChar([], 1)).to.be.equal(undefined);
    });
    it('Should return undefined with input lookupChar(check, []), as the type of ' +
        'the index parameter ([]) is NaN', function () {
        expect(lookupChar('check', [])).to.be.equal(undefined);
    });
    it('Should return Incorrect index with input lookupChar(check, 5), as the index parameter is invalid', function () {
        expect(lookupChar('check', 5)).to.be.equal('Incorrect index');
    });
    it('Should return Incorrect index with input lookupChar(check, -1), as the index parameter is negative', function () {
        expect(lookupChar('check', -1)).to.be.equal('Incorrect index');
    });
    it('Should return h with input lookupChar(check, 1)', function () {
        expect(lookupChar('check', 1)).to.be.equal('h');
    });
    it('Shoud return undefined with input lookupChar(check, 3.14), as the index parameter is not an integer', function () {
        expect(lookupChar('check', 3.14)).to.be.equal(undefined);
    });
});