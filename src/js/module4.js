// // Change code below this line
// function findMatches(argsArray, ...args) {
//   const matches = []; // Don't change this line
//   for (let i = 0; i < argsArray.length; i += 1) {
//     if (argsArray.includes(args[i])) {
//       matches.push(args[i]);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 9, 5));
// console.log(findMatches([1, 2, 3, 4, 5], 0, 8, 9, 7));



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));

// Колбэк-функция
// function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);






// task 2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback (pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));



// task 3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//    console.log('Eating pizza ${pizzaName}');     
// });




// task 4





// task 16
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres())


// task 19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !==0);


// task 20
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);


// task 21
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// task 22
// Change code below this line
// const getUsersWithEyeColor = (users, color) => {
 
// return usersEyeColor = users.filter((user) => 
// user.eyeColor === color);

// };
// // Change code above this line

// task 26

// // Change code below this line
// const getActiveUsers = (users) => {
//   return activeUsers = users.filter(user => user.isActive === true);
// };
// // Change code above this line


// task 27
// // Change code below this line
// const getInactiveUsers = (users) => {
//   return notActiveUsers = users.filter( user => user.isActive === false) ;
// };
// // Change code above this line


// task 28
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);


// task 29
// Change code below this line
// const getUserWithEmail = (users, email) => {
//   return userEmail = users.find(user => user.email === email); 
// };
// // Change code above this line


//  task 30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(num => num % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(num => num % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(num => num % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(num => num % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(num => num % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(num => num % 2 !== 0);


// task 31
// // Change code below this line
// const isEveryUserActive = (users) => {
//   return activeUsers = users.every(user => user.isActive === true); 
// };
// Change code above this line


// task 32
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(num => num % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(num => num % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(num => num % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(num => num % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(num => num % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(num => num % 2 !== 0);


// task 33
// // Change code below this line
// const isAnyUserActive = users => {
//   return activeUsers = users.some(user => user.isActive); 
// };
// // Change code above this line


// task 34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((playersNum, num) => {return playersNum + num}, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;


// task 35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
// return total + (player.playtime / player.gamesPlayed);
// }, 0);


// task 36
// // Change code below this line
// const calculateTotalBalance = users => {
//   const allBalance = users.reduce((total, user) => {
//   return total += user.balance;
//   }, 0);
//   return allBalance;
// };
// // Change code above this line

// task 37
// // Change code below this line
// const getTotalFriendCount = users => {
//   const allFriends = users.reduce((total, user) => {
//   return total + user.friends.length;
//   }, 0);
//   return allFriends;
// };
// // Change code above this line

// task 38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// task 39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);


// task 40
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));


// task 41
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort(
// (firstAuthor,secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author)
// );

// const sortedByReversedAuthorName = [...books].sort(
// (firstAuthor,secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author)
// );

// const sortedByAscendingRating = [...books].sort(
// (firstRating,secondRating) => firstRating.rating - secondRating.rating
// );

// const sortedByDescentingRating = [...books].sort(
// (firstRating,secondRating) => secondRating.rating - firstRating.rating
// );
// console.log('sortedByAuthorName:', sortedByAuthorName);
// console.log('sortedByReversedAuthorName', sortedByReversedAuthorName);
// console.log('sortedByAscendingRating:', sortedByAscendingRating);
// console.log('sortedByDescentingRating:', sortedByDescentingRating)



// task 42
// // Change code below this line
// const sortByAscendingBalance = users => {
//   return usersArray = [...users].sort((balanceFirst, balanceSecond) => balanceFirst.balance - balanceSecond.balance);
// };
// // Change code above this line


// task 43
// // Change code below this line
// const sortByDescendingFriendCount = users => {
// return usersArrayLow = [...users].sort((firstFriend, secondFriend) => secondFriend.friends.length - firstFriend.friends.length); 
// };
// // Change code above this line


// task 44
// // Change code below this line
// const sortByName = users => {
//   return usersNameSort = [...users].sort((firstNameUser, secondNameUser) => 
//  firstNameUser.name.localeCompare(secondNameUser.name)); 
// };
// // Change code above this line


// task 45
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
// .filter(book => book.rating >= MIN_BOOK_RATING)
// .map(book => book.author)
// .sort((firstNameAuthor, secondNameAuthor) => firstNameAuthor.localeCompare(secondNameAuthor));


// task 46
// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//  return usersNameArray = [...users].sort((firstFriends, secondFriends) => 
//  firstFriends.friends.length - secondFriends.friends.length)
//   .map(user => user.name);  
// };
// // Change code above this line


// task 47
// // Change code below this line
// const getSortedFriends = users => {
//   return usersNameArray = [...users]
//   .flatMap (user => user.friends)
//    .filter((user, index, array) => array.indexOf(user) === index)
   
//    .sort((firstName, secondName) => firstName.localeCompare(secondName));
// };
// // Change code above this line


// task 48
// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//    return ownBalance = [...users].filter(user => user.gender === gender).reduce((total, user) => {return total += user.balance}, 0);
// };
// // Change code above this line
