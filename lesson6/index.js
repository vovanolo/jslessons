// 1 спосіб
// const calculateEngravingPrice = function (message, pricePerWord) {
//   let numberOfWords = 0;
//   for (let i = 0; i < message.length; i += 1) {
//     if (message[i] === " ") {
//       numberOfWords += 1;
//     }
//   }
//   numberOfWords += 1;
//   return numberOfWords * pricePerWord;
// };
// 2 спосіб
// const calculateEngravingPrice = function (message, pricePerWord) {
//   let word = message.split(" ");
//   return word.length * pricePerWord;
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// повторення
// let a = 2;

// let x = 1 + (a *= 2);

// console.log(x);

// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(true + false);
// true - 1
// false - 0
// console.log(6 / "3");
// console.log(4 + 5 + "blabla");
// console.log("px" + 4 + 5);
// console.log("4px" - 2); NaN(Not a Number)
// console.log(7 / 0);
// console.log("    -9  " + 5);
// console.log("    -9  " - 5);
// console.log(null + 1);
// console.log(undefined + 1); NaN

// let a = prompt("Введіть перше число");
// let b = prompt("введіть друге число");

// console.log(+a + +b);

// функції
// const func = function(){

// }

// function func(){

// }

// const func = function () {
//   return "Hello world";
// };

// console.log(func());

// const hello = function () {
//   console.log("hello world");
// };
// const goodbye = function () {
//   console.log("goodbye");
// };

// let input = prompt("say hello");

// if (input === "hello") {
//   hello();
// } else {
//   goodbye();
// }

// const func = function (a, b, c) {
//   console.log(a, b, c);
// };

// func(1, 2, 3);

// let friends = ["vlad", "ivan"];

// for (const friend of friends) {
//   console.log(friend);
// }

// const func = function (array) {
//   for (const arr of array) {
//     console.log(arr);
//   }
// };
// // func(["danya", "polina"]);
// func(friends);

// const sum = function () {
//   // let total = 0;

//   // for (const argument of arguments) {
//   //   total += argument;
//   // }

//   // console.log(total);

//   console.log(arguments);
// };

// sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

// let str = string.split(" ");
// let longest = 0;
// let word = null;

// if (longest < str[i].length) longest = str[i].length;
// word = str[i];

// console.log(word);
// завдання 4 з дз

// let message = "hello world";

// console.log(message.length);
// slice(0,40);

// const formatString = function (string) {
//   if (string.length > 40) {
//     return string.slice(0, 40) + "...";
//   } else {
//     return string;
//   }
// };

// let result = (умова) ? відповідь якщо умова виконується : якщо не виконується
// return result;
// const formatString = function (string) {
//   let result = string.length > 40 ? string.slice(0, 40) + "..." : string;
//   return result;
// };
// const formatString = function (string) {
//   return string.length > 40 ? string.slice(0, 40) + "..." : string;
// };

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // повернеться оригінальний рядок

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // повернеться форматований рядок

// console.log(formatString("Curabitur ligula sapien."));
// // повернеться оригінальний рядок

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// завдання 5
// || &&
// message.includes('sale')
// message.includes('spam')
// const checkForSpam = function (message) {
//   if (message.includes("spam") || message.includes("sale")) {
//     return true;
//   } else {
//     return false;
//   }
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("spam How to earn fast money?")); // true

// стрілочні функції

// const func = () => {

// }

// const hello = function () {
//   console.log("hello world");
// };
// const goodbye = function () {
//   console.log("goodbye");
// };
// const hello = () => {
//   console.log("hello world");
// };

// const goodbye = () => {
//   console.log("goodbye");
// };

// let input = prompt("say hello");

// if (input === "hello") {
//   hello();
// } else {
//   goodbye();
// }

// map filter

// bootstrap

// домашнє 2 модуль - 3 завдання
