// массивы - упорядоченные наборы(коллекции) элементов (друзья в соцсети, студенты в группе и т.д.).
//задача массива предоставить такие коллекции в виде единой структуры, которая позволяет работать с ними, как с едиными целыми.
//определение массива
//const items = [];

//создание массива с тремя элементами
//const animals = ['cats', 'dogs', 'birds'];

//получение данных
/* console.log(animals[0]); //'cats'
console.log(animals[1]); //'dogs' */

//узнать длину массива
//console.log(animals.length);

//обращение к элементу при помощи переменной
/* let i = 1;
let j = 1;
const animals = ['cats', 'dogs', 'birds'];
console.log(animals[i + j]); */

//в квадратные скобки можно подставить вызов ф-ции
/* const getLindexOfSecondElement = () => 1; 
const animals = ['cats', 'dogs', 'birds'];
console.log(animals[getLindexOfSecondElement()]); // 'dogs' */

//получение последнего элемента в массиве
/* const animals = ['cats', 'dogs', 'birds'];
console.log(animals[animalth.length-1]); //'birdth' */

// напишите функцию, которая возвращает массив из двух элементов - названий выходных дней на английском. Функция принимает на вход параметр - формат возраста. Есть два возможных значения:
// 'long' - массив содержит значения saturday и sunday.
// 'short' - массив содержит значения sat и sun.
// Пример вызова
// myFunction('short'); // короткая запись дней
// myFunction('long'); // длинная запись дней

/* const getWeekend = (str) => {   // решение вариант 1
    const short = ['sat', 'sun'];
    const long = ['saturday', 'sunday'];
    if(str ==='short') {
        return short;
    }
    if(str ==='long') {
        return long;
    }
};
console.log(getWeekend('short'));
console.log(getWeekend('long')); */

/* const getWeekend = (str) => {     // решение вариант 2
    const short = ['sat', 'sun'];
    const long = ['saturday', 'sunday'];
   switch(str){
       case 'short' : return short;
       case 'long' : return long;
   }
};
console.log(getWeekend('short'));
console.log(getWeekend('long')); */

//модификация

//const name = 'Amazon';
//console.log(name.topUpperCase()); //'AMAZON' Любые ф-ции и методы над ними возвращают новые значения, но ничего не могут делать со старыми.
//console.log(name); //'Amazon'

//изменение массива
//const animals = ['cats', 'dogs', 'birds'];

//меняется первый элемент массива
//animals[0] = 'horses'; // можно заменить только таким образом, нельзя замисать     const animals = ['horses'];
//console.log(animals);

//константы хранят ссылку на данные, а не сами данные. Это значит, что менять можно данные, а не ссылку.

//добавление элемента в массив
// push() добавляет элемент в конец массива
//console.log(animals);


//массив animals изменен - стал больще
//console.log(animals);
//console.log(animals[3]);

//добавление элемента в начало массива
// unshift() добавляет элемент в начало массива
//const animals = ['cats', 'dogs', 'birds'];
// animals.unshift('horses');
//console.log(animals);


//иногда индекс добавления известен сразу 
//animals[3] = 'horses';
//console.log(animals);

//удаление элементов из массива
//const animals = ['cats', 'dogs', 'birds'];
//delete animals [1];
//console.log(animals);
//console.log(animals.length);

// реализовать функцию, которая меняет местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то возвращается как есть. 
// Примеры вызова
// myFunction([]); // []
// myFunction([1]); // [1]
// myFunction([1, 2]); // [2, 1]
// myFunction(['one', 'two', 'three']); // ['three', 'two', 'one']

