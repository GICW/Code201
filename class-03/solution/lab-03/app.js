'use strict';

/**
 * This is just a suggestion for successful flow control for the guessing game.
 */

let username = prompt('What is your name?');
let userscore = 0;

while (!username) {
  username = prompt('I require to a name to begin.  To skip this game type: `STOP` and click `OK`');
}

if (username !== 'STOP') {
  alert('Welcome ' + username + ', lets play a guessing game.');

  let question = 'Am I an instructor?';
  let response = prompt(question).toLowerCase();

  if (response == 'yes' || response == 'y') {
    alert('You are correct');
    userscore += 1;
  } else {
    alert('Sorry, that\'s incorrct');
  }

  question = 'Am I a human being?';
  response = prompt(question).toLowerCase();

  if (response == 'yes' || response == 'y') {
    alert('You are correct');
    userscore += 1;
  } else {
    alert('Sorry, that\'s incorrct');
  }


  question = 'Do I live on the planet Earth?';
  response = prompt(question).toLowerCase();

  if (response == 'yes' || response == 'y') {
    alert('You are correct');
    userscore += 1;
  } else {
    alert('Sorry, that\'s incorrct');
  }

  question = 'Is the Earth flat?';
  response = prompt(question).toLowerCase();

  if (response == 'no' || response == 'n') {
    alert('You are correct');
    userscore += 1;
  } else {
    alert('Sorry, that\'s incorrct');
  }

  question = 'Do pigs fly?';
  response = prompt(question).toLowerCase();

  if (response == 'no' || response == 'n') {
    alert('You are correct');
    userscore += 1;
  } else {
    alert('Sorry, that\'s incorrct');
  }

  alert('Thanks for playing ' + username);
} else {
  alert('Refresh the page to play!');
}

let guessANumber = 'Guess a number between one and 100';
let attempts = 4;
let answer = 57;
let response = null;

while (response !== answer) {

  if (!attempts) {
    alert('you are out of attempts');
    break;
  }

  response = parseInt(prompt(guessANumber));
  attempts -= 1;
  if (response === answer) {
    alert('You guessed it!');
    userscore += 1;
  }

  if (response < answer) {
    alert('You are too low, guess again');
  }

  if (response > answer) {
    alert('You are too high, guess again');
  }

}

let guessAnOption = 'Name a Programming Language taught at Code Fellows';
let answers = ['java', 'javascript', 'c#', 'c-sharp', 'c sharp', 'python'];
response = null;
attempts = 6;

hasAttempts: while (attempts) {

  response = prompt(guessAnOption + '. You have ' + attempts + ' left.').toLowerCase();
  attempts -= 1;

  for (let i = 0; i < answers.length; i++) {
    if (response === answers[i]) {
      alert('That is correct. Thanks for playing!');
      userscore += 1;
      break hasAttempts;
    }
  }

  alert('Sorry that is incorrect.');
}

if (!attempts) {
  alert('Uh oh, you are out of attempts.  Please refresh the page to play again');
}

alert('Nice job, your score is ' + userscore);
