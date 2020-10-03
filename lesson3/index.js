// let input = prompt("Введіть країну");
// let inputLower = input.toLowerCase();
// // console.log(inputLower);
// let cost = 0;
// switch (inputLower) {
//   case "китай":
//     cost = 100;
//     break;
//   case "чилі":
//     cost = 250;
//     break;
//   case "австралія":
//     cost = 170;
//     break;
//   case "індія":
//     cost = 80;
//     break;
//   case "ямайка":
//     cost = 120;
//     break;
//   default:
//     alert("У вашій країні доставка недоступна");
// }

// console.log(`Доставка в ${inputLower} буде коштувати ${cost} кредитів`);

// const credits = 23580;
// const pricePerDroid = 3000;

// // cammel case
// let numberOfDroids = prompt("Введіть кількість дроїдів");

// let totalPrice = numberOfDroids * pricePerDroid;
// // let balance = credits - totalPrice;

// if (numberOfDroids === null) {
//   console.log("Скасовано користувачем");
// } else if (totalPrice > credits) {
//   console.log("Недостатньо коштів на рахунку!");
// } else {
//   console.log(
//     `Ви купили ${numberOfDroids} дроїдів, на рахунку залишилося ${
//       credits - totalPrice
//     } кредитів.`
//   );
// }

// логічні значення
// логічне і - &&
// логічне або - ||

// const number = 20;

// if (number > 0 && number < 100) {
//   console.log("Все круто");
// }

// if (number > 10 || number < 30) {
//   console.log("все круто");
// }

// 60хв
// 6хв
// 0-15хв - 1 чверть
// 15-30хв -2 чверть
// 30-45хв -3 чверть
// 45 - 60хв - 4чверть

// let number = 6;

// if (number > 0 && number <= 15) {
//   console.log("1 чверть");
// } else if (number > 15 && number <= 30) {
//   console.log("2 чверть");
// }

// цикли
// console.log("1");

// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// ...

// while, do while, for!!!!!
// while(вираз){
//   команда
// }

// let a = 10;

// while (a >= 0) {
//   console.log(a);
//   a -= 1;
// }

// a = 0
// 0
// a = 1
// 1
// a = 2
// 2
// a = 3
// ....
// a = 9
// 9
// a = 10 цикл закінчився

// do{
//   команда
// }while(вираз);

// let a = 0;
// do {
//   console.log(a);
//   a += 1;
// } while (a < 10);

// for(змінна, умова, інкремент){
//   команда
// }

// for (let a = 0; a < 10; a += 1) {
//   console.log(a);
// }
// a = 0;
// let random = Math.round(Math.random() * 10);

// for (let a = 0; a < 10; a += 1) {
//   console.log(a);
//   if (a === random) {
//     console.log(`тут є число ${random}`);
//     break;
//   }
// }

// for (let i = 1; i < Infinity; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//     break;
//   }
// }

// let total = 0;

// for (let i = 0; i < 100; i += 1) {
//   total += i;
// }
// console.log(total);
// total = 0
// total = 0
// total = 0 +1 =1
// total = 1 +2=3;
//
// let total = 0;
// let canInput = true;

// while (canInput === true) {
//   const userInput = prompt("Введіть число");
//   if (userInput === null) {
//     canInput = false;
//     alert(`total: ${total}`);
//   } else {
//     let userInputToNumber = parseInt(userInput);
//     total += userInputToNumber;
//   }
// }

// МАСИВИ!!!!!!!!!!!!!!!!!

// const array = [];
// let ivan = 'ivan';
// let petro = 'petro';

// let input = prompt("Введіть номер студента");

// const students = [
//   "maks",
//   "danya",
//   "vlad",
//   "polina",
//   "platon",
//   "masha",
//   "sasha",
//   "ivan",
// ];

// console.log(students);
// console.log(`студента під номером ${input} звати ${students[input]}`);
// console.log(students[4]);
// console.log(students[9]);
// перевизначення елементів масиву
// students[1] = "oleg";
// console.log(students);
// console.log(students.length);
// students[10] = "petro";
// console.log(students);
// students.length = 4;
// console.log(students);

// const students = [
//   "maks",
//   "danya",
//   "vlad",
//   "polina",
//   "platon",
//   "masha",
//   "sasha",
//   "ivan",
// ];
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);

// for (let i = 0; i < students.length; i += 1) {
//   console.log(`student ${i}: ${students[i]}`);
// }

// for ... of - цикл

// const students = [
//   "maks",
//   "danya",
//   "vlad",
//   "polina",
//   "platon",
//   "masha",
//   "sasha",
//   "ivan",
// ];

// for(змінна of масив){
//   команда
// }
// for (const student of students) {
//   console.log(student);
// }

// for (const student of students) {
//   if (student === "vlad") {
//     console.log("студент влад знайдений");
//     break;
//   }
// }

// двовимірні масиви або матриці
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix);

// Методи масиву
// split, join

// let message = "Welcome to goiteens";
// console.log(message.split(" "));
// console.log(message.split(""));

// const students = [
//   "maks",
//   "danya",
//   "vlad",
//   "polina",
//   "platon",
//   "masha",
//   "sasha",
//   "ivan",
// ];
// console.log(students.join(" "));
// console.log(students.join(","));
// console.log(students.join("--"));

// indexof

// const students = [
//   "maks",
//   "danya",
//   "vlad",
//   "polina",
//   "platon",
//   "masha",
//   "sasha",
//   "ivan",
// ];

// console.log(students.indexOf("sasha"));
// console.log(students.indexOf("petro"));

// Домашнє завдання
// створити масив своїх друзів
// за допомогою циклу for of та перевірки знайти в масиві друзів свого найкращого друга
// якщо найкращого друга немає в масиві тоді виводимо повідомлення що друга немає
// створити ще один цикл в якому вивести всіх друзів з масиву в зворотньому порядку - додатково