/* const reversArra = (items) => {   
    const newArray = [];
   
    if(items.length <2) {
        return items;
    } else {
        for(let i = items.length-1; i>=0; i --) {
            newArray.push(items[i]);
        }
        return newArray;
    }
};
console.log(reversArra([1,2,3]));
console.log(reversArra([1,2]));

//решение 2
const reverseArray = items => {
    if (items.length < 2) {
        return items;
    }
    const lastIndex = items.length - 1;
    const last = items[lastIndex];
    items[lastIndex] = items[0];
    items[0] = last;
    return items;
};
console.log(reverseArray(['one','two','three'])); */

/* //проверка сушествования значения в массиве
const animals = ['cats', 'dogs', 'birds'];
//                  0       1       2

console.log(animals[5]); //underfined
console.log(animals[4]); //underfined
console.log(animals[3]); //underfined
console.log(animals[2]); //'birds' */

//способ проверить выход за границу - убелиться в том, что индекс не превышает длину массива
/* if(index < items.length) {
    items[index]; // все ок
} */

/* //цикл for в массиве
//способ 1. вывод значений в обратном порядке от нулевого до последнего
const animals = ['cats', 'dogs', 'birds'];
for(let i = 0; i < animals.length; i++) {
    const index = (animals.length - 1) - i;
    console.log(animals[index]);
};

// Способо 2. обход в обратном порядке, от верхней границы до нижней т. е от последнего индекса к первому (нулю)
const animals = ['cats', 'dogs', 'birds'];
for(let i = animals.length - 1; i >= 0; i--) {
    console.log(animals[i]);
}; */

/* //модификация (изменение) массива.
//Задача. Нормализация списка электронных алресов - приведение к нижнему регистру

const emails = ['VASYA@gmAil.com', 'iGoR@yandex.RU', 'netiD@hot.CoM'];
console.log(emails);
for(let i = 0; i <emails.length; i++) {
    const email = emails[i];
    const normalizedEmail = email.toLowerCase(); // преобразование строки в нижний регистр
    emails[i] = normalizedEmail; // заменяем значение
}
console.log(emails);
 */
// Задача. написать функцию, которая принимает на вход массив и строковый префикс, и возвращает новый массив, в котором к каждому элементу исходного массива добавляется переданный префикс. 
//const names = ['john', 'smith', 'karl'];
//const newNames = addPrefix(names, 'Mr');
//console.log(newNames); // ['Mr john', 'Mr smith', 'Mr kalr'];
//console.log(names); // ['john', 'smith', 'karl']
/* 
const names = ['john', 'smith', 'karl'];
const addPrefix = (items, prefix) => {
    const result = [];
    for(let i = 0; i < items.length; i++) {
        result[i] = `${prefix} ${items[i]}`;
    }
    return result;
};
const newNames = addPrefix(names, 'Mr');
console.log(newNames); */


/* // найти сумму элементов в массиве
const calculateSum = coll => {​​​​​    let sum = 0; // начальное значение суммы    
    for(let i = 0; i < coll.length; i++) {​​​​​        
        sum += coll[i]; // поочередно складываем все элементы    
    }​​​​​    return sum;}​​​​​;console.log(calculateSum([])); // 0
    console.log(calculateSum([3, 2, -10, 38, 0])); // 33


//процесс вычисленийlet 
sum = 0;
sum = sum + 3; 
// 3sum = sum + 2; 
// 5sum = sum +-10; 
// -5sum = sum + 38; 
// 33sum = sum + 0; 
// 33 */



// Задача. написать функциюю, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3.
// const coll = []; // 0
// const coll = [8, 9, 21, 19, 18, 22, 7];
// Пример: calculateSum(coll); // 48

/* // цикла for...of будет недостаточно, когда потребуется ручное управление обходом. например, когда нужно идти не по каждому элементу массива, а через один. 
for (let i = 0; i <items.length; i+= 2) {
    // какой-то код
}
// иногда нужно обходить массив в обратном порядке. for...of здесь бессилен
for(let i = items.length - 1; i >= 0; i -= 1 ) {
    // какой-то код
}
// ситуация, когда нужно перебирать числа в определенном диапазоне. 
for(let i = 5; i < 10; i++) {
    // какой-то код
}
// бывают ситуации, когда во время обхода необходимо менять исходный массив
for(let i = 0; i <items.length; i += 1) {
    // items[i] = // что-то делаем
} */

