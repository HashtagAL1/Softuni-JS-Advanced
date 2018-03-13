class Data {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

function tickets(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    for (let input of arr) {
        let [dest, price, status] = input.split('|').filter(a => a !== '');

        result.push(new Ticket(dest, Number(price), status));
    }

    if (criteria === 'destination') {
        result.sort((a, b) => a.destination.localeCompare(b.destination));
    }
    else if (criteria === 'price') {
        result.sort((a, b) => a.price - b.price);
    }
    else if (criteria === 'status') {
        result.sort((a, b) => a.status.localeCompare(b.status))
    }

    return result;


}

class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if (otherRat.constructor.name === 'Rat') {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats
    }

    toString() {
        let res = this.name;

        for (let r of this.unitedRats) {
            res += `\n##${r.name}`;
        }
        return res;

    }
}

class Stringer {
    constructor(init, length) {
        this.innerString = init;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength === 0) {
            return '...';
        }
        else if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        }
        else {
            let res = this.innerString.slice(0, this.innerLength);
            return res + '...';
        }
    }
}

class CheckingAccount {
    constructor(clientId, email, firstName, lastName ) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    set clientId(cid) {
        let matches = cid.match(/^\d{6}$/g);
        if (matches === null) {
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = cid;
    }

    get clientId() {
        return this._clientId;
    }

    set email(newEmail) {
        let matches = newEmail.match(/^[a-zA-Z0-9]{1,}@[a-zA-Z.]+$/g);
        if (matches === null) {
            throw new TypeError('Invalid e-mail');
        }

        this._email = newEmail;
    }

    get email() {
        return this._email;
    }

    set firstName(f) {
        if (f.length < 3 || f.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        if (!(/^[a-zA-Z]+$/g.test(f))) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this._firstName = f;
    }

    get firstName() {
        return this._firstName;
    }


    set lastName(l) {
        if (l.length < 3 || l.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        if (!(/^[a-zA-Z]+$/g.test(l))) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this._lastName = l;
    }

    get lastName() {
        return this._lastName;
    }
}

let Extensible = (() => {
    let id = 0;
    class Extensible {
        constructor() {
            this.id = id;
            id++;
        }

        extend(template) {
            for (let p of Object.keys(template)) {
                if (typeof template[p] === 'function') {
                    Object.getPrototypeOf(this)[p] = template[p];
                }
                else {
                    this[p] = template[p];
                }
            }
        }
    }

    return Extensible;

})();

class SortedList {
    constructor() {
        this.numbers = [];
        this.size = 0;
    }

    add(element) {
        this.numbers.push(element);
        this.sort();
        this.size += 1;
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.numbers.splice(index, 1);
            this.sort();


            this.size -= 1;
        }
    }

    get(index) {
        if (index >= 0 && index < this.size) {
            return this.numbers[index];
        }
    }

    sort() {
        this.numbers.sort((a, b) => a - b);
    }
}

