# Lecture Notes

<!-- NOTE TO INSTRUCTOR: If you make any changes to the lecture, make matching changes into REAMDE.md -->

## Online Tools

- This is a good opportunity to expose students to helpful online tools, if not already exposed
  - [Code Pen](https://codepen.io/pen/)
  - [repl.it](https://repl.it/languages/javascript)

## Comparison Operators

Compare two values and get a result in the form of `true` or `false`  

| Operator | Name | Evaluates |
| -------- | ---- | --------- |
| a == b | loose equal to | equality of **values** a & b |
| a === b | strict equal to | equality of **values and types** a & b |
| a != b | not equal to | inequality of **values** a & b |
| a !== b | strict not equal to | inequality of **values and types** a & b |
| a > b | greater than | is value a greater than value b |
| a < b | less than | is value a less than value b |
| a >= b | greater than or equal to | is value a greater than OR equal to value b |
| a <= b | less than or equal to | is value a less than OR equal to value b |

## Logical Operators

Compare the results of multiple comparison operators and (usually) get a final `true` or `false` result

| Operator | Name | Evaluates |
| -------- | ---- | --------- |
| a && b   | and  | are a and b *both* true |
| a &#124;&#124; b   | or   | is a *or* b true |
| !a       | not  | inverts the boolean value of a |

## if...else

You can use the comparison operators in an "if" statement (or if...else) to determine what to do when a situation is met.

```js
if(condition){
// do something
}
```

or

```js
if(condition){
// do something
} else{

}
```

The else will always run if the condition is not met.

## Control Flow (loops)

What are loops? Why do we need them? Introduce the concepts of loops and discuss the importance of them.

A great way to introduce the concepts of loops is to talk about how something needs to repeated over and over again, such as mixing ingredients in a recipe.

Walk through with the students how "they know they are done" with the prompt.

In programming, we can create loops a few different ways.

### for loops

`for` loops are primarily used when iterating over arrays. A for loop runs "for the number of times specified" is the basic summary of a for loop. The syntax is as follows:

```javascript
  for(starting val; condition; increment) {
    do something for a finite number of times
  }
```

The secret to the for loops is that the starting value will always be evaluated at the beginning of every iteration. This means that the "condition" gets evaluated before every run to ensure it is still met. Indicate to students that once that "bottom curly brace" of the for loop is hit, the "increment" (or action) will execute.

### while loops

```javascript
  while(condition) {
    do something until the condition is false
  }
```

### do...while loops

do...while loops can guarantee an iteration occurs at least once. the "do" code will run initially before the "while" condition gets evaluated.

```javascript
  do {
    do this at least once and until the condition is false
  } while (condition)
```

## Box Model

Review the basics of the box model

1. Margin
1. Padding
1. Border

Layouts using CSS with the Box Model
