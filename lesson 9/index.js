// const countProps = function (obj) {
//   // const values = Object.values(obj);
//   // return values.length;
//   // *************
//   // const keys = Object.keys(obj);
//   // let total = 0;
//   // for (const key of keys) {
//   //   total += 1;
//   // }
//   // return total;
//   // **********
//   // let total = 0;
//   // for (const key in obj) {
//   //   total += 1;
//   // }
//   // return total;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// const findBestEmployee = function (employees) {
//   let totalTasksDone = 0;
//   let theMostProductive = "";
//   for (const key in employees) {
//     if (employees[key] > totalTasksDone) {
//       totalTasksDone = employees[key];
//       theMostProductive = key;
//     }
//   }
//   return theMostProductive;
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

//
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

// for(const key of keys){
//   key["name"]
// }

// const getAllPropValues = function (arr, prop) {
//   let total = [];
//   for (const key of arr) {
//     if (key[prop] === undefined) {
//       return [];
//     }
//     total.push(key[prop]);
//   }
//   return total;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

// додаткове дз модуль 3 - завдання 6 на додаткові 3 бали

// колбек функції, колбек

// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = "HOCs are awesome";
//   callback(string);
// };

// higherOrderFunction(printMessage);

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, function (value) {
//   labels.push(`Label ${value + 1}`);
// });

// console.log(labels);

// function fn() {
//   console.log(this);
// }

// fn();
// console.log(this);

// const Hotel = function (name, stars, capacity, manager) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.manager = manager;
// };

// // В результате вызова
// const hotel = new Hotel("Resort Hotel", 5, 100, "ivan");

// const hotel_grand = new Hotel("Grand hotel", 5, 200, "petro");
// // Получаем такой объект
// console.log(hotel_grand);

// домашнє завдання
// модуль 4 - завдання 1
