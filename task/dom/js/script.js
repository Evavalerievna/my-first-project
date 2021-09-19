'use strict';

// поиск элемента по id. всегде возвращает один элемент
// const el = document.getElementById('content');
// console.log(el);

// // если нужна обработка нескольких элементов, подойдет поиск по классу
// const collection = document.getElementsByClassName('row');

// // поиск элемента по тегу.
// const span = document.getElementsByTagName('span');

// // поиск всех элементов
// const all = document.getElementsByTagName('*');

// поиск по селектору

// найти элемент с id = menu
// const ul = document.querySelector('#menu');
// console.log(ul);

// // смотрим все спаны, вложенные в теги с классом .odd 
// const spans = ul.querySelectorAll('.odd > span');
// console.log(spans);

// matches - предикат проверяет, удовлетворяет ли el селектору css
// const el = document.querySelector('p');
// el.matches('unknown-class'); // false
// el.matches('font-weight'); // true

// closest - ищет ближайший элемент по иерархии, удовлетворяющий селектору.
// const el = document.querySelector('span');
// const ancestor = el.closest('.row');
// ancestor.id; // 'three'

// атрибуты. когда браузер загрузил HTML код, на его основе строится DOM. во время обработки, каждый тег становится узлом, а атрибуты - свойствами этого узла.

// const el = document.querySelector('#aboutPage');
// el.id; // aboutPage
// el.href; // /pages/about

// добавление/удаление класса при помощи js
// const el = document.querySelector('#aboutPage');
// el.classList.add('page'); // добавили класс
// el.classList.remove('simple'); // удаление класса


// const getBoom = () => alert('Boom');

// обращение через свойство элемента в DOM
// const button = document.getElementById('button');
// button.onclick = () => alert('Boom!');

// несколько обработчиков на один элемент
// const button = document.getElementById('button');

// // добавляем второй обработчик
// button.addEventListener('click', () => alert('Boom 2'));

// button.addEventListener('click', () => alert('Boom 1!'));

// при желании можно удалить обработчик
// button.removeEventListener('click', handler);

// Объект события
// const button = document.getElementById('button');

// button.addEventListener('click', (e) => {
//     // координаты точки, в которой произошел клик
//     console.log(e.clientX);
//     console.log(e.clientY);
// });


// действия по-умолчанию
const el = document.getElementById('myElement');

el.addEventListener('click', (e) => {
    e.preventDefault(); // если этого не сделать, браузер выполнит загрузку новой страницы.
    alert(e.target.textContent);
});
