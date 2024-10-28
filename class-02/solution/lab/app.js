'use strict';

/**
 * This is just a suggestion for successful flow control for the guessing game.
 */

let username = prompt('What is your name?');

while (!username) {
  username = prompt('I require to a name to begin.  To skip this game type: `STOP` and click `OK`');
}

if (username !== 'STOP') {
  alert('Welcome ' + username + ', lets play a guessing game.');

  let questionOne = 'Am I an instructor?';
  let responseOne = prompt(questionOne).toLowerCase();

  if (responseOne === 'yes' || responseOne === 'y') {
    // console.log('The user is correct', response);
    alert('You are correct');
  } else {
    // console.log('The user is incorrect', response);
    alert('Sorry, that\'s incorrect');
  }

  let questionTwo = 'Am I a human being?';
  let responseTwo = prompt(questionTwo).toLowerCase();

  if (responseTwo === 'yes' || responseTwo === 'y') {
    // console.log('The user is correct', response);
    alert('You are correct');
  } else {
    // console.log('The user is incorrect', response);
    alert('Sorry, that\'s incorrect');
  }


  let questionThree = 'Do I live on the planet Earth?';
  let responseThree = prompt(questionThree).toLowerCase();

  if (responseThree === 'yes' || responseThree === 'y') {
    // console.log('The user is correct', response);
    alert('You are correct');
  } else {
    // console.log('The user is incorrect', response);
    alert('Sorry, that\'s incorrect');
  }

  let questionFour = 'Is the Earth flat?';
  let responseFour = prompt(questionFour).toLowerCase();

  if (responseFour === 'no' || responseFour === 'n') {
    // console.log('The user is correct', response);
    alert('You are correct');
  } else {
    // console.log('The user is incorrect', response);
    alert('Sorry, that\'s incorrect');
  }

  let questionFive = 'Do pigs fly?';
  let responseFive = prompt(questionFive).toLowerCase();

  if (responseFive === 'no' || responseFive === 'n') {
    // console.log('The user is correct', response);
    alert('You are correct');
  } else {
    // console.log('The user is incorrect', response);
    alert('Sorry, that\'s incorrect');
  }

  alert('Thanks for playing ' + username);
} else {
  alert('Refresh the page to play!');
}
