let expect = require('chai').expect;
const nuke = require('../functions');
const $ = require('jquery');

describe('armagedomTests, nuke function tests', function () {

    beforeEach(function () {
        document.body.innerHTML = '<div id="target">\n' +
            '    <div class="nested target">\n' +
            '        <p>This is some text</p>\n' +
            '    </div>\n' +
            '    <div class="target">\n' +
            '        <p>Empty div</p>\n' +
            '    </div>\n' +
            '    <div class="inside">\n' +
            '        <span class="nested">Some more text</span>\n' +
            '        <span class="target">Some more text</span>\n' +
            '    </div>\n' +
            '</div>\n';
    });

    it('Should not change the html, as the selectors are the same', function () {
        let before = document.body.innerHTML;
        nuke('.nested', '.nested');
        let after = document.body.innerHTML;
        expect(before).to.be.equal(after);
    });
    it('Should not change the html, as the selectors are the same', function () {
        let before = document.body.innerHTML;
        nuke('#target', '#target');
        let after = document.body.innerHTML;
        expect(after).to.be.equal(before);
    });
    it('Should not change the html, as there is an invalid selector', function () {
        let before = document.body.innerHTML;
        nuke(1, '.nested');
        let after = document.body.innerHTML;
        expect(before).to.be.equal(after);
    });
    it('Should not change the html, as there is an invalid selector', function () {
        let before = document.body.innerHTML;
        nuke('.nested', 1);
        let after = document.body.innerHTML;
        expect(before).to.be.equal(after);
    });
    it('Should not change the html, as both of the selectors are invalid', function () {
        let before = document.body.innerHTML;
        nuke(1, 1);
        let after = document.body.innerHTML;
        expect(before).to.be.equal(after);
    });
    it('Should remove 1 span element, which resides in an element of class target', function () {
        let spans = $('span').length;
        nuke('.target', 'span');
        let afterSpans = $('span').length;
        expect(spans).to.be.equal(afterSpans + 1);
    });
    it('Should remove all divs of class target', function () {
        let divs = $('div').length;
        nuke('div', '.target');
        let afterDivs = $('div').length;
        expect(divs).to.be.equal(afterDivs + 2);
    });
});
