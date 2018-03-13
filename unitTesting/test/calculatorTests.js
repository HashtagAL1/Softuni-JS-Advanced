let expect = require('chai').expect;
const createCalculator = require('../lab');


describe('calculator', function () {

    let test;
    beforeEach(function () {
        test = createCalculator();
    });


    it('Should return undefined string', function () {
        test.add("nasko");
        expect(test.get().toString()).to.be.equal('NaN');
    });
    it('Should return undefined string', function () {
        expect(test.subtract('nasko')).to.be.equal(undefined);
    });
    it('', function () {
        test.add(1);
        expect(test.get()).to.be.equal(1);
    });
    it('', function () {
        test.subtract(1);
        expect(test.get()).to.be.equal(-1);

    });
    it('', function () {
        expect(test.get()).to.be.equal(0);

    });
    it('', function () {
        test.subtract('-1');
        test.add(1.1)
        expect(test.get()).to.be.equal(2.1);

    })



});