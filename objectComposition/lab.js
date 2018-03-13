function orderRectangles(input) {
    for(let i = 0; i < input.length; i++) {
        input[i] = {
            width: input[i][0],
            height: input[i][1],
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                let difference = other.area() - this.area();

                return difference || other.width - this.width;
            }
        };
    }

    input.sort((a, b) => a.compareTo(b));
    return input;
}

function fibonacci() {
    let f = 0;
    let s = 1;

    return function () {
        let sum = f + s;
        f = s;
        s = sum;
        return f;
    }
}

function listProcessor(arr) {
    let res = [];

    let obj = {
        add: (str) => res.push(str),
        remove: function (str) {
            res = res.filter(a => a !== str);
        },
        print: () => console.log(res.join(','))
    };

    for (let a of arr) {
        let [com, value] = a.split(' ').filter(a => a !== '');
        if (com !== 'print') {
            obj[com](value);
        }
        else
            obj[com]();
    }

    return obj;
}

function cars(arr) {
    let res = [];
    let exe = (function () {
        function create(name) {
            let obj = {name: name};
            res.push(obj);
        }
        function createInherits(name, parent) {
            let temp = res.find(a => a.name === parent);
            let inh = Object.create(temp);
            inh.name = name;
            res.push(inh);
        }
        function set(obj, key, value) {
            let temp = res.filter(a => a.name === obj)[0];
            temp[key] = value;
        }
        function print(name) {
            let obj = res.find(a => a.name === name);
            let props = [];
            for (let prop in obj) {
                if (prop === 'name') {
                    continue;
                }
                props.push(`${prop}:${obj[prop]}`)
            }
            console.log(props.join(', '))
        }
        return {create, createInherits, set, print};
    })();

    for (let a of arr) {
        let info = a.split(' ').filter(a => a !== '');
        if (info[0] === 'create' && info.length === 2) {
            exe['create'](info[1]);
        }
        else if (info[0] === 'create' && info.length !== 2) {
            exe['createInherits'](info[1], info[3]);
        }
        else if (info[0] === 'set') {
            exe['set'](info[1], info[2], info[3]);
        }
        else if (info[0] === 'print') {
            exe['print'](info[1]);
        }
    }

}

function sumSubtractNums() {
    let el1, el2, result;
    return {
        add: () => {
            result.val(Number(el1.val()) + Number(el2.val()));
        },
        subtract: () => result.val(Number(el1.val()) - Number(el2.val())),
        init: function (sel1, sel2, res) {
            el1 = $(sel1);
            el2 = $(sel2);
            result = $(res);
        }
    };
}

