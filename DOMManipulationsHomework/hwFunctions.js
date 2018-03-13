function subtract() {
    let num1 = Number(document.getElementById('firstNumber').value);
    let num2 = Number(document.getElementById('secondNumber').value);
    document.getElementById('result').textContent = (num1 - num2).toString();
}

function addItem() {
    let option = document.createElement('option');
    option.value = document.getElementById('newItemValue').value;
    option.textContent = document.getElementById('newItemText').value;
    document.getElementById('menu').appendChild(option);
    document.getElementById('newItemValue').value = '';
    document.getElementById('newItemText').value = '';
}

function toggle() {
    let button = document.getElementsByClassName('button')[0];
    if (button.textContent === 'More') {
        button.textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
        return;
    }
    if (button.textContent === 'Less') {
        button.textContent = 'More';
        document.getElementById('extra').style.display = 'none';
        return;
    }
}

function create(arr) {
    for (let sentence of arr) {
        let div = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.textContent = sentence;
        paragraph.style.display = 'none';
        div.appendChild(paragraph);
        document.getElementById('content').appendChild(div);
        div.addEventListener('click', function () {
            div.firstElementChild.style.display = 'block';
        });
    }
}

function notify(msg) {
    let notification = document.getElementById('notification');
    notification.textContent = msg;
    notification.style.display = 'block';
    setTimeout(function () {
        notification.style.display = 'none';
    }, 2000);
}

function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll('input')).filter(a => a.type === 'button');
    for (let b of buttons) {
        b.addEventListener('click', function (event) {
        let days, hours, minutes, seconds;
        let fieldId = event.target.id;
            switch (fieldId) {
                case 'daysBtn':
                    days = Number(document.getElementById('days').value);
                    hours = days * 24;
                    minutes = hours * 60;
                    seconds = minutes * 60;
                    document.getElementById('days').value = days;
                    document.getElementById('hours').value = hours;
                    document.getElementById('minutes').value = minutes;
                    document.getElementById('seconds').value = seconds;
                    return;
                case 'hoursBtn':
                    hours = Number(document.getElementById('hours').value);
                    days = hours / 24;
                    minutes = hours * 60;
                    seconds = minutes * 60;
                    document.getElementById('days').value = days;
                    document.getElementById('hours').value = hours;
                    document.getElementById('minutes').value = minutes;
                    document.getElementById('seconds').value = seconds;
                    return;
                case 'secondsBtn':
                    seconds = Number(document.getElementById('seconds').value);
                    minutes = seconds / 60;
                    hours = minutes / 60;
                    days = hours / 24;
                    document.getElementById('days').value = days;
                    document.getElementById('hours').value = hours;
                    document.getElementById('minutes').value = minutes;
                    document.getElementById('seconds').value = seconds;
                    return;
                case 'minutesBtn':
                    minutes = Number(document.getElementById('minutes').value);
                    hours = minutes / 60;
                    seconds = minutes * 60;
                    days = hours / 24;
                    document.getElementById('days').value = days;
                    document.getElementById('hours').value = hours;
                    document.getElementById('minutes').value = minutes;
                    document.getElementById('seconds').value = seconds;
                    return;
            }

        });

    }
}