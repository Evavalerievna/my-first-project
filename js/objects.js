'use strict';

// объекты - тип данных в js с помощью которого представляют связанный набор данных.
// const user = {
//     name: 'Vasya', 
//     married: true, 
//     age: 25,
//     home: true,
// };

// доступ к свойствам объекта
// console.log(user['name']); // имена свойств хранятся внутри объекта в виде строк
// console.log(user.name);

// const user = {
//     name: 'Vasya', 
//     married: true, 
//     age: 25,
// };

// // user.married = false;
// // // то же самое user['married'] = false
// // console.log(user);
// // user.name = 'Marina';
// // console.log(user);

// // в константе хранится не сам объект, а ссылка на него. это значит, что менять содержимое объекта можно, но заменить объект на другой - нельзя! 
// user = {name: 'Mike'};
// console.log(user);

// наполнение объекта
// const course = {};

// course.name = "JS: Объекты";
// course.description = "Хороший курс";
// console.log(course);

// удаление объекта. лучше так не делать, плохая практика
// const user = {name: 'Vasya', wrongProp: 'bug'};

// delete user.wrongProp;
// console.log(user);

// объекты - ссылочный тип данных
// const company = {};

// // поменять объект можно
// // company.name = "Amazon";
// // console.log(company);

// // заменить ссылку нельзя! 
// company = {};
// console.log(company);

// ссылочная припрода влияет и на сравнение. объекты равны между собой не тогда, когда у них одинаковая структура, а когда это один и тот же объект
const company = {name: "Amazon"};

// console.log(company === { name: "Amazon"}); // false

const copyOfCompany = company; // передается ссылка

console.log(company === copyOfCompany); // true

// меняя одно, меняем другое
company.createdAt = 1994;
console.log(copyOfCompany);
console.log(company);