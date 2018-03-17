let expect = require('chai').expect;
const createList = require('../exam');


describe('CreateList function tests', function () {
    let list;
    beforeEach(function () {
        list = createList();
    });

    it('msg', function () {
        list.add(1);
        list.add('test');
        expect(list.toString()).to.be.equal('1, test');
    });

    it('msg', function () {
        list.add(1);
        list.shiftRight();
        expect(list.toString()).to.be.equal('1');
    });

    it('msg', function () {
        list.add(1);
        list.shiftLeft();
        expect(list.toString()).to.be.equal('1');
    });

    it('msg', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.shiftLeft();
        expect(list.toString()).to.be.equal('2, 3, 1');
    });

    it('msg', function () {
        list.shiftLeft();
        expect(list.toString()).to.be.equal('');
    });

    it('msg', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.shiftRight();
        expect(list.toString()).to.be.equal('3, 1, 2');
    });

    it('msg', function () {
        list.shiftRight();
        expect(list.toString()).to.be.equal('');
    });

    it('msg', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(0, 1)).to.be.equal(true);
    });

    it('msg', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.swap(0, 1);
        expect(list.toString()).to.be.equal('2, 1, 3');
    });

    it('msg', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(-1, 1)).to.be.equal(false);
    });

    it('msg', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(0, 6)).to.be.equal(false);
    });


    it('msg', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(0, 0)).to.be.equal(false);
    });

    it('msg', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(6, 0)).to.be.equal(false);
    });


    it('msg', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(0, -1)).to.be.equal(false);
    });

    it('msg', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(1.4, 1)).to.be.equal(false);
    });

    it('msg', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(0, 1.4)).to.be.equal(false);
    });

    it('msg', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap('test', 1)).to.be.equal(false);
    });

    it('msg', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.swap(0, 'test')).to.be.equal(false);
    });




});