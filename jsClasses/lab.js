class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.height * this.width;
    }
}

function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    return [new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com')];

}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2;
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
    }
}

let cardObj = (function () {

    const Suits = {
        SPADES: '\u2660',
        HEARTS: '\u2665',
        DIAMONDS: '\u2666',
        CLUBS: '\u2663'
    };

    const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(f, s) {
            this.face = f;
            this.suit = s;
        }

        set face(f) {
            if (!faces.includes(f)) {
                throw new Error('Invalid face input');
            }
            this._face = f;
        }

        get face() {
            return this._face;
        }

        set suit(s) {
            let props = Object.keys(Suits);
            for (let p of props) {
                if (Suits[p] === s) {
                    this._suit = s;
                    return;
                }
            }
            throw new Error('Invalid suit input');

        }

        get suit() {
            return this._suit;
        }

        toString() {
            return `${this._face}${this._suit}`;
        }
    }



    return {Card, Suits};
})();
