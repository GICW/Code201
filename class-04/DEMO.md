# Class 04 Demo

## Functions

**Function declarations have the following parts:**

1. Function name: this is the name you use when you call the function
1. Parameter(s): local variable(s), to be used in the function statements. Parameters take the values that are passed as arguments in the function call, so they make the function more flexible
1. Statements: the stuff we want our function to do
1. Return statement: This is optional. It specifies what (if any) value the function should return for use elsewhere.

**Function calls have the following parts:**

1. the name of the function
1. parentheses: by adding the parens, we call the function
1. argument(s): these go inside the parens. They're values we want to use in the function. Some functions don't take any parameters, so the parens might just be empty

```javascript
//DECLARE a function without parameters
function someFunction() {
 console.log('I wish I had parameters');
}

//CALL the function.
someFunction();
//because we're not using any parameters,
//we don't need arguments in the function call.
//but that means the function always does the exact same thing.
//it will always log 'I wish I had parameters.'

//DECLARE a function with parameters
function multiply(num1, num2) {
 console.log(num1);
 return num1 * num2;
}

//CALL the function
multiply(2, 3);
//The values in the parentheses are the arguments for this function call.
//When the function executes, num1 & num2 will take the values of these arguments.
//This call will log 2 in the browser console and return 6

//if we want to save the result to a variable, we can do
let result1 = multiply(2, 3);
let result2 = multiply(4, 5);
//now result1 = 6 - the return value of the first function call
//and result2 = 20 - the return value of the second call

//if the function had no return statement, result1 and result2 would be undefined
```

## Returning Multiple Values

A function will break as soon as it hits a `return` statement, so any function call should only be expected to perform one `return`. To return multiple values, package them in an array or object and return that.

```javascript
function circleProps(radius) {
 let area = Math.PI * radius * radius;
 let circumference = 2 * Math.PI * radius;
 let props = [area, circumference];

 return props;
}

let circle3 = circleProps(3);

//or simply
function circleProps(radius) {
 let area = Math.PI * radius * radius;
 let circumference = 2 * Math.PI * radius;

 return [area, circumference];
}
```

## Anonymous Functions & Function Expressions

A function placed where an expression would normally be is called an *anonymous function*. No function name is included in a function expression. Declaring a function this way doesn't affect the syntax of the function call, though the function call cannot appear before the declaration. This is a common pattern for *callback functions* and *event handlers*.

```javascript
let circleProps = function(radius) {
 let area = Math.PI * radius * radius;
 let circumference = 2 * Math.PI * radius;

 return [area, circumference];
}

let circle3 = circleProps(3);

//event handler callback using an anonymous function
document.getElementById('login-button')
    .addEventListener('click', function () {
     console.log('the user logged in.');
    })
```

## Scope

The availability of a variable depends on where it is declared. Where it can be seen and used is known as the variable's *scope*. JS functions create their own scope, so variables declared within functions are only available within their containing function.

1. global variables (declared outside of any function) are available anywhere
1. local variables (declared inside a function) are only available inside the function.

```javascript
let globalVariable = 'universal';

function scoper(param) {
 let localVariable = 'I like my privacy.';

 console.log('inside the function we can see param = ' + param);
 console.log('we can also see localVariable = ' + localVariable);
 console.log('and we can see globalVariable = ' + globalVariable);

 for (let i = 0; i < 3; i++) {
  console.log('the value of "i" in the loop is ' + i);
 }

 console.log('can we see "i" outside the loop? ' + i);
}

scoper('argument');

console.log('globally we can see globalVariable: ' + globalVariable);
console.log('but not localVariable: ' + localVariable);
console.log('or param: ' + param);
```

## Git forking and pair programming

In preparation

1. Pick a student at random and prepare to fork their "About Me" project
   - Pick a fairly common thing to add or fix, such as wrapping part of the logic in a function or doing some additional logging.
3. Walk through the [lab requirements](https://codefellows.github.io/code-201-guide/curriculum/class-04/lab/) with class, preparing to follow the exact procedure.
4. Perform a demonstration with a member of the instructional team (or a student) to model "perfect" pair programming behavior using GitFlow.

Note, as the navigator, use standard commands with your driver (do not tell them "open a curly brace" ...) so that students can both translate words to code, and also see the proper efficiency in coding as a dual mind.

For Example:

- I want to take the variables result1 and result2 and multiply them together
- Let's declare a variable result3 and assign it the function call of multiply.
- We need to pass result1 and result2 as its parameters
