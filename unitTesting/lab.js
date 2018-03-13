function subSum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }
    if (end >= arr.length) {
        end = arr.length - 1;
    }

    let sum = 0;
    for(let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }

    return sum;
}

function createCard(face, suit) {
    const FACES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const SUITS = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (FACES.indexOf(face) < 0 || !SUITS.hasOwnProperty(suit)) {
        throw new Error('Incorrect input data');
    }

    return {
        face: face,
        suit: suit,
        toString: function () {
            return face + SUITS[suit];
        }
    };




}

function deckOfCards(cards) {
    function createCard(face, suit) {
        const FACES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const SUITS = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        if (FACES.indexOf(face) < 0 || !SUITS.hasOwnProperty(suit)) {
            throw new Error('Incorrect input data');
        }

        return {
            face: face,
            suit: suit,
            toString: function () {
                return face + SUITS[suit];
            }
        };




    }

    let res = [];
    for (let c of cards) {
        let suit = c[c.length - 1];
        let card = c.substring(0, c.length - 1);
        try {
            res.push(createCard(card, suit));
        } catch (ex) {
            console.log('Invalid card: ' + c);
            return;
        }
    }

    console.log(res.join(' '));
}

function sum(arr) {
    let sum = 0;
    for (let n of arr) {
        sum += Number(n);
    }
    return sum;
}

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) === JSON.stringify(reversed));
    return equal;
}

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

let pbj = createCalculator();
console.log(pbj.add('nasko'));
pbj.add(1);
console.log(pbj.get());

module.exports = createCalculator;