/* // напишите функцию, которая высчитывает среднее арифметическое элементов переданного массива.
// пример: const temperatures = [37.5, 34, 39.3, 40, 38.7, 41.5];
// calculateAverage(temperatures); // 38.5
// const tempreatures2 = [];
// calculateAverage(temperatures2); // null

const calculateAverage = (temperatures) => {
    let quantity = temperatures.length;
    if(quantity ===0) {
        return null;
    }

    let sum =  0; 
    for ( let i = 0; i < temperatures.length-1; i ++) {
        sum += temperatures[i];
    }
    return sum/quantity;
}
console.log(calculateAverage([37.5, 34, 39.3, 40, 38.7, 41.5]))
console.log(calculateAverage([]));

//вариант 2
const calculateAverage = (temperatures) => {

    let quantity = temperatures.length;
    if(quantity ===0) {
        return null;
    }
    let sum = 0;
    for(const value of temperatures) {
        sum += value;
    }
    return sum/quantity;
};
console.log(calculateAverage([37.5, 34, 39.3, 40, 38.7, 41.5]))
console.log(calculateAverage([])); */


    

// console.log(newNames); // ['Mr john', 'Mr smith', 'Mr kalr'];
// console.log(names); // ['john', 'smith', 'karl']
// const names = ['john', 'smith', 'karl'];
// const addPrefix = (items, prefix) => {
//     const result = [];

//     for(let i = 0; i < items.length; i++) {
//         result[i] = `${prefix} ${items[i]}`;
//     }
//     return result;
// };

// const newNames = addPrefix(names, 'Mr');

// console.log(newNames);

// Ссылки

// const items = [1, 2];

// // ссылаются на один и тот же массив
// const items2 = items;
// items2.push(3);

// console.log(items); // [ 1, 2, 3 ]
// console.log(items2); // [ 1, 2, 3 ]

// console.log(items === items2);

// более того, если передать массив в какую-то функцию, которая его изменяет, то массив тоже изменится

// const f = (coll) => coll.push('wow');

// const items = ['one'];
// f(items);
// console.log(items);

// f(items);
// console.log(items);


// агрегация - любые вычисления, которая строятся на основе всего набора данных, например, поиск max, min, среднего.

// функция поиска максимального значения
// const calculateMax = (coll) => {
//     if (coll.length === 0) {
//         return null;
//     }

//     let max = coll[0]; // принимаем за максимальное первый элемент
//     for(let i = 1; i < coll.length; i++) {
//         const currentElement = coll[i];
//         if(currentElement > max) {
//             max = currentElement;
//         }
//     }
//     return max;
// };

// console.log(calculateMax([])); // null
// console.log(calculateMax([3, 2, -10, 38, 0, -2, -4, 40, 52])); // 52

// найти сумму элементов в массиве
// const calculateSum = coll => {
//     let sum; // начальное значение суммы
//     for(let i = 0; i < coll.length; i++) {
//         sum += coll[i]; // поочередно складываем все элементы
//     }
//     return sum;
// };

// console.log(calculateSum([])); // 0
// console.log(calculateSum([3, 2, -10, 38, 0])); // 33

//процесс вычислений
// let sum = 0;
// sum = sum + 3; // 3
// sum = sum + 2; // 5
// sum = sum +-10; // -5
// sum = sum + 38; // 33
// sum = sum + 0; // 33

// Задача. написать функциюю, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3.
// const coll = []; // 0
// const coll = [8, 9, 21, 19, 18, 22, 7];
// Пример: calculateSum(coll); // 48

// for
// const userNames = ['petya', 'vasya', 'evgeny'];
// for(let i = 0; i < userNames.length; i++) {
//     console.log(userNames[i]);
// }

