function attachEvents() {
    let addBtn = $('#btnAdd');
    let deleteBtn = $('#btnDelete');

    addBtn.click(add);
    deleteBtn.click(del);


    function add() {
        let newTown = $('#newItem').val();
        if (newTown === '') {
            return;
        }
        let towns = $('#towns');
        towns.append($(`<option>${newTown}</option>`));
        $('#newItem').val('');
    }

    function del() {
        let selected = $('#towns').find(':selected');
        selected.remove();
    }
}

function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

class MailBox {
    constructor() {
        this.box = {};
        this.size = 0;
    }

    get messageCount() {
        return this.size;
    }

    addMessage(subject, text) {
        this.box[subject] = text;
        this.size++;
        return this.box;
    }

    deleteAllMessages() {
        this.size = 0;
        this.box = {};
    }

    findBySubject(substr) {
        let res = [];

        for (let k of Object.keys(this.box)) {
            if (k.indexOf(substr) >= 0) {
                let obj = {};
                obj['subject'] = k;
                obj['text'] = this.box[k];
                res.push(obj);
            }
        }

        return res;
    }

    toString() {
        if (this.messageCount === 0) {
            return ' * (empty mailbox)';
        }
        else {
            let pairs = [];
            for (let k of Object.keys(this.box)) {
                pairs.push(` * [${k}] ${this.box[k]}`);
            }
            return pairs.join('\n');
        }
    }


}



