let expect = require('chai').expect;
const Sumator = require('../examPrep');


describe('Sumator Class Tests', function () {

    it('msg', function () {
        let sumator = new Sumator();
        sumator.add('test');
        expect(sumator.data[0]).to.be.equal('test');
    });

    it('msg', function () {
        let sumator = new Sumator();
        sumator.add(1);
        expect(sumator.data[0]).to.be.equal(1);
    });

    it('msg', function () {
        let sumator = new Sumator();
        sumator.add(1);
        sumator.add(2);
        expect(sumator.sumNums()).to.be.equal(3);
    });

    it('msg', function () {
        let sumator = new Sumator();
        sumator.add(1);
        sumator.add(2);
        sumator.add('test');
        expect(sumator.sumNums()).to.be.equal(3);
    });


    it('msg', function () {
        let sumator = new Sumator();
        sumator.add('test');
        sumator.add('more test');
        expect(sumator.sumNums()).to.be.equal(0);
    });

    it('msg', function () {
        let sumator = new Sumator();
        sumator.add(1);
        sumator.add(2);
        sumator.add(3);
        sumator.add(4);
        sumator.removeByFilter(x => x % 2 === 0);
        expect(sumator.toString()).to.be.equal('1, 3');
    });

    it('msg', function () {
        let sumator = new Sumator();
        expect(sumator.toString()).to.be.equal('(empty)');
    });


});