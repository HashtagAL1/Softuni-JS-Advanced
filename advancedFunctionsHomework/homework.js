function sortArray(arr, type) {
    if (type === 'asc') {
        return arr.sort((a, b) => a - b);
    }
    if (type === 'desc') {
        return arr.sort((a, b) => b - a);
    }
}

function argumentInfo() {
    let result = {};

    for (let arg of arguments) {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (result.hasOwnProperty(type)) {
            result[type]++;
        }
        else
            result[type] = 1;
    }

    let props = Object.keys(result);
    props.sort((a, b) => result[b] - result[a]);

    for (let prop of props) {
        console.log(`${prop} = ${result[prop]}`);
    }
}

function personalBMI(name, age, weight, height) {

    let obj = {};
    obj.name = name;
    obj.personalInfo = {age: age, weight: weight, height: height};
    obj.BMI = Math.round(weight / Math.pow((height / 100), 2));
    obj.status = (function (bmi) {
        if (bmi < 18.5) {
            return 'underweight';
        }
        else if (bmi >= 18.5 && bmi < 25) {
            return 'normal';
        }
        else if (bmi >= 25 && bmi < 30) {
            return 'overweight';
        }
        else {
            obj.recommendation = 'admission required';
            return 'obese';
        }
    })(obj.BMI);
    return obj;






}

let breakfastRobot = (() => {

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };


    return function (input) {
        let [command, element, quantity] = input.split(' ');

        function report() {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }

        function restock(e, q) {
            ingredients[e] += Number(q);
            return 'Success';
        }

        function validateIngs(e, q) {
            if (e === 'apple') {
                if (ingredients.carbohydrate < Number(q)) {
                    return 'Error: not enough carbohydrate in stock';
                }
                if (ingredients.flavour < 2 * Number(q)) {
                    return 'Error: not enough flavour in stock';
                }

                ingredients.carbohydrate -= Number(q);
                ingredients.flavour -= Number(q) * 2;
            }
            if (e === 'coke') {

                if (ingredients.carbohydrate < 10 * Number(q)) {
                    return 'Error: not enough carbohydrate in stock';
                }
                if (ingredients.flavour < 20 * Number(q)) {
                    return 'Error: not enough flavour in stock';
                }

                ingredients.carbohydrate -= 10 * Number(q);
                ingredients.flavour -= 20 * Number(q);

            }
            if (e === 'burger') {

                if (ingredients.carbohydrate < 5 * Number(q)) {
                    return 'Error: not enough carbohydrate in stock';
                }
                if (ingredients.fat < 7 * Number(q)) {
                    return 'Error: not enough fat in stock';
                }
                if (ingredients.flavour < 3 * Number(q)) {
                    return 'Error: not enough flavour in stock';
                }
                ingredients.carbohydrate -= 5 * Number(q);
                ingredients.fat -= 7 * Number(q);
                ingredients.flavour -= 3 * Number(q);
            }
            if (e === 'omelet') {

                if (ingredients.protein < (5 * Number(q))) {
                    return 'Error: not enough protein in stock';
                }
                if (ingredients.fat < Number(q)) {
                    return 'Error: not enough fat in stock';
                }
                if (ingredients.flavour < Number(q)) {
                    return 'Error: not enough flavour in stock';
                }

                ingredients.protein -= 5 * Number(q);
                ingredients.fat -= Number(q);
                ingredients.flavour -= Number(q);
            }
            if (e === 'cheverme') {

                if (ingredients.protein < 10 * Number(q)) {
                    return 'Error: not enough protein in stock';
                }
                if (ingredients.carbohydrate < 10 * Number(q)) {
                    return 'Error: not enough carbohydrate in stock';
                }
                if (ingredients.fat < 10 * Number(q)) {
                    return 'Error: not enough fat in stock';
                }
                if (ingredients.flavour < 10 * Number(q)) {
                    return 'Error: not enough flavour in stock';
                }
                ingredients.protein -= 10 * Number(q);
                ingredients.carbohydrate -= 10 * Number(q);
                ingredients.fat -= 10 * Number(q);
                ingredients.flavour -= 10 * Number(q);

            }
            return true;
        }

        function prepare(e, q) {
            if (validateIngs(e, q) === true) {
                return 'Success';
            }
            else
                return validateIngs(e, q);

        }



        if (command === 'report') {
            return report();
        }
        else if (command === 'restock') {
            return restock(element, quantity);
        }
        else if (command === 'prepare') {
            return prepare(element, quantity);
        }
    }
})();

let vectorMath = (() => {
    let add = (a, b) => [a[0] + b[0], a[1] + b[1]];
    let multiply = (a, b) => [a[0] * b, a[1] * b];
    let length = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]);
    let dot = (a, b) => a[0] * b[0] + b[1] * a[1];
    let cross = (a, b) => a[0] * b[1] - a[1] * b[0];

    return {add, multiply, length, dot, cross};
})();

(() => {
    let sum = 0;

    function add(num) {
        sum += num;
        return add;
    }
    add.toString = () => sum;
    return add;
})();

function monkeyPatcher(input) {
    let t = this;
    let obj = (function () {
        function upvote() {
            t.upvotes++;
        }
        function downvote() {
            t.downvotes++;
        }
        function score() {
            let toBeOfuscated = t.upvotes + t.downvotes > 50;
            let toAdd = Math.ceil(0.25 * Math.max(t.upvotes, t.downvotes));

            let rating;

            let border = 0.66 * (t.upvotes + t.downvotes);
            if (t.upvotes > border) {
                rating = 'hot';
            }
            else {
                if (t.upvotes - t.downvotes >= 0  && (t.upvotes > 100 || t.downvotes > 100)) {
                    rating = 'controversial';
                }
                else if (t.upvotes - t.downvotes < 0) {
                    rating = 'unpopular';
                }
                else
                    rating = 'new';


            }
            if (t.upvotes + t.downvotes < 10) {
                rating = 'new';
            }

            if (toBeOfuscated) {
                return [t.upvotes + toAdd, t.downvotes + toAdd, t.upvotes - t.downvotes, rating];
            }
            else
                return [t.upvotes, t.downvotes, t.upvotes - t.downvotes, rating];

        }
        return {upvote, downvote, score};
    })();
    return obj[input]();
}

function euclidsAlgorithm(a, b) {
    return (function () {
        let max = 1;
        for(let i = 1; i <= Math.min(a, b); i++) {
            if (a % i === 0 && b % i === 0) {
                max = i;
            }
        }
        return max;
    }());
}


