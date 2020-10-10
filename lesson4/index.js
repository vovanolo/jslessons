// const friends = ["ivan", "petro", "danya", "sasha", "polina"];
// for (const friend of friends) {
//   if (friend === "danya") {
//     console.log("знайдено найкращого друга");
//     break;
//   }
// }
// повторення
// 0-false
// 1-true
// "" - false
// "0" - true
// if ("") {
//   console.log("привіт");
// }
// let result;
// if (a + b < 4) {
//   result = "мало";
// } else {
//   result = "багато";
// }

// let result = a + b < 4 ? "мало" : "багато";

// let result = умова ? вираз : вираз

// масиви
// const friends
// const friends = ["ivan", "petro", "danya", "sasha", "polina"];

// console.log(friends.length);
// friends.length = 10;
// console.log(friends);
// console.log(friends[1]);
// friends[1] = "vlad";
// console.log(friends);
// двовимірні масиви

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   for (let j = 0; j < matrix[i].length; j += 1) {
//     total += matrix[i][j];
//   }
// }
// console.log(total);

// методи масиву
// split, join

// let message = "welcome to goiteens";
// console.log(message.split(" "));
// console.log(message.split(""));
// const message = ["welocome", "to", "goiteens"];
// console.log(message.join(" "));
// console.log(message.join(","));
// console.log(message.join("-"));

// indexof, includes

// const friends = ["ivan", "petro", "danya", "sasha", "polina"];
// console.log(friends.indexOf("danya"));
// console.log(friends.indexOf("vlad"));

// console.log(friends.includes("ivan"));
// console.log(friends.includes("vlad"));

// push pop
// const friends = ["ivan", "petro", "danya", "sasha", "polina"];
// friends.push("vlad");
// friends.push("vasyl");
// console.log(friends);

// const friends = ["ivan", "petro", "danya", "sasha", "polina"];
// friends.pop();
// console.log(friends);

// shift unshift
// const friends = ["ivan", "petro", "danya", "sasha", "polina"];

// // friends.shift();
// // console.log(friends);
// friends.unshift("vasyl");
// console.log(friends);

// slice

// const friends = ["ivan", "petro", "danya", "sasha", "polina"];

// console.log(friends.slice(0, 3));
// console.log(friends.slice(1));

// splice

// const friends = ["ivan", "petro", "danya", "sasha", "polina"];

// const deletedFriend = friends.splice(0, 3);

// console.log(deletedFriend);
// console.log(friends);

// вставка елементів за допомогою splice

// friends.splice(2, 0, "vasyl", "emanyil", "vova");
// console.log(friends);

// заміна елементів масиву за допомогою splice

// friends.splice(1, 1, "vasyl");
// console.log(friends);

// concat
// const friends = ["ivan", "petro", "danya", "sasha", "polina"];
// const newFriends = ["vasyl", "vova", "emanuil"];

// const allFriends = friends.concat(newFriends);
// console.log(allFriends);

// Функції
// const sum = function(argument){
// command
// result
// }
// function sum(){

// }

// let a = 5;
// let b = 6;
// let c = 7;
// console.log(a + b + c);

// const a ....
// const b ...

// const sum = function (a, b) {
//   console.log(a + b);
// };

// sum("hello ", 5);
// console.log(sum(10, 20, 30));

// const sayHello = function () {
//   console.log("hello world");
// };
// sayHello();

// const multiply = function (a, b) {
//   console.log(a * b);
// };

// multiply(6, 10);

// const friends = ["ivan", "petro", "danya", "sasha", "polina"];

// const findFriend = function (array, bestfriend) {
//   for (const friend of array) {
//     if (friend === bestfriend) {
//       console.log("наш друг тут є");
//     }
//   }
// };

// findFriend(friends, "danya");

// дз
// скулоджи - 2 модуль - 1 завдання
