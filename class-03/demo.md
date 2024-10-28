# JavaScript Control Flow

a.k.a. *In What Order Shall We Do All of the Things?*

Scripts without any Decision Points aren't very useful, so we use conditionals to decide which parts of our script to run. All conditionals return a `true` or `false` and we use this value to make `if / else if / else` decisions.

## Evaluating Comparisons

1. syntax: `( <operand> <operator> <operand> )`
1. each operand can be a value, a variable, or an expression
1. comparisons will usually be wrapped in `()`
1. if comparing expressions using a logical operator:
   1. evaluate each expression to get `true` or `false`
   1. use the booleans to evaluate the logical expression

```javascript
1 === 1     -> true
1 == '1'    -> true
1 === '1'   -> false

let a = 10;
let b = 100;
a < b         -> true
a >= 50       -> false

(a + b === 110) -> (10 + 100 === 110)
                -> (110 === 110)
                -> true

(a + b > a - b) -> (110 > -90)
                -> true

(a === b && true) -> (false && true)
                  -> false

((a !== b) || (a < b)) -> (true || true)
                       -> true
```

## 'if...else' Statements

Evaluate a conditional and proceed based on whether the result is `true` or `false`. All `if` and `else if` conditions are checked, even if a match is found.

```javascript
if (condition === true) {
  //do this stuff
} else if (condition2 === true) {
  //do this other stuff
} else {
  //do this last stuff
}
```

## 'switch' Statements

Check a local variable called the *switch value* against *cases* that represent possible values for the variable. Do not continue checking cases once a matching case is found and executed.

```javascript
switch (faveColor) {

  case 'red':
    console.log('The user\'s favorite color is red');
    break;

  case 'green':
    console.log('The user\'s favorite color is green');
    break;

  default:
    console.log('The user has poor taste.');
    break;
}
```

## Type Coercion, Weak Typing, and Truthy/Falsy Values

JavaScript is called *weakly typed* because values can be changed from one data type to another. Languages that don't allow this are *strongly typed*. When performing loose equality checks, JS performs *type coercion* to see if values are equal if they are evaluated as having the same data type.

```javascript
let a = 5;
a = 'cookie'; //this is legit in JS

'10' > 1 -> true
```

| Truthy  | Falsy   |
| ------- | ------- |
| true    | false   |
| 1       | 0       |
| 'mom'   | ''      |
| 5 / 2   | '5' / 2 |
|         | let a;  |
| 'true'  |         |
| 'false' |         |
| '0'     |         |

Any existing value is considered truthy, so we can use a conditional to check whether something exists:

```javascript
let a = 10;
let obj = {};

if (a) {
  console.log('a exists');
}

if (a && obj) {
  console.log('they both exist');
}
```

## Short Circuit Values

Logical operators work from left -> right, and stop as soon as they get a result. When they stop, they return whatever value stopped them, so we can write logical expressions that return a value other than `true` or `false`. This can be used to set default values.

```javascript
let name1 = 'Dan';
let name2 = '';

let userName1 = (name1 || 'unknown'); -> userName = 'Dan'
let userName2 = (name2 || 'unknown'); -> userName2 = 'unknown'
```

## Loops

Check a condition. If `condition === true`, repeatedly execute a code block until the condition becomes `false`.

1. Keywords
   1. `break` - stop the loop and go to the next statement outside the loop
   1. `continue` - stop looping, re-check the loop condition, and keep looping if `condition === true`

## 'for' Loops

Use a `for` loop when you want to run a loop a certain number of times. Track how many times the loop has executed using a counter variable.

Order of operations:

1. set counter = <initial value>
1. check counter against <stop condition>. if this expression is true, continue
1. execute the loop statements once
1. increment counter
1. repeat steps 2 - 4 until <stop condition> is met

```javascript
for (let counter = <initial value>; <stop condition>; <increment>) {
  //do stuff
}

//console log the values in an array
let arr = ['a', 2, false, {}, 'I am last'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

## 'while' and 'do...while' Loops

Use a `while` loop when you don't know how many times you need to loop - maybe even zero times. Use a 'do...while' loop when you know you want to run the loop once, but don't know how many more times.

These loops will keep running until `condition === false`, so you must ensure that the condition will become false at some point. If you don't, you'll get an infinite loop.

```javascript
let myNumber = 3;
let userNumber = prompt('What number am I thinking of?');

while (userNumber != myNumber) {
  userNumber = prompt('What number am I thinking of?');
}

let i = 1;

do {
  console.log(i);
  i++;
} while (i < 1);
```

For loop:  

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```  

While and do while loops:  

```javascript
let index = 0;
while (index < 100) {
  console.log(index);
  index++;
}

do {
  console.log('The index is shrinking!!! Index: ' + index);
  index--;
} while (index > 0);
```
