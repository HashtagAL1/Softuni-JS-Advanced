function move(command) {
    if (command === 'right') {
        let selected = $('#available-towns').find(':selected');
        $('#selected-towns').append(selected);
    }
    else if (command === 'left') {
        let selected = $('#selected-towns').find(':selected');
        $('#available-towns').append(selected);
    }
    else if (command === 'print') {
        let selectedTowns = $('#selected-towns option');
        let output = [];
        for (let st of selectedTowns) {
            output.push($(st).text());
        }
        $('#output').text(output.join('; '));

    }
}

class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = 'Open';
        this.isOverdue = this.isOvd();


    }

    set status(s) {
        this._status = s;
        this.isOverdue = this.isOvd();
    }
    get status() {
        return this._status;
    }

    set deadline(d) {
        if (Date.now() > d) {
            throw new Error();
        }
        this._deadline = d;
    }
    get deadline() {
        return this._deadline;
    }


    isOvd() {
        if (this.status !== 'Complete' && Date.now() > this.deadline) {
            return true;
        }
        return false;
    }

    static comparator(a, b) {
        let x , y;
        switch (a.status) {
            case 'Overdue':
                x = 0;
                break;
            case 'In Progress':
                x = 1;
                break;
            case 'Open':
                x = 2;
                break;
            case 'Complete':
                x = 3;
                break;
        }
        switch (b.status) {
            case 'Overdue':
                y = 0;
                break;
            case 'In Progress':
                y = 1;
                break;
            case 'Open':
                y = 2;
                break;
            case 'Complete':
                y = 3;
        }
        let res = a - b;
        if (res === 0) {
            return a.deadline - b.deadline;
        }
    }

    toString() {
        let icon;

        switch (this.status) {
            case 'Open':
                icon = "\u2731";
                break;
            case 'In Progress':
                icon = "\u219D";
                break;
            case 'Complete':
                icon = "\u2714";
                break;
            default:
                icon = "\u26A0";
        }

        if (this.isOvd() === true) {
            return `[${icon}] ${this.title} (overdue)`;
        }
        else if (this.status === 'Complete') {
            return `[${icon}] ${this.title}`;
        }
        else
            return `[${icon}] ${this.title} (deadline: ${this.deadline})`
    }


}

class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
        this.element = null;
    }

    render(id) {
        this.element = $('<article>');
        let title = $(`<div class="title">${this.firstName} ${this.lastName}</div>`);
        let infoBtn = $(`<button>&#8505;</button>`).click(this._online.bind(this));
        title.append(infoBtn);
        let info = $(`<div class="info"></div>`);
        info.append($(`<span>&phone; ${this.phone}</span>`));
        info.append($(`<span>&#9993; ${this.email}</span>`));
        info.css('display', 'none');
        this.element.append(title);
        this.element.append(info);
        let elId = '#' + id;
        $(elId).append(this.element);
    }

    _online() {
        if (this.online === false) {
            this.online = true;
        }
        else {
            this.online = false;
        }

        this._showInfo(this.online);
    }

    _showInfo(isOnline) {
        let el = $(this.element).find('.info');
        let titleEl = $(this.element).find('.title');
        if (isOnline === true) {
            el.css('display', 'block');
            titleEl.addClass('title online');
        }
        else {
            el.css('display', 'none');
            titleEl.removeClass('online');
        }

    }
}