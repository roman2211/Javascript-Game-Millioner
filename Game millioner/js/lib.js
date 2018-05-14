function getValueFromUser() {
    var answer = +prompt('Введите конечное число последовательности:');
    if (!isFinite(answer) || isNaN(answer)) {
        alert('Вы ввели неверный символ, попробуйте ещё раз!');
        return false;
    }
    return answer;
}


function numToObj() {
    var num = getValueFromUser();
    if (num > 999 || num < 0) {
        alert('Вы ввели неверное число, Ваш результат - {}');
        return {};
    }
    var numToArr = String(num).split('');
    var finalObj = {};
    for (var i = 0; i < Object.keys(numToArr).length; i++) {
        switch (i) {
            case 0:
                finalObj.units = +numToArr[i];
                break;
            case 1:
                finalObj.tens = +numToArr[i];
                break;
            case 2:
                finalObj.hundreds = +numToArr[i];
                break;
            default:
                alert('Ошибка логики программы.');
                break;
        }
    }
    alert(JSON.stringify(finalObj, '', 1));
    return finalObj;
}

var events = [{
        task: 'Вам захотелось съесть мороженое. Какое Вы выберете?\n\n1) Воздержусь, ещё холодно!\n2) Вон то, коричневое!',
        trueChoice: '2',
        goodEvent: 'Вам было очень вкусно, и Вы пошли дальше',
        badEvent: 'Вы остались без мороженого...'
    },
    {
        task: 'Вы пошли дальше, увидели бездомного большого попугая и решили и поймать. Что Вы предпримете?\n\n1) Куплю ему мороженое, может, захочет.\n2) Скажете ему, что были бы рады его сообществу.',
        trueChoice: '2',
        goodEvent: 'Попугай увидел в Вас здравомыслящее существо и пошёл с Вами.',
        badEvent: 'Попугай, увидев мороженое, сказал "ФИ!" и улетел.'
    },
    {
        task: 'Пошёл град. Рядом только нерабочий фонтан и автобусная остановка. Куда Вы пойдёте укрыться?\n\n1) Остановка, конечно!\n2) К фонтану!',
        trueChoice: '1',
        goodEvent: 'Остановка оказалась без крыши, но град тут же закончился',
        badEvent: 'Вы нырнули под большой навес фонтана, и о невезенье, он тут же включился!'
    },
];

function getChoice(task, range) {
    var choice = prompt(task);
    if (choice === 'q') {
        throw "stop";
    } else if (+choice > range || +choice < 1) {
        alert('Вы ввели ответ за границами заданного диапазона! Попробуйте ещё раз.\nЕсли хотите выйти - введите "q"');
        return getChoice(task, range);
    } else if (isNaN(+choice) || !isFinite(+choice)) {
        alert('Вы ввели неправильный символ! Попробуйте ещё раз.\nЕсли хотите выйти - введите "q"');
        return getChoice(task);
    } else {
        return choice;
    }
}


function seeMoves(moves) {
    var userChoice = getChoice('Введите номер Вашего хода, который Вы хотели бы увидеть (1, 2, 3).\nДля выхода введите "q"', 3);
    alert(moves[userChoice - 1]);
    return seeMoves(moves);
}



function questExtend() {
    alert('Добро пожаловать в игру "Самый простой квест"!\nУкажите номер правильного ответа.\nДля выхода из игры используйте "q".');
    var moves = [];
    events.forEach(function(event) {
        var userChoice = getChoice(event.task, 2);

        if (userChoice === event.trueChoice) {
            alert(event.goodEvent);
            moves.push(event.goodEvent);
        } else {
            alert(event.badEvent);
            moves.push(event.badEvent);
        }
    });
    alert('Вы дошли до конца, Ура!');
    seeMoves(moves);
}


var questions = {
    fisrt: {
        question: 'Кто из русских поэтов написал следующие строки: \nДо свиданья, друг мой, до свиданья.\nМилый мой, ты у меня в груди.\nПредназначенное расставанье\nОбещает встречу впереди.\n\n1) Александр Пушкин\n2) Сергей Есенин\n3) Александр Блок\n4) Анна Ахматова',
        trueAnswer: '2'
    },
    second: {
        question: 'Как зовут создателя языка JavaScript?\n\n1) Дуглас Крокфорд\n2) Алан Кэй\n3) Брендан Айк\n4) Пол Грэм',
        trueAnswer: '3'
    },
    third: {
        question: 'Где вы будете плыть быстрее — в воде или сиропе?\n\n1) Некорретный вопрос\n2) Одинаково\n3) В воде\n4) В сиропе',
        trueAnswer: '2'
    }
};

function getAnswer(question) {
    var answer = prompt(question);
    if (answer === 'q') {
        return false;
    } else if (+answer > 4 || +answer < 1) {
        alert('Вы ввели ответ за границами заданного диапазона! Попробуйте ещё раз.\nЕсли хотите выйти - введите "q"');
        return getAnswer(question);
    } else if (isNaN(+answer) || !isFinite(+answer)) {
        alert('Вы ввели неправильный символ! Попробуйте ещё раз.\nЕсли хотите выйти - введите "q"');
        return getAnswer(question);
    } else {
        return answer;
    }
}

function millionaireGame() {
    alert('Добро пожаловать в игру "Кто хочет стать миллионером?"\nУкажите номер правильного ответа.\nДля выхода из игры используйте "q".');
    for (var elem in questions) {
        var game = questions[elem];
        var userAnswer = getAnswer(game.question);
        if (!userAnswer) {
            return;
        }
        if (userAnswer !== game.trueAnswer) {
            alert('Очень жаль, но Вы проиграли, ответ неверный.\nВерный вариант ответа: ' + game.trueAnswer + '\nПопробуйте сыграть ещё раз!');
            return;
        }
        alert('Верно!');
    }
    alert('Вы ответили на все вопросы верно! Вот Ваш миллион!\n$1000.000.000');
}
