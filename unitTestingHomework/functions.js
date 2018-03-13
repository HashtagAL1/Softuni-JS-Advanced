function validateRequest(obj) {

    let isValidMethod = (function () {
        switch (obj.method) {
            case 'GET':
                return true;
            case 'POST':
                return true;
            case 'DELETE':
                return true;
            case 'CONNECT':
                return true;
            default:
                return false;
        }
    })();

    let isValidVersion = (function () {
        switch (obj.version) {
            case 'HTTP/0.9':
                return true;
            case 'HTTP/1.0':
                return true;
            case 'HTTP/1.1':
                return true;
            case 'HTTP/2.0':
                return true;
            default:
                return false;
        }
    })();



    if (!obj.hasOwnProperty('method') || (!isValidMethod)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (obj.hasOwnProperty('uri')) {

        let uriPattern = /^[a-zA-Z0-9.]+$/g;
        let uriMatch = obj.uri.match(uriPattern);
        if (uriMatch === null) {
            throw new Error('Invalid request header: Invalid URI');
        }


    }
    else
        throw new Error('Invalid request header: Invalid URI');


    if (!obj.hasOwnProperty('version') || (!isValidVersion)) {
        throw new Error('Invalid request header: Invalid Version');

    }
    if (obj.hasOwnProperty('message')) {

        let msgPattern = /[<>\\&'"]+/g;

        let msgMatch = obj.message.match(msgPattern);
        if (msgMatch !== null) {
            throw new Error('Invalid request header: Invalid Message');
        }


    }
    else
        throw new Error('Invalid request header: Invalid Message');





    return obj;
}

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}