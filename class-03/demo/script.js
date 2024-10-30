// For loops: repeats until specified condition evaluates to false. 
// statement 1: executed one time, before the execution of the code block
//2. defines the conditions for executing the code block
//3. executed everytime after the code block has been executed


for (statement 1; statement 2; statement 3){
  //code block to be executed
}

//while loop: executes its statements as long as a specified condition evaluates to true

while(condition){
  //statement to run
}

//do...while: repeats until a specified condition evaluates to false

do{
  statement 
} while (condition)


  //Comparison Operators: compare two values and get a result in the form of true or false
  //a == b , evaulates values a & b
  // a === b
  // a != b , a !==b
  //a > b, a < b, a >= b, a <= b 
  
  //Logical operator: compare the results of mutiple comparison operators and get a true or false result
 // a && b (and) , evaluates whether a and b are both true
 // a || b ,evaluates whether a or b is true
 // !a , not, inverts the boolean value of a , a is just a, with ! , not a 

 //if..else
 if (condition {
  //doing something
 })

 or 

 if (condition){
  //do something
 } else{
  //the other thing
 }

 for (starting val; condition; increment){
  //do something for a finite number of times 
 }

 //Javascript control flow
 //aka what order shall we do these things?


 //evaluating comparisons
 //1. syntax: (<operand><operator><operand>)
 //2. each operand can be a value, a variable, or an expression 
 //3. comparsions will usually be wrapped in ()
 // 4. if comparing expressions using a logical operator:
 //i. evaluate each expression to get true or false 
 //ii. use the booleans to evaluate the logical expression

1 === 1 T


 //(a === b && true) -> (false && true) -> false

 //switch statement: 
 switch (favColor) {
  case 'red':
    console.log(the user\'s favorite color is red');
    break;
  case 'blue'
  //
  default: console.log('the user has no fav color')
 }

 // type coercion, weak typing, and truth/falsy values

 let a = 5;
 a = 'cookie'; //thi si  legit in js

 '10' > 1 

 truhy : true
 1 
'mom'
5/2
'true'

 falsy: false
 0
 ''
'5'/2

let a = 10;
let obj = {};

if (a) {
  console.log('exists');
}

if (a && obj){
  console.log('they both exists');
}

//short circuit values
let name1 = 'Dan';
let name2 = '';

let username1 = (name1 || 'unknown') -> username = 'Dan'
let username2 = (name2 || 'unknown') -> username ='unknown'


//break - stop the loop and go to the next statement outside the loop 
// continue - stop looping, re-check the loop condition, and keep looping if condition ===true

//'for' loop
//1. set counter = 
//2. check counter aganist. if this expression is true, continue
//3. execute the loop statment once
//4. increment counter
//5. repeat steps 2 -4 until is met

//for (let counter = <initial value>; <stop condition>; <increment>) { do stuff}

let arr = ['a', 2, false, {}, 'I am last'];//1. initialize i as the counter, starting from 0 
for (let i = 0; i < arr.length; i++){//step 2. check if i is less than arr.length (stop the condition) //arr lenght : 5 
  console.log(arr[i]);
}//step 3. execute the loop statements, which logs the current array element  'console.log(arr[i]) ' 1. 'a' -> a 2. 
//step 4: increment i by 1 -> 0 -> 1, 1->2.. 4> 5
//repeat step 2- 4 until i reaches arr.length : 5
[0, 1, 2, 3, 4]


//while and do..while loops
let myNumber = 3;
let userNumber = prompt('What number am i thinking of?');

while (userNumber != myNumber) {
  userNumber = prompt('What number am i thinking of?'); //4
}


let i = 1;

do {
  console.log(i);
  i++;
}while (i <1);//3, 3<1 , false, run the first iternation but will not run again 

//for loop
for (let i = 0; i < 10; i++){
  //execute code
}

//while and do while loops:
let index = 0;
while(index < 100) {
  console.log(index);
  index++;
}

do {
  console.log('The index is shrinking!! Index : ' + index);
  index --;
} while (index > 0);