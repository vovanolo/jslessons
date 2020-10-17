// const friends = ["ivan", "petro", "danya", "polina", "vlad", "alex"];

// for (let i = 0; i < friends.length; i += 1) {
//   console.log(`${i + 1} - ${friends[i]}`);
// }
// let i = 1;
// for (const friend of friends) {
//   // console.log(friend);
//   console.log(`${i} - ${friend}`);
//   i += 1;
// }
// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// let i = 3;
// while (i) {
//   console.log((i -= 1));
// }

// let i = 0;
// while ((i += 1) < 5) {
//   console.log(i);
// }
// const number = +prompt("введіть число");
// if (number === 0) {
//   console.log("це ноль");
// } else if (number === 1) {
//   console.log("це одиниця");
// } else {
//   console.log("це не одиниця і не нуль");
// }

// switch
// switch (number) {
//   case 0:
//     console.log("це ноль");
//     break;
//   case 1:
//     console.log("це одиниця");
//     break;
//   default:
//     console.log("це не одиниця і не нуль");
//     break;
// }
// let fruits = ["яблука", "груші", "апельсини"];
// let cart = fruits;
// // console.log(cart);
// cart.push("Банан");
// console.log(cart.length);

// створити масив з назвою styles та елементами джаз і блюз
// добавити в кінець масиву елемент рок-н-рол
// замінити елемент блюз на елемент класика
// видалити переший елемент масиву
// вставити реп в початок масиву

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// styles.splice(1, 1, "classic");
// styles.shift();
// styles.unshift("rap");
// console.log(styles);

// Функції
// const hello = function () {
//   console.log("hello");
// };

// hello();
// const sum = function (a, b) {
//   console.log(a + b);
// };
// sum(5, 6);
// const multiply = function (a, b, c) {
//   console.log(a * b * c);
// };
// multiply(3, 5, 8);
// const message = function (a) {
//   console.log(a);
// };
// message("hello world");
// const friends = ["ivan", "petro", "danya", "polina", "vlad", "alex"];
// const some = function (array) {
//   console.log(array);
// };
// some(friends);
// const findBestFriend = function (array) {
//   for (const friend of array) {
//     if (friend === "danya") {
//       console.log("знайшли найкращого друга даню");
//     }
//   }
// };
// findBestFriend(friends);

// const findBestFriend = function (array) {
//   for (const friend of array) {
//     if (friend === "danya") {
//       return "найшли найкращого друга даню";
//     }
//   }
// };
// // findBestFriend(friends);
// console.log(findBestFriend(friends));
// const devide = function (a, b) {
//   console.log(a / b);
// };
// devide(100, 4);
// let number = 1.22424;

// hello();
// const hello = function () {
//   console.log("hello");
// };
// function hello() {
//   console.log("hello");
// }

// const sum = function (a) {
//   let b = 5;
//   console.log(a + b);
// };
// sum(5);

// const sum = function (a, b, c) {
//   console.log(a + b + c);
// };
// стрілкова функція
// const sum = (a, b, c) => {
//   return a + b + c;
// };
// console.log(sum());
// const sum = (a, b, c) => a + b + c;
// const hello = () => {
//   console.log("hello world");
// };
// hello();

// дз
//модуль 2 - завдання 2
