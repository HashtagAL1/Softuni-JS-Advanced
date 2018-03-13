let expect = require('chai').expect;
const sharedObject = require('../functions');
const $ = require('jquery');

describe('sharedObject object tests', function () {

    let obj;
    beforeEach(function () {
        obj = sharedObject;
        document.body.innerHTML = '<div id="wrapper">\n' +
            '        <input type="text" id="name">\n' +
            '        <input type="text" id="income">\n' +
            '    </div>';
    });

    it('Name property should initially be set to null', function () {
        expect(obj.name).to.be.equal(null);
    });
    it('Income property should initially be set to null', function () {
        expect(obj.income).to.be.equal(null);
    });
    it('Upon execution of changeName(test), the value of the name property should be changed to test', function () {
        obj.changeName('test');
        expect(obj.name).to.be.equal('test');
    });
    it('Upon execution of changeName(test), the value of the textbox(#name) should be changed to test', function () {
        obj.changeName('test');
        let newName = $('#name').val();
        expect(newName).to.be.equal('test');
    });
    it('Upon execution of changeName, the value of the name property should remain null', function () {
        obj.changeName('');
        expect(obj.name).to.be.equal(null);
    });
    it('Using a predefined value for the name property, upon execution of the changeName function and ' +
        'then the updateName function, the value of the name property should be set to the value of ' +
        'the #name textbox, unless this value is an empty string', function () {
        obj.name = 'test';
        obj.changeName('check');
        let oldName = $('#name').val();
        obj.updateName();
        let newName = $('#name').val();
        if (newName === '') {
            expect(obj.name).to.be.equal(oldName);
        }
        else
            expect(obj.name).to.be.equal(newName);
    });
    it('Upon execution of changeIncome(1000), the value of the income property should be set to 1000', function () {
        obj.changeIncome(1000);
        expect(obj.income).to.be.equal(1000);
    });
    it('Upon execution of changeIncome(test), the value of the income property should remain null, ' +
        'as the input parameter is invalid(NaN)', function () {
        obj.changeIncome('test');
        expect(obj.income).to.be.equal(null);
    });
    it('Upon execution of changeIncome(3.14), the value of the income property should remain null, ' +
        'as the input parameter is invalid (not an integer)', function () {
        obj.changeIncome(3.14);
        expect(obj.income).to.be.equal(null);
    });
    it('Upon execution of changeIncome(-1), the value of the income property should remain null, ' +
        'as the input parameter is invalid (negative value)', function () {
        obj.changeIncome(-1);
        expect(obj.income).to.be.equal(null);
    });
    it('Upon execution of changeIncome(0), the value of the income property should remain null, ' +
        'as the input parameter is invalid (0)', function () {
        obj.changeIncome(0);
        expect(obj.income).to.be.equal(null);
    });
    it('Upon execution of the updateName function, the value of the name property should be set' +
        ' to the value of the #name textbox, unless this value is an empty string', function () {
        let newName = $('#name').val();
        obj.updateName();
        if (newName === '') {
            expect(obj.name).to.be.equal(null);
        }
        else
            expect(obj.name).to.be.equal(newName);
    });
    it('Upon execution of the updateIncome function, the value of the income property should be set ' +
        'to the value of the #income textbox, unless this value is NaN or less than 1', function () {
        let newIncome = $('#income').val();
        obj.updateIncome();
        if (typeof newIncome !== 'number' || newIncome <= 0 || isNaN(newIncome)) {
            expect(obj.income).to.be.equal(null);
        }
        else
            expect(obj.income).to.be.equal(newIncome);
    });
});