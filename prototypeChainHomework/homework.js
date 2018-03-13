function balloons() {

    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }

        set color(c) {
            this._color = c;
        }
        get color() {
            return this._color;
        }

        set gasWeight(gw) {
            this._gasWeight = gw;
        }
        get gasWeight() {
            return this._gasWeight;
        }
    }

    class PartyBalloon extends Balloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {color: ribbonColor, length: ribbonLength};
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }

        set text(t) {
            this._text = t;
        }
        get text() {
            return this._text;
        }
    }


    return {Balloon, PartyBalloon, BirthdayBalloon};


}

function people() {

    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Cannot instantiate directly.');
            }

            this.age = age;
            this.name = name;
            this.salary = 0;
            this.tasks = [];
        }

        getSalary() {
            return this.salary;
        }


        work() {
            let current = this.tasks.shift();
            console.log(`${this.name}${current}`);
            this.tasks.push(current);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.');
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }


        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return {Employee, Junior, Senior, Manager};


}

function posts() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        set title(t) {
            this._title = t;
        }
        get title() {
            return this._title;
        }

        set content(c) {
            this._content = c;
        }
        get content() {
            return this._content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\n`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let baseString = super.toString();
            baseString += `Rating: ${this.likes - this.dislikes}`;
            if (this.comments.length === 0) {
                return baseString;
            }
            baseString += '\nComments:';
            for (let c of this.comments) {
                baseString += `\n * ${c}`;
            }
            return baseString;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let baseString = super.toString();
            return baseString + `Views: ${this.views}`;
        }
    }


    return {Post, BlogPost, SocialMediaPost}
}

function elemelons() {

    class Melon {
        constructor(weight, sort) {
            if (new.target === Melon) {
                throw new Error('Abstract class cannot be instatiated directly');
            }
            this.weight = weight;
            this.sort = sort;
            this.type = this.constructor.name.slice(0, -5);
        }

        set weight(w) {
            this._weight = w;
        }
        get weight() {
            return this._weight;
        }

        set sort(s) {
            this._sort = s;
        }
        get sort() {
            return this._sort;
        }

        toString() {
            return `Element: ${this.type}\nSort: ${this.sort}\nElement Index: `;
        }


    }

    class Watermelon extends Melon {
        constructor(weight, sort) {
            super(weight, sort);
            this._index = weight * sort.length
        }

        get index() {
            return this._index;
        }

        toString() {
            let base = super.toString();
            return base + this._index;
        }

    }

    class Firemelon extends Melon {
        constructor(weight, sort) {
            super(weight, sort);
            this._index = weight * sort.length
        }

        get index() {
            return this._index;
        }

        toString() {
            let base = super.toString();
            return base + this._index;
        }

    }

    class Airmelon extends Melon {
        constructor(weight, sort) {
            super(weight, sort);
            this._index = weight * sort.length
        }

        get index() {
            return this._index;
        }

        toString() {
            let base = super.toString();
            return base + this._index;
        }

    }

    class Earthmelon extends Melon {
        constructor(weight, sort) {
            super(weight, sort);
            this._index = weight * sort.length
        }

        get index() {
            return this._index;
        }

        toString() {
            let base = super.toString();
            return base + this._index;
        }

    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, sort) {
            super(weight, sort);
            this.types = ['Fire', 'Earth', 'Air', 'Water'];
            this.type = Object.getPrototypeOf(Melolemonmelon).name.slice(0, -5);
        }

        morph() {
            let index = this.types.indexOf(this.type);
            if (index === this.types.length - 1) {
                index = 0;
            }
            else
                index++;
            this.type = this.types[index];
        }
    }

    return {Melolemonmelon, Melon, Watermelon, Firemelon, Airmelon, Earthmelon};


}

class Console {

    static get placeholder() {
        return /{\d+}/g;
    }

    static writeLine() {
        let message = arguments[0];
        if (arguments.length === 1) {
            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            }
            else if (typeof(message) === 'string') {
                return message;
            }
        }
        else {
            if (typeof (message) !== 'string') {
                throw new TypeError("No string format given!");
            }
            else {
                let tokens = message.match(this.placeholder).sort(function (a, b) {
                    a = Number(a.substring(1, a.length - 1));
                    b = Number(b.substring(1, b.length - 1));
                    return a - b;
                });
                if (tokens.length !== (arguments.length - 1)) {
                    throw new RangeError("Incorrect amount of parameters given!");
                }
                else {
                    for (let i = 0; i < tokens.length; i++) {
                        let number = Number(tokens[i].substring(1, tokens[i].length - 1));
                        if (number !== i) {
                            throw new RangeError("Incorrect placeholders given!");
                        }
                        else {
                            message = message.replace(tokens[i], arguments[i + 1])
                        }
                    }
                    return message;
                }
            }
        }
    }
};

function computer() {

    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }

        set manufacturer(m) {
            this._manufacturer = m;
        }
        get manufacturer() {
            return this._manufacturer;
        }

        set responseTime(rt) {
            this._responseTime = rt;
        }
        get responseTime() {
            return this._responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }

        set manufacturer(m) {
            this._manufacturer = m;
        }
        get manufacturer() {
            return this._manufacturer;
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
            return this._width
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }

        set manufacturer(m) {
            this._manufacturer = m;
        }
        get manufacturer() {
            return this._manufacturer;
        }

        set expectedLife(el) {
            this._expectedLife = el;
        }
        get expectedLife() {
            return this._expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error('Cannot instantiate directly.');
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }

        set manufacturer(m) {
            this._manufacturer = m;
        }
        get manufacturer() {
            return this._manufacturer;
        }

        set processorSpeed(ps) {
            this._processorSpeed = ps;
        }
        get processorSpeed() {
            return this._processorSpeed;
        }

        set ram(r) {
            this._ram = r;
        }
        get ram() {
            return this._ram;
        }

        set hardDiskSpace(hds) {
            this._hardDiskSpace = hds;
        }
        get hardDiskSpace() {
            return this._hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        set weight(w) {
            this._weight = w;
        }
        get weight() {
            return this._weight;
        }

        set color(c) {
            this._color = c;
        }
        get color() {
            return this._color;
        }

        set battery(b) {
            if (b.constructor.name !== 'Battery') {
                throw new TypeError('Battery must be of type battery!');
            }
            this._battery = b;
        }
        get battery() {
            return this._battery;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        set keyboard(k) {
            if (k.constructor.name !== 'Keyboard') {
                throw new TypeError('Keyboard must be of type keyboard!');
            }
            this._keyboard = k;
        }
        get keyboard() {
            return this._keyboard;
        }

        set monitor(m) {
            if (m.constructor.name !== 'Monitor') {
                throw new TypeError('Monitor must be of type monitor!');
            }
            this._monitor = m;
        }
        get monitor() {
            return this._monitor;
        }
    }


    return {Monitor, Computer, Desktop, Laptop, Keyboard, Battery};


}

function mixins() {
    function computerQualityMixin(Class) {
        Class.prototype.getQuality = function () {
            return ((this.processorSpeed + this.ram + this.hardDiskSpace) / 3);
        }

        Class.prototype.isFast = function () {
            if (this.processorSpeed > (this.ram / 4)) {
                return true;
            }
            return false;
        }

        Class.prototype.isRoomy = function () {
            if (this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)) {
                return true;
            }
            return false;
        }
    }

    function styleMixin(Class) {
        Class.prototype.isFullSet = function () {
            if ((this.manufacturer === this.keyboard.manufacturer) &&
                (this.manufacturer === this.monitor.manufacturer)) {
                return true;
            }
            return false;
        }

        Class.prototype.isClassy = function () {
            if ((this.battery.expectedLife >= 3) &&
                (this.color === 'Silver' || this.color === 'Black') &&
                (this.weight < 3)) {
                return true;
            }
            return false;
        }


    }

    return {computerQualityMixin, styleMixin};
}


module.exports = Console;