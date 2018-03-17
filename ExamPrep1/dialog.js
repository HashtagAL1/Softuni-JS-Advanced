class Dialog {
    constructor(msg, callback) {
        this.msg = msg;
        this.callback = callback;
        this.inputs = [];
        this.element = null;
    }

    addInput(label, name, type) {
        this.inputs.push({label, name, type});
    }

    render() {
        this.element = $(`<div class="overlay">`);
        let innerDiv = $(`<div class="dialog">`);
        innerDiv.append(`<p>${this.msg}</p>`);
        for (let i of this.inputs) {
            innerDiv.append(`<label>${i.label}</label>`);
            innerDiv.append(`<input name="${i.name}" type="${i.type}">`);
        }
        let cncBtn = $('<button>Cancel</button>').click(this._cancel.bind(this));
        let okBtn = $('<button>OK</button>').click(this._ok.bind(this));
        innerDiv.append(okBtn);
        innerDiv.append(cncBtn);
        this.element.append(innerDiv);
        $('body').append(this.element);
    }

    _cancel() {
        $(this.element).remove();
    }

    _ok() {
        let res = {};
        let allInputFields = $(this.element).find('input').toArray();
        for (let input of allInputFields) {
            res[$(input).attr('name')] = $(input).val();
        }
        this.callback(res);
        this._cancel();
    }

}