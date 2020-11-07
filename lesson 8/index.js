// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// // user["hobby"] = "skydiving";
// user.hobby = "skydiving";
// user.premium = false;
// console.log(user);
// const keys = Object.keys(user);

// for (const key of keys) {
//   // console.log(key);
//   // console.log(user[key]);
// console.log(`${key} : ${user[key]}`);
// }

// for...in

// for (const key in user) {
//   // console.log(key);
//   // console.log(user[key]);
//   console.log(`${key} : ${user[key]}`);
// }

// console.log(keys);

// const countTotalSalary = function (employees) {
// let total = 0;
// const values = Object.values(employees);
// for (const val of values) {
//   total += val;
// }
// return total;
// *********
// let total = 0;
// for (const key in employees) {
//   total += employees[key];
// }
// return total;
// };

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// масиви обєктів
// const user = {
//   name: "ivan",
//   age: 19,
//   salary: 2000,
// };

// const users = [
//   {
//     name: "ivan",
//     age: 19,
//     salary: 2000,
//   },
//   {
//     name: "danya",
//     age: 14,
//     salary: 100,
//   },
//   {
//     name: "messi",
//     age: 100,
//     salary: 200,
//   },
// ];

// for .. of
// for

// console.log(users);
// console.log(users[0]);
// for (const user of users) {
//   console.log(user);
// }
// for (const user of users) {
//   console.log(user.name);
// }

// Операції spread і rest
// ...
// розпилення масивів або обєктів(копіювання масивів або обєктів)
// const values = [18, 20, 30, 22, 1, 58, 133];
// console.log(Math.max(...values));

// const friends = ["danya", "messi", "vlad", "ivan", "platon"];
// const newFriends = [...friends];

// console.log(friends === newFriends);

// console.log(friends);
// console.log(newFriends);

// const friends = ["danya", "messi", "vlad", "ivan", "platon"];
// const newFriends = [...friends, "natalia", "petro", "vasyl"];

// console.log(newFriends);

// розпилення обєктів
// Object.assign()

// const a = {
//   x: 1,
//   y: 2,
// };

// const b = {
//   x: 0,
//   z: 3,
// };

// const c = Object.assign({}, a, b);

// console.log(c);

// const c = {
//   ...a,
//   ...b,
// };

// console.log(c);

// оператор rest

// const add = function (...args) {
//   console.log(args);
// };

// add(1, 2, 3, 4, 5, 7, 8, 9);

// es(ecma script), es1, es5, es6,es7, es8,es9, es2020

//дуструктуризація обєктів
// const hotel = {
//   name: "Resort hotel",
//   stars: 5,
//   capacity: 100,
// };

// const { name, stars } = hotel;
// const { name: hotelName, stars: hotelStars } = hotel;

// console.log(hotelName);
// console.log(hotelStars);

// console.log(name);
// console.log(stars);

// const rgb = [200, 255, 100];

// const [red, green] = rgb;

// console.log(green);

// домашнє завдання
// модуль 3 - завдання 2,3
