function increment(selector) {
    let parentEl = $(selector);
    let textArea = $('<textarea class="counter" disabled="disabled">').val(0);
    let incrementBtn = $('<button class="btn" id="incrementBtn">').text('Increment');
    let addBtn = $('<button class="btn" id="addBtn">').text('Add');
    let ul = $('<ul class="results">');

    incrementBtn.click(function () {
        let value = Number(textArea.val()) + 1;
        $(textArea).val(value);
    });

    addBtn.click(function () {
        let value = Number(textArea.val());
        let item = $('<li>').text(value);
        ul.append(item);
    });

    parentEl.append(textArea).append(incrementBtn).append(addBtn).append(ul);
}

function timer() {
    let interval;
    let startBtn = $('#start-timer');
    let endBtn = $('#stop-timer');

    startBtn.click(startTimer);

    endBtn.click(function () {
        clearInterval(interval);
    });

    function startTimer() {
        let hours = Number($('#hours').text());
        let minutes = Number($('#minutes').text());
        let seconds = Number($('#seconds').text());

        interval = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }

            seconds < 10 ? $('#seconds').text('0' + seconds) : $('#seconds').text(seconds);
            minutes < 10 ? $('#minutes').text('0' + minutes) : $('#minutes').text(minutes);
            hours < 10 ? $('#hours').text('0' + hours) : $('#hours').text(hours);
        }, 1000);
    }
}

function createBook(selector, title, author, isbn) {
    let cnt;
    let books = $('div').toArray().filter(a => a.id.toString().startsWith('book'));

    if (books.length < 1)
        cnt = 1;
    else
        cnt++;

    let mainDiv = $('<div>').attr('id', 'book' + cnt);
    let pTitle = $('<p class="title">').text(title);
    let pAuthor = $('<p class="author">').text(author);
    let pISBN = $('<p class="isbn">').text(isbn);
    let selBtn = $('<button>').text('Select');
    let deselBtn = $('<button>').text('Deselect');

    selBtn.click(function () {
        mainDiv.css('border', '2px solid blue');
    });

    deselBtn.click(function () {
        mainDiv.css('border', 'none');
    });

    mainDiv.append(pTitle).append(pAuthor).append(pISBN).append(selBtn).append(deselBtn);

    $(selector).append(mainDiv);

}

function domSearch(selector, isCaseSensitive) {
    let add = $('<div class="add-controls">');
    let labelAdd = $('<label>').text('Enter text:');
    let inputAdd = $('<input>');
    let anchorAdd = $('<a href="#" class="button">').text('Add');
    add.append(labelAdd).append(inputAdd).append(anchorAdd);
    anchorAdd.click(addItem);

    let search = $('<div class="search-controls">');
    let searchLabel = $('<label>').text('Search:');
    let inputSearch = $('<input>');
    search.append(searchLabel).append(inputSearch);
    inputSearch.change(searchForItem);

    let results = $('<div class="result-controls">');
    let itemsList = $('<ul class="items-list">');
    results.append(itemsList);


    function addItem() {
        let input = $('.add-controls').find('input');
        let strong = $('<strong>').text(input.val());
        input.val('');
        let anchor = $('<a>').attr('href', '#').addClass('button').text('X');
        let listItem = $('<li>').append(anchor).append(strong);
        $('.items-list').append(listItem);
        anchor.click(function () {
            $(this).parent().remove();
        });



    }

    function searchForItem() {
        let target = $(this).val();
        let pattern;
        if (isCaseSensitive) {
            pattern = new RegExp(target, 'gi');
        }
        else
            pattern = new RegExp(target, 'g');
        let listItems = $('.items-list').find('li').toArray();
        for (let li of listItems) {
            $(li).css('display', 'block');
        }
        for (let li of listItems) {
            let text = $(li).text().slice(1);
            if (text.match(pattern) === null) {
                $(li).css('display', 'none');
            }
        }
    }





    $(selector).append(add).append(search).append(results);
}

function calendar(arr) {
    let table = $('<table>');
    let day = arr[0];
    let year = arr[2];
    let month = (function (input) {
        switch (input) {
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
            default:
                return 'Error';
        }
    })(arr[1]);

    //add caption
    let caption = $('<caption>').text(`${month} ${year}`);
    table.append(caption);
    $('#content').append(table);

    //add first row
    let firstRow = $('<tr>')
        .append($('<th>').text('Mon').css('font-weight', 'bold'))
        .append($('<th>').text('Tue').css('font-weight', 'bold'))
        .append($('<th>').text('Wed').css('font-weight', 'bold'))
        .append($('<th>').text('Thu').css('font-weight', 'bold'))
        .append($('<th>').text('Fri').css('font-weight', 'bold'))
        .append($('<th>').text('Sat').css('font-weight', 'bold'))
        .append($('<th>').text('Sun').css('font-weight', 'bold'));
    table.append(firstRow);

    let date = new Date();
    date.setFullYear(year, arr[1] - 1, 1);
    let dayOfWeek = date.toString().slice(0, 3);

    let emptyCellsInFront = (function (d) {
        switch (d) {
            case 'Mon':
                return 0;
            case 'Tue':
                return 1;
            case 'Wed':
                return 2;
            case 'Thu':
                return 3;
            case 'Fri':
                return 4;
            case 'Sat':
                return 5;
            case 'Sun':
                return 6;
        }
    })(dayOfWeek);

    let lastDay = new Date(year, arr[1], 0);
    lastDay = Number(lastDay.toString().slice(8, 11));
    let endReached = false;

    for(let i = 0, d = 1; i < 6 && !endReached; i++) {
        let row = $('<tr>');

        for(let j = 0; j < 7; j++, d++) {

            if (i === 0 && j < emptyCellsInFront) {
                row.append($('<td>').text(''));
                d--;
                continue;
            }

            if (d <= lastDay) {
                let td = $('<td>').text(d);

                if (d === day) {
                    td.addClass('today');

                }

                if (d === lastDay) {
                    endReached = true;
                }
                row.append(td);
            }
            else {
                if (j < 7) {
                    row.append($('<td>').text(''));
                }
            }//fill last row with empty cells
        }
        table.append(row);
    }

}