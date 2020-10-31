// цикли умови функції масиви

// const checkAge = function (age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const checkAge = function (age) {
//   if (age > 18) {
//     return true;
//   }

//   return false;
// };

// console.log(checkAge(18));

// написати функцію яка рахуватиме яке число є менше, функція викликається ось так min(a,b)
// min(2,4)//2
// const min = function (a, b) {
//   // if (a < b) {
//   //   return a;
//   // } else {
//   //   return b;
//   // }
//   // (умова) ? вілповідь якщо виконується : відповідь якщо не виконується
//   // let result = a < b ? a : b;
//   // return result;
//   return a < b ? a : b;
// };

// console.log(min(2, 4));

// Об'єкти
// const let
// const a let a
// const friends = [.....]

// const,let (назва обєкту) = {.....}
// const hotel = {
//   key: value
//   ключ: значення
// };
// console.log(hotel);

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// console.log(hotel);
// friends[0]
// hotel.name
// console.log(hotel.name);
// console.log(hotel.stars);
// console.log(hotel.capacity);

// console.log(hotel["name"]);
// hotel.name = "Grand Hotel";
// console.log(hotel.name);

// hotel["name"] = "grand hotel";
// console.log(hotel["name"]);

// hotel.adress = "Main street";
// hotel.manager = "bruce lee";
// console.log(hotel);
// hotel.name = 0;
// delete
// delete hotel.name;
// delete hotel; - не працює

// console.log(hotel.surname);
// let name = "resort hotel";
// let stars = 14;

// const hotel = {
//   name: name,
//   stars: stars,
// };

// const hotel = {
//   name,
//   stars,
// };

// console.log(hotel);

// методи обєкту

// const hotel = {
//   name: "resort hotel",
//   stars: 5,
//   capacity: 100,

// welcome: function () {
//   console.log("welcome");
// }, застарілий варіант
// welcome() {
//   console.log("welcome");
// },
// };
// console.log(hotel.name);

// hotel.welcome = function () {
//   console.log("welcome");
// };

// hotel.welcome();

// const hotel = {
//   name: "resort hotel",
//   stars: 5,
//   capacity: 100,
// showName() {
//   console.log(hotel.name);
// },
// showName() {
//   console.log(this.name);
// },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };

// hotel.changeCapacity(200);

// console.log(hotel);

// цикли для обєктів

// const hotel = {
//   name: "resort hotel",
//   stars: 5,
//   capacity: 100,
// };
//
// console.log(hotel.name);
// console.log(hotel.stars);
// цикл for...in

// for(const key in hotel){
//   // дії на обєктом
// }
// for (const key in hotel) {
//   console.log(key);
// }
// for (const key in hotel) {
//   console.log(hotel[key]);
// }

// Object.keys()
// Object.values()
// Object.entries()

// const hotel = {
//   name: "resort hotel",
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel);
// console.log(keys);
// const values = Object.values(hotel);
// console.log(values);
// const entries = Object.entries(hotel);
// console.log(entries);

// const values = Object.values(hotel);

// const keys = Object.keys(hotel);

// for (const key of keys) {
//   console.log(key);
// }

// задачка
// є обєкт корзина в якому є фрукти з певною ціною, потрібно знайти суму цін всіх фруктів

// const goods = {
//   apples: 5,
//   pineapple: 6,
//   grapes: 10,
//   banana: 40,
//   orange: 1,
// };

// const array = Object.values(goods);
// let total = 0;
// for (const arr of array) {
//   total += arr;
// }

// console.log(total);

// let total = 0;
// for (const good in goods) {
//   total += goods[good];
// }
// console.log(total);

// домашнє завдання
// модуль 3 - завдання 1,завдання 4
