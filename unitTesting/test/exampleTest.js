let expect = require('chai').expect;
const SUM = require('../lab.js');

describe('sum(arr)', function () {
    it('Should return 3', function () {
        expect(SUM([1,2])).to.be.equal(3)
    });

    it('Should return 1', function () {
        expect(SUM([1])).to.be.equal(1);
    });

    it('Should return 0', function () {
        expect(SUM([])).to.be.equal(0);
    });

    it('Should return 3', function () {
        expect(SUM([1.5, 2.5, -1])).to.be.equal(3);
    });

    it('Should return NaN', function () {
        expect(SUM('invalid data')).to.be.NaN;
    });
});