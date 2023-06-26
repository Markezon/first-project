/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
	- count - сюда передается ответ на первый вопрос
	- movies - в это свойство поместить пустой объект
	- actors - тоже поместить пустой объект
	- genres - сюда поместить пустой массив
	- privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
	- 'Один из последних просмотренных фильмов?'
	- 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
	movies: {
		'logan': '8.1'
	}

Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"*/



/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count : numberOfFilms,
	movies : {},
	actors : {},
	genres : [],
	privat : false
};


function detectPersonalLevel() {
	if (numberOfFilms < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
		alert('Вы классический зритель');
	} else if (numberOfFilms > 30) {
		alert('Вы киноман');
	} else {
		alert('Произошла ошибка');
	}
}

detectPersonalLevel();


function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
			b = prompt('На сколько оцените его?', '');
	
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
		} else {
			i--;
		}
		
	}
}

rememberMyFilms();



function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i < 4; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = genre;
	}	
}

writeYourGenres();






























function getTimeFromMinutes(time) {

	let hour = Math.floor(time / 60);
	let minute = time % 60;

	if (typeof (time) !== 'number' || !Number.isInteger(time) || time < 0) {
		return 'Ошибка, проверьте данные';
	} else if (hour === 1 && minute === 1) {
		return `Это ${hour} час и ${minute} минута`;
	} else if (hour === 1 && minute >= 2 && minute <= 4) {
		return `Это ${hour} час и ${minute} минуты`;
	} else if (hour === 1 && minute === 0 || hour === 1 && minute >= 5) {
		return `Это ${hour} час и ${minute} минут`;

	} else if (hour >= 2 && hour <= 4 && minute === 1) {
		return `Это ${hour} часа и ${minute} минута`;
	} else if (hour >= 2 && hour <= 4 && minute >= 2 && minute <= 4) {
		return `Это ${hour} часа и ${minute} минуты`;
	} else if (hour >= 2 && hour <= 4 && minute === 0 || hour >= 2 && hour <= 4 && minute >= 5) {
		return `Это ${hour} часа и ${minute} минут`;

	} else if (hour === 0 && minute === 1 || hour >= 5 && hour <= 10 && minute === 1) {
		return `Это ${hour} часов и ${minute} минута`;
	} else if (hour === 0 && minute >= 2 && minute <= 4 || hour >= 5 && hour <= 10 && minute >= 2 && minute <= 4) {
		return `Это ${hour} часов и ${minute} минуты`;
	} else if (hour === 0 && minute >= 5|| hour === 0 && minute === 0 || hour >= 5 && hour <= 10 && minute === 0 || hour >= 5 && hour <= 10 && minute >= 5) {
		return `Это ${hour} часов и ${minute} минут`;	
	} 
}

console.log(getTimeFromMinutes(166));





function getTimeFromMinutes(time) {

	if (typeof (time) !== 'number' || !Number.isInteger(time) || time < 0) {
		return 'Ошибка, проверьте данные';
	}

	const hour = Math.floor(time / 60);
	const minute = time % 60;

	let resultHourStr = '';
	let resultMinuteStr = '';

	switch (hour) {
		case 0:
			resultHourStr = 'часов';
			break;
		case 1:
			resultHourStr = 'час';
			break;
		case 2:
		case 3:
		case 4:
			resultHourStr = 'часа';
			break;
		default:
			resultHourStr = 'часов'
	}

	switch (minute) {
		case 0:
			resultMinuteStr = 'минут';
			break;
		case 1:
			resultMinuteStr = 'минута';
			break;
		case 2:
		case 3:
		case 4:
			resultMinuteStr = 'минуты';
			break;
		default:
			resultMinuteStr= 'минут'
	}

	return `Это ${hour} ${resultHourStr} и ${minute} ${resultMinuteStr}`;


}

console.log(getTimeFromMinutes(62));











function findMaxNumber(a, b, c, d) {

	if (typeof (a) !== 'number' || typeof (b) !== 'number' || typeof (c) !== 'number' || typeof (d) !== 'number' || arguments.length <= 3) {
		return 0;
	} else {
		return Math.max(a, b, c, d);
	}

}
console.log(findMaxNumber(1, -2, 53, 4));










function fib(number) {
	if (typeof(number) !== 'number' || number <= 0 || !Number.isInteger(number)) {
        return '';
    }

    let result = '';
	let first = 0;
	let second = 1;

	for (let i = 0; i < number; i++) {
		if (i + 1 === number) {
			result += `${first}`
		} else {
			result += `${first} `
		}


		let third = first + second;
		first = second;
		second = third;
	}
	return result;
}
console.log(fib(100));


function fib(num) {
	if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return '';
    }

	let result ='';

	let first = 0;
	let second = 1;

	for (let i = 0; i < num; i++) {
		if (i + 1 === num) {
			result += `${first}`
		} else {
			result += `${first} `
		}
		let third = first + second;
		first = second;
		second = third;
	}
	return result;
}
console.log(fib(10));




  