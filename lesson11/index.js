// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserNames = (users) => {
//   const names = users.map(function (user) {
//     return user.name;
//   });
//   return names;
// };
// const getUserNames = function (users) {
//   const names = users.map(function (user) {
//     return user.name;
//   });
//   return names;
// };

// console.log(getUserNames(users));

// перебираючі методи масиву

// forEach

// const people = ["ivan", "petro", "vasyl", "vlad", "ivanko"];

// for (let i = 0; i < people.length; i += 1) {
//   console.log(people[i]);
// }

// people.forEach(function (value) {
//   console.log(value);
// });

// Map

// const people = [
//   {
//     id: 1,
//     name: "ivan",
//   },
//   {
//     id: 2,
//     name: "petro",
//   },
//   {
//     id: 3,
//     name: "vasyl",
//   },
// ];

// const peopleNames = people.map(function (user) {
//   return user.name;
// });

// console.log(peopleNames);

// метод filter()

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filteredNumbers = numbers.filter(function (number) {
//   return number === 5;
// });

// console.log(filteredNumbers);
// console.log(numbers);

// const people = [
//   {
//     id: 1,
//     name: "ivan",
//   },
//   {
//     id: 2,
//     name: "petro",
//   },
//   {
//     id: 3,
//     name: "vasyl",
//   },
// ];

// const filteredPeople = people.filter(function (value) {
//   return value.id > 1;
// });
// console.log(filteredPeople);

// find
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const numberToFind = numbers.find(function (number) {
//   return number === 4;
// });

// console.log(numberToFind);

// reduce
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let total = 0;

// for (const number of numbers) {
//   total += number;
// }
// console.log(total);

// const summ = numbers.reduce(function (total, value) {
//   return total + value;
// }, 0);

// console.log(summ);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const likes = tweets.reduce(function (total, tweet) {
//   return total + tweet.likes;
// }, 0);

// console.log(likes);

// sort()
// const numbers = [2, 1, 4, 3, 5];
// const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

// const people = ["ivan", "petro", "vasyl", "vlad", "ivanko"];

// console.log(people.sort());

// DOM (Document Object Model)

// Вибір елементів з html та маніпуляція ними

// const unOrderedList = document.querySelector("#menu");

// unOrderedList.style.fontSize = "2rem";

// unOrderedList.style.textTransform = "uppercase";

// const listItems = document.querySelector("li");

// listItems.style.color = "red";

// дз
//модуль 6 - завдання 2
