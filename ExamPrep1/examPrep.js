function sort(colIndex, descending) {

    let table = $('#products');

    let rows = $('tr').filter((i, e) => i > 0);

    if (colIndex === 0) {

        if (descending === true) {
            rows.sort((a, b) => $(b.children[0]).text().localeCompare($(a.children[0]).text()));
        }
        else
            rows.sort((a, b) => $(a.children[0]).text().localeCompare($(b.children[0]).text()));
    }
    else if (colIndex === 1) {
        if (descending === true) {
            rows.sort((a, b) => Number($(b.children[1]).text()) - Number($(a.children[1]).text()));
        }
        else
            rows.sort((a, b) => Number($(a.children[1]).text()) - Number($(b.children[1]).text()));

    }

    for (let r of rows) {
        table.append(r);
    }
}

class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for(let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

class Repository {
    constructor(props) {
        this.props = props;
        this.data = new Map();
    }

    add(entity) {
        Repository.validateEntity(entity, this.props);

        let id = -1;
        if (this.data.size === 0) {
            id = 0;
        }
        else {
            for (let k of this.data.keys()) {
                if (k > id) {
                    id = k;
                }
            }
            id += 1;
        }
        this.data.set(id, entity);
        return id;
    }

    get(id) {
        return this.data.get(id);
    }

    update(id, newEntity) {
        if (Array.from(this.data.keys()) === false) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        Repository.validateEntity(newEntity, this.props);
        this.data.set(id, newEntity);

    }

    del(id) {
        if (Array.from(this.data.keys()).includes(id) === false) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        this.data.delete(id);
    }

    get count() {
        return this.data.size;
    }

    static validateEntity(entity, props) {
        for (let k of Object.keys(props)) {
            if (!entity.hasOwnProperty(k)) {
                throw new Error(`Property ${k} is missing from the entity!`);
            }
            else {
                if (typeof entity[k] !== props[k]) {
                    throw new TypeError(`Property ${k} is of incorrect type!`);
                }
            }
        }
    }
}







