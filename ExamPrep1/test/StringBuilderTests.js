let expect = require('chai').expect;
const StringBuilder = require('../examPrep');

describe('StringBuilder tests', function () {

    it('msg', function () {
        let str = new StringBuilder('test');
        expect(str.toString()).to.be.equal('test');
    });

    it('msg', function () {
        let str = new StringBuilder('test');
        str.append(' more tests.');
        expect(str.toString()).to.be.equal('test more tests.');
    });

    it('msg', function () {
        let str = new StringBuilder('test');
        str.prepend('more tests, ');
        expect(str.toString()).to.be.equal('more tests, test');
    });

    it('msg', function () {
        let str = new StringBuilder('test');
        str.insertAt(' middle ', 2);
        expect(str.toString()).to.be.equal('te middle st');
    });

    it('msg', function () {
        let str = new StringBuilder('test');
        str.remove(1, 2);
        expect(str.toString()).to.be.equal('tt');
    });

    it('msg', function () {
        expect(() => new StringBuilder(1)).to.throw(TypeError);
    });

    it('msg', function () {
        let str = new StringBuilder();
        expect(str.toString()).to.be.equal('');
    });

    it('msg', function () {
        let str = new StringBuilder('test');
        expect(() => str.append(1)).to.throw(TypeError);
    });

    it('msg', function () {
        let str = new StringBuilder('test');
        expect(() => str.prepend(1)).to.throw(TypeError);
    });

    it('msg', function () {
        let str = new StringBuilder('test');
        expect(() => str.insertAt(1, 1)).to.throw(TypeError);
    });

});