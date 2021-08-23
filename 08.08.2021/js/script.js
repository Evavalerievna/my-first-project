const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}

/*
в js не строгая типизация
сценарный язык
*/
/* пять основных операций
+, -, *, /, %, ()
*/

// 25 * 91 // 25 и 91 операнды, а * оператор умножения.
//((12 * 5) - 4) / 12 // все операторы инфиксные
// =4 // префиксный оператор
// х++ // постфиксный оператор
// 5 / 0 //Infinity
// -5 /0  //-Infinity
// 0 / 'строка' //NAN - not a number

// // радиус Марса 3397 км. Какая площадь поверхности Марса? s = 4 * p * r * r
// 4 * 3.14 * 3397 * 3397

// // радиус Меркурия 2440 км. Какая площадь поверхности Меркурия?

// 4 * 3.14 * 2440 * 2440

// const pl = 3.14;

// 4 * pi * 3397 * 3397
// 4 * pi * 2440 * 2440


const pi = 3.14;
const surfase = 4 * pi * 3390 * 3390;

console.log(surfase);