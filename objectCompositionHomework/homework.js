(function arrayExtension() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        let res = [];
        for(let i = n; i < this.length; i++) {
            res.push(this[i]);
        }
        return res;
    };

    Array.prototype.take = function (n) {
        let res = [];
        for(let i = 0; i < n; i++) {
            res.push(this[i]);
        }
        return res;
    };

    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);
    };

    Array.prototype.average = function () {
        return (this.sum() / this.length);
    };

})();

function constructionCrew(obj) {
    if (obj.handsShaking === true) {
        obj.bloodAlcoholLevel += Math.trunc(obj.experience * (0.1 * obj.weight));
        obj.handsShaking = false;
    }
    return obj;
}

function carFactory(obj) {
    return {
        model: obj.model,
        engine: (function () {
            let res = {power: 0, volume: 0};
            let engines = [90, 120, 200];
            let diff;
            let p = Number.POSITIVE_INFINITY;
            for(let i = 0; i < engines.length; i++) {
                diff = Math.abs(engines[i] - obj.power);
                if (diff < p) {
                    p = diff;
                    res.power = engines[i];
                }
            }
            switch (res.power) {
                case 90:
                    res.volume = 1800;
                    break;
                case 120:
                    res.volume = 2400;
                    break;
                case 200:
                    res.volume = 3500;
                    break;
            }
            return res;
        })(),
        carriage: (function () {
            return {type: obj.carriage, color: obj.color};
        })(),
        wheels: (function () {
            let res = [];
            if (obj.wheelsize % 2 === 0) {
                obj.wheelsize -= 1;
            }
            for(let i = 0; i < 4; i++) {
                res.push(obj.wheelsize);
            }
            return res;
        })()
    }
}

function extensibleObject() {
    let obj = {
        extend: function (template) {
            for (let p of Object.keys(template)) {
                if (typeof template[p] === 'function') {
                    Object.getPrototypeOf(obj)[p] = template[p];
                }
                else
                    obj[p] = template[p];
            }
        }
    };
    return obj;
}

(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (this.toString().indexOf(str) !== 0) {
            return str + this.toString();
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (this.toString().indexOf(str) < 0) {
            return this.toString() + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.toString() === '';
    };

    String.format = function (string, ...params) {
        for(let i = 0; i < params.length; i++) {
            let index = string.indexOf('{' + i + '}');
            while (index !== -1) {
                string = string.replace('{' + i + '}', params[i]);
                index = string.indexOf('{' + i + '}');
            }
        }
        return string;
    };

    String.prototype.truncate = function (n) {
        if (this.toString().length <= n) {
            return this.toString();
        }
        if(n <= 3){
            return ".".repeat(n);
        }

        if(this.toString().length <= n){
            return this.toString();
        } else {
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if(lastIndex != -1){
                return this.toString().substr(0, lastIndex) + "...";
            } else {
                return this.toString().substr(0, n-3) + "...";
            }
        }
    }

})();

function sortedList() {

    let obj = (() => {
        let arr = [];
        function add(element) {
            arr.push(element);
            arr.sort((a, b) => a - b);
            this.size++;
            return arr;
        }
        function remove(index) {
            if (index >= 0 && index < this.size) {
                arr.splice(index, 1);
                arr.sort((a, b) => a - b);
                this.size--;
                return arr;
            }
        }
        function get(index) {
            if (index >= 0 && index < this.size) {
                return arr[index];
            }
        }
        let size = 0;

        return {add, remove, get, size};
    })();

    return obj;
}

