'use strict';

// task 1. Product details
// Complete the function `getProductDetails` such that it returns an object with the following properties:
// - `id`: a number representing the id of the product.
// - `title`: a string representing the title of the product.
// - `inStock`: a boolean representing whether the product is in stock or not.
// Give these properties any value you'd like, as long as it fits the expected return type.

// solution
// const getProductDetails = () => {
//     return {
//         id: 1,
//         title: "Road bike",
//         inStock: true
//     }
// };
  
// // Sample usage - do not modify
// console.log(getProductDetails()); // the object you define


// task 2. Feels like
// Complete the function `getWeather` such that it returns the string:
// `It's currently X degrees in Y`
// Where `X` is replaced by the value and Y is replaced by the city name. These values are provided as a `city` parameter which is an object.

// /**
//  * @param {Object} city
//  * @param {string} city.name
//  * @param {number} city.value
//  */

// solution
// const getWeather = city => {
// 	return `It's currently ${city.value} degrees in ${city.name}`;
// };

// // Sample usage - do not modify
// console.log(getWeather({ name: "Amsterdam", value: 3 })); // "It's currently 3 degrees in Amsterdam"
// console.log(getWeather({ name: "Brasilia", value: 24 })); // "It's currently 24 degrees in Brasilia"


// task 3. Increment age

// Complete the function `incrementAge` such that it returns the `person` object with the age incremented (add 1 to the existing value).
// Note that we have provided only one sample usage in this challenge, but your code should work for any similar object that we test it with.

// /**
//  * @param {Object[]} person
//  * @param {string} person[].firstName
//  * @param {string} person[].lastName
//  * @param {number} person[].age
//  */

// Sample usage - do not modify
// const person = {
//     firstName: "Jennifer",
//     lastName: "Doe",
//     age: 18
// }

// // solution
// const incrementAge = person => {
//     person.age = person.age + 1;
//     return person;
// };

// console.log(incrementAge(person)); // {firstName: "Jennifer", lastName: "Doe", age: 19}

// task 4. Nutrition table III
// Complete the function `renderTableRow` such that it returns the following HTML:
// <tr>
// 	<td>TITLE</td>
// 	<td>VALUEg</td>
// </tr>

// Notice how you need to add the `g` next to the VALUE (`g` stands for `grams`).
// You will need to replace the `TITLE` and the `VALUE`. The function receives a `details` parameter which is an object. Use `console.log()` to visualize how it looks like.

import {renderTableRow} from "./nutrition.js";

const carbs = {title: "Carbs", value: 17};
const protein = {title: "Protein", value: 19};
const fat = {title: "Fat", value: 5};

let html = "";

html += renderTableRow(carbs);
html += renderTableRow(protein);
html += renderTableRow(fat);

const tbody = document.querySelector("#nutrition-table tbody");
tbody.insertAdjacentHTML("beforeend", html);