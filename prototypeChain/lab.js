function personTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }
    
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let initialString = super.toString().slice(0, -1);
            return initialString + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let initialString = super.toString().slice(0, -1);
            return initialString + `, course: ${this.course})`;
        }
    }

    return {Person, Teacher, Student};
}

function extendPrototype(inputClass) {
    inputClass.prototype.species = 'Human';
    inputClass.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

function classHierarchy() {

    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new Error('Cannot instantiate abstract classed directly!');
            }
        }

        toString() {
            return `${this.constructor.name} - `;
        }


    }


    class Circle extends Figure{
        constructor(radius) {
            super();
            this.radius = radius;
        }

        set radius(r) {
            this._radius = r;
        }

        get radius() {
            return this._radius;
        }

        get area() {
            return Math.PI * this._radius * this._radius;
        }

        toString() {
            let base = super.toString();
            return base + `radius: ${this._radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        set height(h) {
            this._height = h;
        }

        get height() {
            return this._height;
        }

        set width(w) {
            this._width = w;
        }

        get width() {
            return this._width;
        }

        get area() {
            return this._width * this._height;
        }

        toString() {
            let base = super.toString();
            return base + `width: ${this._width}, height: ${this.height}`
        }

    }

    return {Figure, Circle, Rectangle};

}