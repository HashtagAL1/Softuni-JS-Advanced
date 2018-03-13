let expect = require('chai').expect;
let Console = require('../homework');


describe('Console C# Tests', function () {

    it('msg', function () {
        expect(Console.writeLine('test')).to.be.equal('test');
    });

    it('msg', function () {
        expect(Console.writeLine({test: 'test'})).to.be.equal('{"test":"test"}');
    });

    it('msg', function () {
        expect(Console.writeLine('test {0} test {1}', 1, 2)).to.be.equal('test 1 test 2');
    });

    it('msg', function () {
        expect(Console.writeLine(1)).to.be.equal(undefined);
    });

    it('msg', function () {
        expect(() => Console.writeLine()).to.throw(TypeError);
    });

    it('msg', function () {
        expect(() => Console.writeLine('test {0}', 1, 2)).to.throw(RangeError);
    });

    it('msg', function () {
        expect(() => Console.writeLine('test {0} testMore {1}', 1)).to.throw(RangeError);
    });


});