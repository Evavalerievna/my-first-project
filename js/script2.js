const massifOfNumbers = (begin, end) => {
    for (let num =begin; (num-1) < end; num++)
        {
            if (num % 3 === 0 && num % 5 === 0) {
                console.log('FizzBuzz');
            }
            else if ((num % 3) === 0) {
                console.log('Fizz');
            }
            else if ((num % 5) === 0) {
                console.log('Buzz');
            }
           
            else {
                console.log(num); 
            }
        }
    };

console.log(massifOfNumbers(11,20));

//ошибка type error

/* var greet = "Hello!"
greet.join()  */

// сделать ошибку reference error
/* const sum = (z, g) => z + g;

console.log(sum(firstNum, secondNum)); */

// сделать ошибку syntax error

/* const massifOfNumbers = (begin, end) => {
    for (let num =begin; (num-1) < end; num++)
        {
            if ((num % 3) === 0) {
                console.log('Fizz');
            }           
            else {
                console.log(num); 
            }
        
    };

console.log(massifOfNumbers(3,6)); */


