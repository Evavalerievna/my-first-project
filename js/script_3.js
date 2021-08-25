/* Задача 1. Выведите нечетные числа от 1 до 100.
let num = 0;
while(num<100){
  num++;
  if(num%2) console.log(num);
};
*/

/* Задача 2. Даны 3 числа. С помощью if/else найдите наибольшее число и наименьшее число.
const maxAndMinNum = (a, b, c) => {
    if (a > b && a > c) {
        max = a;
    } else if (b > c) {
        max = b;
    } else {
        max = c;
    }
    if (a < b && a < c) {
        min = a;
    } else if (b < c) {
        min = b;
    } else {
        min = c;
    }
    return [min,max]
};

console.log(maxAndMinNum(40,8,99));
 */



/* Задача 3. Повторите решение предыдущей задачи, используя тернарный оператор.

const maxAndMinNum = (a, b, c) => [
        a < b ? a < c ? a : c : b < c ? b : c,
        a > b ? a > c ? a : c : b > c ? b : c];

        console.log(maxAndMinNum(40,8,99));

*/


/* Задача 4. Реализуйте функцию, которая переворачивает строку. 
Например:
reverse('hello, world!'); // !dlrow ,olleh
const str = 'hello, world!'

function reverseString(str) {
 return str.split('').reverse().join('')
};

console.log('str:', str);
console.log('reverse:', reverseString(str));*/