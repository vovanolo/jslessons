// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProducts, productName) {
//   let total = 0;
//   for (const product of allProducts) {
//     if (product.name === productName) {
//       total = product.price * product.quantity;
//     }
//   }
//   return total;
// };

// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800
// ||

// const Student = function (name, surname) {
//   this.name = name;
//   this.surname = surname;

//   this.greet = function () {
//     console.log(`hello my name is ${this.name}`);
//   };
// };

// const ivan = new Student("Ivan", "ivanov");
// ivan.greet();

// console.log(ivan);

// const petro = new Student("petro", "petrov");
// petro.greet();

// console.log(petro);

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// console.log(dog); // true
// console.log(dog.eats); // true

// class Name {

// }
// класи називаємо з великої букви

// const Student = function (name, surname) {
//   this.name = name;
//   this.surname = surname;
// };

// const ivan = new Student("ivan", "ivanov");

// class Student {
//   constructor(name, surname) {
//     this.new_name = name;
//     this.new_surname = surname;
//   }
//   // sayHello() {
//   //   console.log("hello new object");
//   // }
//   get name() {
//     return this.new_name;
//   }
//   set name(value) {
//     this.new_name = value;
//   }
// }

// const ivan = new Student("ivan", "ivanov");

// ivan.name = "petro";

// console.log(ivan.name);

// перебираючі методи масиву

// const numbers = [5, 10, 15, 20, 25];

// forEach

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// numbers.forEach(function (value) {
//   if (value === 25) {
//     console.log("знайшли число 25");
//   }
//   // console.log(index);
//   // console.log(array);
// });

// метод map

// const numbers = [5, 10, 15, 20, 25];

// const newValues = numbers.map(function (value) {
//   return value * 2;
// });

// console.log(newValues);

// const users = [
//   { name: "ivan", age: 25 },
//   { name: "petro", age: 25 },
//   { name: "vlad", age: 25 },
// ];

// const names = users.map(function (user) {
//   return user.name;
// });

// console.log(names);

// модуль 6 - завдання 1 - на дз
