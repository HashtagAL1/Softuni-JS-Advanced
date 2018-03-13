let expect = require('chai').expect;
const mathEnforcer = require('../functions');

describe('mathEnforcer object tests', function () {
    let math;
    beforeEach(function () {
        math = mathEnforcer;
    });
    it('Should return 3 for input sum(1, 2)', function () {
        expect(math.sum(1,2)).to.be.equal(3);
    });
    it('Should return 3.5 for input sum(1.5, 2)', function () {
        expect(math.sum(1.5,2)).to.be.equal(3.5);
    });
    it('Should return 4 for input sum(1.5, 2.5)', function () {
        expect(math.sum(1.5,2.5)).to.be.equal(4);
    });
    it('Should return -4 for input sum(-1.5, -2.5)', function () {
        expect(math.sum(-1.5,-2.5)).to.be.equal(-4);
    });
    it('Should return undefined with input sum(a, 2), as there is an invalid number', function () {
        expect(math.sum('a',2)).to.be.equal(undefined);
    });
    it('Should return undefined with input sum(2, a), as there is an invalid number', function () {
        expect(math.sum(1,'a')).to.be.equal(undefined);
    });
    it('Should return undefined with input sum(a, a), as both numbers are invalid', function () {
        expect(math.sum('a','a')).to.be.equal(undefined);
    });
    it('Should return -8 with input subtractTen(2)', function () {
        expect(math.subtractTen(2)).to.be.equal(-8);
    });
    it('Should return -7.5 with input subtractTen(2.5)', function () {
        expect(math.subtractTen(2.5)).to.be.equal(-7.5);
    });
    it('Should return undefined with input subtractTen(test), as the input parameter is NaN', function () {
        expect(math.subtractTen('test')).to.be.equal(undefined);
    });
    it('Should return -11 with input subtractTen(-1)', function () {
        expect(math.subtractTen(-1)).to.be.equal(-11);
    });
    it('Should return 12 with input addFive(7)', function () {
        expect(math.addFive(7)).to.be.equal(12);
    });
    it('Should return -2 with input addFive(-7)', function () {
        expect(math.addFive(-7)).to.be.equal(-2);
    });
    it('Should return undefined with input addFive(test), as the input parameter is NaN', function () {
        expect(math.addFive('test')).to.be.equal(undefined);
    });
    it('Should return 7.5 with input addFive(2.5)', function () {
        expect(math.addFive(2.5)).to.be.equal(7.5);
    });
});