// for...of. данный цикл знает о том, как перебирать элементы и знает о том, когда они закончатся
// const userNames = ['petya', 'vasya', 'evgeny'];
// for(const name of userNames) {
//     console.log(name);
// }

// данный цикл отлично подходит для задач агрегации
// const calculateSum = coll => {
//     let sum = 0;
//     for(const value of coll) {
//         sum += value;
//     }
//     return sum;
// };
// console.log(calculateSum([])); // 0
// console.log(calculateSum([3, 2, -10, 38, 0])); // 33

// цикла for...of будет недостаточно, когда потребуется ручное управление обходом. например, когда нужно идти не по каждому элементу массива, а через один. 
// for (let i = 0; i <items.length; i+= 2) {
//     // какой-то код
// }

// // иногда нужно обходить массив в обратном порядке. for...of здесь бессилен
// for(let i = items.length - 1; i >= 0; i -= 1 ) {
//     // какой-то код
// }

// // ситуация, когда нужно перебирать числа в определенном диапазоне. 
// for(let i = 5; i < 10; i++) {
//     // какой-то код
// }

// // бывают ситуации, когда во время обхода необходимо менять исходный массив
// for(let i = 0; i <items.length; i += 1) {
//     // items[i] = // что-то делаем
// }

// напишите функцию, которая высчитывает среднее арифметическое элементов переданного массива.
// пример: const temperatures = [37.5, 34, 39.3, 40, 38.7, 41.5];
// calculateAverage(temperatures); // 38.5
// const tempreatures2 = [];
// calculateAverage(temperatures2); // null

// удаление элементов из массива
// const animals = ['cats', 'dogs', 'birds'];
// delete animals[1]; // удаляем элемент под индексом 1. уменьшение размера массива - нежелательная операция. 
// console.log(animals);
// console.log(animals.length);

// задача. удаление null элементов из массива
// const compact = coll => {
//     // создание результирующего массива, который наполняется только подходящими под условие значениями. 
//     // именно так нужно воспринимать фразу удалить из массива что-то. 
//     const result = [];
//     for(const item of coll) {
//         if(item !== null) {
//             result.push(item);
//         }
//     }
//     return result;
// };

// console.log(compact([0, 1, false, null, true, 'wow', null])); // [0, 1, false, true, 'wow']
// console.log(compact([])); // []


// управляющие инструкции (break и continue)
// break - производит выход из цикла. 
// const coll = ['one', 'two', 'three', 'four', 'stop', 'five'];
// for(const item of coll) {
//     if(item === 'stop') {
//         break;
//     }
//     console.log(item);
// }

// continue - позволяет пропустить итерацию цикла.
// const coll = ['one', 'two', null, 'four', null, 'five'];
// const myCompact = coll => {
//     const result = [];
//     for(const item of coll) {
//         if(item !== null) {
//             continue;
//         }
//         result.push(item);
//     }
//     return result;
// };

// console.log(myCompact(coll));


// сортировка массивов.

// const numbers = [8, 3, 10];

// numbers.sort((a, b) => a - b); // сортировка по возрастанию
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// пузырьковая сортировка
const bubbleSort = coll => {
    let stepsCount = coll.length - 1;
    let swapped; // показывает был ли совершен обмен элементов во время перебора массива
    // do...while. разница в проверке. здесь она делается не до выполнения тела, а после
    do {
        swapped = false;
        for(let i = 0; i <stepsCount; i++) {
            if(coll[i] > coll[i + 1]) {
                const temp = coll[i]; // константа для хранения текущего элемента
                coll[i] = coll[i + 1];
                coll[i + 1] = temp;

                swapped = true;
            }
        }
        stepsCount -= 1;
    } while (swapped); // продолжаем, пока swapped === true
    return coll;
};
console.log(bubbleSort([3, 2, 10, -2, 0, -4, -8, 22, 34, 7]));
