'use strict';
let userPoints = 0;

console.log('Hello world!');

alert('Welcome to my guessing game!');

let user = prompt('what is your name?');
//user could be: -null, sting, empty string

//if user is empty string or null, keep aksing them for their name
// while (user === ''|| user === null) {
//shorter version of the expression. it uses type corercion to our advantage}

while (!user) {
  user = prompt('what is your name? Really, we need it. ')
}

// this is the not equals comparison operator
if (user !== 'Qilin'){
  alert('too bad ou are not qilin');
}

alert('Hi' + user + '!I am so glad  you decided to come to my site.');

let answer = prompt('Is qilin\'s favorite food popcorn.', 'type yes or no').toLowerCase();
console.log(answer);

let foodsILike = ['tatertots', 'chips', 'popcorn', 'kale'];
for ( let i = 0; i < foodsILike.length; i++) {
  console.log(foodsILike[i]);
}

//different array methods:
//push adds an element to the end of the array
foodsILike.push('swiss chard');

console.log(foodsILike);

//pop removes an element from the end of the array
let veggie = foodsILike.pop();
console.log(foodsILike);

//unshift adds element to the front of the array
foodsILike.unshift('spinach');
console.log(foodsILike);

//shift removes element from the front of the array
foodsILike.shift();
console.log(foodsILike);

//indexOf tells you the index of an element in the array; returns -1 if not found
let index = foodsILike.indexOf('popcorn');
console.log(index);

if (answer === 'yes' || answer === 'y') {
  //if it is correct, give them a point
  userPoints++;
} else {
  //if it is not corrrect,tell them to try again
  alert('Wrong!!!! TRY AGAIN');
}

alert('you have' + userPoints + 'points.');