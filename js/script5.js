//задача. записать ф-цию которая делает заглавной первую букву каждого слова в предложении.
 // пример: solution('hello, world!'); // Hello, World!

/* let solution = 'hello, world!'; //вариант решения (первое слово с большой буквы)

let correctSolution = solution.substr(0,1).toUpperCase() + solution.substr(1).toLowerCase();
console.log(correctSolution); */



/*  const lettersUpper = str => {
    let result = "";
    for(let i = 0; i < str.length; i++ ) { 
        const shouldBeBig = (i === 0 || str[i - 1] === '');
        result += shouldBeBig ? toUpperCase(str[i]) : str[i];
    }
    return result;
};
console.log(lettersUpper("hello, world!")); //метод разобран на уроке. Не поняла, как исправить. Прошу подсказать */
 

/* 
const lettersUpper = "hello, world!"; 
const words = lettersUpper.split(" "); //разбиваем предложение на массив слов
for (let i = 0; i < words.length; i++) { 
    words[i] = words[i][0].toUpperCase() + words[i].substr(1); 
} 
console.log(words.join(" ")); 
 */

/* const toUpper = str => {
    return str
        .toLowerCase()
        .split(' ')
        .map(function(word) {
            console.log("First capital letter: "+word[0]);
            console.log("remain letters: "+ word.substr(1));
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
     };
     console.log(toUpper("hello, world!"));
 */

/* 
     const toUpper = str => {
        return str
            .toLowerCase()  //оставшиеся буквы с прописной
            .split(' ')  //разбиваем предложение на массив слов
            .map(function(word) {
                
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' ');
         }
         console.log(toUpper("hello, world!"));

 */


/* Задача 2.
Реализуйте функцию, которая переворачивает цифры в переданном числе и возвращает новое число.
Примеры:
reverseInt(13); // 31
reverseInt(-123); // -321 */


/* let num = 13;
const getReversedNum = num => {

    let result = 0;
    while (num) {
        result = result * 10 + num % 10;
        num = Math.floor(num / 10);
  }
    return result;
};

console.log(getReversedNum(num));  */

   
  
/*  
// переварачиваем цифры как слова. НО МИНУС В КОНЦЕ  
const str = '-123'
const reverseString = (str) => {
   
    return str.split('').reverse().join('')
};

console.log('str:', str);
console.log('reverse:', reverseString(str)); */

/* Задача 3.
Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.
Примеры:
isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2) */


//через рекурсию
/* const isPowerOfThree = (num) => {
    const findPowerOfThree = (num) =>{
        if(num%3 !== 0 || num <= 1) return 0;        
        return 1 + findPowerOfThree(num/3);
    }
    return 3**findPowerOfThree(num) === num;
}
console.log(isPowerOfThree(1));
console.log(isPowerOfThree(2));
console.log(isPowerOfThree(9)); */

const isPowerOfThree = (num) => {
    const findPowerOfThree = (num) =>{
        if(num%3 !== 0 || num <= 1) return 0;        
        return 1 + findPowerOfThree(num/3);
    }
    return 3**findPowerOfThree(num) === num;
}
console.log(isPowerOfThree(1));
console.log(isPowerOfThree(2));
console.log(isPowerOfThree(9));