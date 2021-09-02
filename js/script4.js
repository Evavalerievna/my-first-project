/* Задача 2
Выведите простые числа от 2 до 1000. Простое число - это число, которое делится только на себя и на 1. Пример простых чисел: 3, 5, 7, 11, 13, 17.

const Prime = (num) => {
  if (num <= 1)return false;
  for(let i = 2; i < num; i++){
    if (num % i == 0) return false;
  }
  return true;
}

const PrimeOfNums = (usernum) => {
  for(let i = 2; i < usernum; i++){
    if(Prime(i)){
        console.log(i);
    }
  }
};

console.log(PrimeOfNums(1000)); */

// Задача
// функцию, которая работает так:
// 1) дано неотрицительное число num.
// 2) Необходимо складывать все входящие в него цифры до тех пор, пока не останется одна цифра.

// Пример: Для числа 38 процесс будет таким:
// 1. 3 + 8 = 11
// 2. 1 + 1 = 2
// Ответ :2

const recursiveFunc = (str) => {
  str = String(str);
  
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  if (sum >= 10) {
    return recursiveFunc(sum);
  } else {
    return sum;
  }
};

console.log(recursiveFunc(38));

