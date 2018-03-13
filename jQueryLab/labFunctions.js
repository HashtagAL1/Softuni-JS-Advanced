function extractText() {
    let result = $('#items li').toArray().map(li => li.textContent).join(', ');
    $('#result').text(result);
    
}

function search() {
    let matches = 0;
    let target = $('#searchText').val();
    let towns = $('#towns li');
    for (let t of towns) {
        if ($(t).text().includes(target)) {
            $(t).css('font-weight', 'bold');
            matches++;
        }
    }
    $('#result').text(`${matches} matches found.`);
}

function initializeTable() {
    $('#createLink').click(createCountry);
    addCountryToTable('Bulgaria', 'Sofia');
    addCountryToTable('Germany', 'Berlin');
    addCountryToTable('Russia', 'Moscow');

    function createCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        addCountryToTable(country, capital);
    }

    function addCountryToTable(country, capital) {
        let newRow = $('<tr>');
        newRow.append($('<td>').text(country));
        newRow.append($('<td>').text(capital));
        newRow.append($('<td>')
            .append($('<a href="#">[Up] </a>')
                .click(moveUp))
            .append($('<a href="#">[Down] </a>')
                .click(moveDown))
            .append($('<a href="#">[Delete]</a>')
                .click(remove)));
        $('#countriesTable').append(newRow);
        fixRows();
    }

    function moveUp() {
        let currentRow = $(this).parent().parent();
        if (currentRow.index() > 2) {
            currentRow.fadeOut(1000, function () {
                currentRow.insertBefore(currentRow.prev());
                currentRow.fadeIn(1000);

                fixRows();
            });
        }
    }

    function moveDown() {
        let currentRow = $(this).parent().parent();
        if (!currentRow.is(':last-child')) {
            currentRow.fadeOut(1000, function () {
                currentRow.insertAfter(currentRow.next());
                currentRow.fadeIn(1000);

                fixRows();
            });
        }

    }

    function remove() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(1000, function () {
            currentRow.remove();
        });
        fixRows();

    }

    function fixRows() {
        $('#countriesTable a').css('display', 'inline');
        let rows = $('#countriesTable tr');
        let last = rows[rows.length - 1];
        $(last).find("a:contains('Down')").css('display', 'none');
        let first = rows[2];
        $(first).find("a:contains('Up')").css('display', 'none');

    }

}

function attachEvents() {
    $('a.button').click(function () {
        $('.button').removeClass('selected');
        $(this).addClass('selected');
    });
}

function selectableTowns() {
    $('#items li').click(function () {
        let el = $(this);

        if (el.attr('data-selected') === undefined) {
            el.attr('data-selected', true);
            el.css('background-color', '#DDD');
        }
        else {
            el.removeAttr('data-selected');
            el.css('background-color', '');
        }

    });

    $('#showTownsButton').click(function () {
        let selectedTowns = $('#items li').toArray()
            .filter(a => $(a).attr('data-selected') !== undefined)
            .map(a => a.textContent)
            .join(', ');
        $('#selectedTowns').text(selectedTowns);
    });
}