let expect = require('chai').expect;
const isSymmetric = require('../lab');

describe('isSymmetric(arr)', function () {
    it('Should return false [1,2,3,4,2,1]', function () {
        expect(isSymmetric([1,2,3,4,2,1])).to.be.equal(false);
    });
    it('Should return true [1,2,3,3,2,1]', function () {
        expect(isSymmetric([1,2,3,3,2,1])).to.be.equal(true);
    });
    it('Should return true [-1,2,-1]', function () {
        expect(isSymmetric([-1, 2, -1])).to.be.equal(true);
    });
    it('Should return true []', function () {
        expect(isSymmetric([])).to.be.equal(true);
    });
    it('Should return true [1,2,-1]', function () {
        expect(isSymmetric([1,2,-1])).to.be.equal(false);
    });
    it('Should return true [1]', function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it('Should return false {}', function () {
        expect(isSymmetric({})).to.be.equal(false);
    });
    it('Should return false string', function () {
        expect(isSymmetric('nasko')).to.be.equal(false);
    });
    it('Should return false nothing', function () {
        expect(isSymmetric()).to.be.equal(false);
    })
});