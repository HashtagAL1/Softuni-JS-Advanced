const rgbToHexColor = require('../lab');
let expect = require('chai').expect;
//TODO: fix messages

describe('rgbToHexColor', function () {
    it('Should return #141414 255, 158, 170', function () {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
    });
    it('Should return undefined nasko 20 20', function () {
        expect(rgbToHexColor(20, 'nasko', 20)).to.be.equal(undefined);
    });
    it('Should return undefined nasko 20 20', function () {
        expect(rgbToHexColor(20, 20, 'nasko')).to.be.equal(undefined);
    });
    it('Should return undefined nasko 20 20', function () {
        expect(rgbToHexColor('nasko', 20, 20)).to.be.equal(undefined);
    });
    it('Should return undefined nasko 20 20', function () {
        expect(rgbToHexColor(-1, 0, 0)).to.be.equal(undefined);
    });
    it('Should return undefined nasko 20 20', function () {
        expect(rgbToHexColor(0, -1, 0)).to.be.equal(undefined);
    });
    it('Should return undefined nasko 20 20', function () {
        expect(rgbToHexColor(0, 0, -1)).to.be.equal(undefined);
    });
    it('Should return undefined nasko 20 20', function () {
        expect(rgbToHexColor(256, 0, 0)).to.be.equal(undefined);
    });
    it('Should return undefined nasko 20 20', function () {
        expect(rgbToHexColor(0, 256, 0)).to.be.equal(undefined);
    });
    it('Should return undefined nasko 20 20', function () {
        expect(rgbToHexColor(0, 0, 256)).to.be.equal(undefined);
    });
    it('Should return #FFFFFF 255 255 255', function () {
        expect(rgbToHexColor(12, 13, 14)).to.be.equal('#0C0D0E');
    });
    it('Should return #FFFFFF 255 255 255', function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it('Should return #FFFFFF 255 255 255', function () {
        expect(rgbToHexColor(3.14, 0, 0)).to.be.equal(undefined);
    });
    it('Should return #FFFFFF 255 255 255', function () {
        expect(rgbToHexColor(0, 3.14, 0)).to.be.equal(undefined);
    });
    it('Should return #FFFFFF 255 255 255', function () {
        expect(rgbToHexColor(0, 0, 3.14)).to.be.equal(undefined);
    });


});