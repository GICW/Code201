# Concept Review

Assume you are in a pair programming session, and are the navigator. Your driver for this exercise will be a chatbot of your choice. For each of the lines of code below, provide the (nerdy) english instructions that you would describe to the chatbot so that it will return the code shown.

For example, if you wanted the chatbot to return this code:

```javascript
let number = parseInt('2');
```

You would say:
> Declare a variable called number and assign it the return value from running the parseInt function with the argument '2'

## Javascript Fundamentals

```javascript
let name = 'Hedy Lamarr';
```

```javascript
let numArray = new Array(10).fill('');
```

```javascript
let nums = [];

for( let i = 1; i <= 100; i++ ) {
  nums.push(i);
}
```

```javascript
console.log(nums.length);
```

```javascript
console.log(nums[3]);
```

## CSS Selectors

The goal for these examples is to have the chatbot provide you with the correct CSS declarations.

For example, if you wanted the chatbot to return this code:

```css
div {
  /* CSS rules */
}
```

You would say:
> Create a CSS declaration that will target any div element.

If you are unsure of what these selectors would target, refer to the following reference.

Ref: https://teamtreehouse.com/library/css-selector-reference

```css
div.car {
  /* CSS Rules */
}
```

```css
.car {
  /* CSS Rules */
}
```

```css
#main-content {
  /* CSS Rules */
}
```

```css
div > span {
  /* CSS Rules */
}
```

```css
div span {
  /* CSS Rules */
}
```

```css
div + span {
  /* CSS Rules */
}
```

```css
div ~ span {
  /* CSS Rules */
}
```

```css
input[type=text] {
  /* CSS Rules */
}
```

```css
div:hover {
  /* CSS Rules */
}
```
