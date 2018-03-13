function aggregates(input) {
    let arr = input.map(Number);
    console.log('Sum = ' + arr.reduce((a, b) => a + b));
    console.log('Min = ' + Math.min(...arr));
    console.log('Max = ' + Math.max(...arr));
    console.log('Product = ' + arr.reduce((a, b) => a * b));
    console.log('Join = ' + arr.reduce((a, b) => '' + a + b));
}

function formatCurrency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substring(-2, 2);
    if (symbolFirst) {
        return symbol + ' ' + result;
    }
    else
        return result + ' ' + symbol;
}

function getDollarFormatter(func) {
    return function (value) {
        return func(',', '$', true, value);
    }
}

function commandProcessor(arr) {
    let result = (function () {
        let text = '';

        return {
            append: (input) => text += input,
            removeStart: (input) => text = text.slice(Number(input)),
            removeEnd: (input) => text = text.substring(0, text.length - Number(input)),
            print: () => console.log(text)
        }
    })();

    for (let el of arr) {
        let [com, value] = el.split(' ');
        result[com](value);
    }
}

function maxNumber(arr) {
    return Math.max(...arr);
}

function getArticleGenerator(articles) {
    let content = $('#content');

    return function () {
        if (articles.length > 0) {
            let article = $('<article>');
            article.append($(`<p>${articles.shift()}</p>`));
            content.append(article);
        }
    }
}