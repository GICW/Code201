## JavaScript Objects

 Object literals. The key to this is to not allow the students to use constructors at all today. Make them build, by hand, a bunch of object literals to become familiar with the syntax and structure and demonstrate/encourage practicing how to access and modify properties/methods in the JS console. We'll transition to constructor functions in the following lab. Reiterate that the goal with JS objects is to model real-life entities that have characteristics (properties) and behaviors (methods). It also helps to tie to grammar, and describe properties as nouns, the values as adjectives, and methods as verbs.

In JavaScript, an object is an entity that contains properties that describe state and behavior of the object. Properties that describe behavior are also called methods.  These "objects" are intended to mimic real-world objects such as a car, person, cat, house, etc...

JavaScript is what we call an object-based language. Just about everything in JavaScript is an object. We create objects directly through a template (we will get to this later), and not through classes, like other languages. Classes are still used in JavaScript but are not touched on in this course. 

There are two ways for creating an object in JavaScript that we will cover in 201:

1. Object literals
1. Instantiating objects with the new keyword through a constructor function

We are going to focus on object literals today and will talk about constructor functions tomorrow. If you are comfortable enough with instantiating them directly, feel free to show them that as well. 

### Object Literals

Object literals are the simplest way to create a JS object. The syntax for it is mostly based off of key/value pairs. This means that when you create your object, you define the properties (keys) of an object, you must also give it a value.

Here is an example of what a JS object looks like:

```js
const person = {
	name: "Grace Hopper",
	age: 85,
	computerScientist: true,
    education: [Vassar College, Yale University]
};
```

Note a few things about the object:

1. We create objects the same way we create variables. We start out with the declaration of the variable followed by the data we are setting the value too. 
1. The full object value is encapsulated with curly braces `{}`
1. Each set of data in the object is known as a property. This is showcased through a key/value pair. The "key" is the name of the property, and the "value" is the value stored in the property. For example, the `name` property is the key, and the value of `"Grace Hopper"` is the value. This means that within the object, the "name" of the person is "Grace Hopper". The same thing is true for the key `age`. The key is `age` the value is `85`. 
1. After every property, if there is another one to follow, we end with a comma `,`.
1. Properties can store any valid javascript value, even other objects.  


```js
console.log(person.name) // Grace Hopper
console.log(person.age) // 85
console.log(person.education) // Vassar College, Yale University
```

#### Object Methods

Methods in an object are the behaviors/actions of an object. For example, our `person` object should be able to actually "do" things, not just hold properties. Our `person` should be able to...walk. This means we should give our person this capability. We do this through what we call methods. At first sight, methods look like properties. That is because they are, method is the name we give to "properties" that have the values of functions. Here is an example, using our `person` from above:

```js
const person = {
	name: "Grace Hopper",
	age: 85,
	computerScientist: true,
    education: [Vassar College, Yale University],
    walk: function() {
  	console.log('I am walking....");
  }
 };
```

The first thing we can notice about or newly added method is that it is an anonymous function. This means that there is no "name" to the function, just simply an associated property. 

If we wanted to "call" this method within our object, we would simply call it by first specifying the object, then the name of the method. 

```js
person.walk(); // output: I am walking....
```

#### Contextual 'this'

The term `this` is a bit tricky to understand at first. The easiest way to explain what `this` is, is by explaining to them that the `this` is directly talking about whatever object is currently being manipulated. For example, if we were to modify the current `person.walk()` method to output the name of the current person, we would have to use the contextual `this`. 


```js
const person = {
	name: "Grace Hopper",
	age: 85,
	computerScientist: true,
    education: [Vassar College, Yale University],
    walk: function() {
  	console.log( this.name + ' am walking....");
  }
 };
```

What is happening here is when we call `person.walk`, it is going to take the current object that is in the context and currently being called on, and use that piece of data when outputting the name. 

If we were to create 2 different object literals:

```js
const person1 = {
	name: "Grace Hopper",
	age: 85,
	computerScientist: true,
    education: [Vassar College, Yale University],
    walk: function() {
  	console.log( this.name + ' is walking....");
  }
 };

const person2 = {
	name: "Sally Joe",
	age: 30,
	computerScientist: true,
    education: [Harvard University],
    walk: function() {
  	console.log( this.name + ' is walking....");
  }
 };

person1.walk() // output: Grace Hopper is walking
person2.walk() // output: Sally Joe is walking
```


#### Nested Object 

In addition to having an object with properties and methods, we can also have "nested" objects within a JS object. Here is an example:

```js
const person = {
	name: "Grace Hopper",
	age: 85,
	computerScientist: true,
    education: [Vassar College, Yale University],
    walk: function() {
  	console.log('I am walking....");
  },
   birthplace: {
       date: December 9 1906,
       location: New York City, USA
   }
 };

```

Notice the new nested object of `birthplace` in our object. As you can see, we can "create" objects easily by explicitly stating the methods and properties from within them. 

#### Adding new props

When adding NEW property methods, we will use the `=` instead of the `.` because we are assigning a value to the object. Example

```js
person.serviceBranch = 'United States Navy';
```

As a result, `person` now has a newly added property named `serviceBranch` with a value of `United States Navy`.

### Dot vs Bracket Notation

When accessing the properties of the object, there are two different ways to do so, dot notation and bracket notation.

Dot notation is the more common and popular approach to accessing the properties of an object. Dot notation is specifying the object directly and calling the name of the property through a dot `.`. The reason this is preferred over bracket is because it is easier to read and less verbose. 

Example: `foo.bar` <-- foo is the name of the object; bar is the name of the property. 

Bracket notation is when we access a property on an object through the use of brackets `[]`. Specifically, accessing the name of the property attached to the object. Using the same example as above, we would access the `bar` property of the `foo` object by writing `foo['bar']`

[HERE](https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781) is an article that explains the highlights of the two notations.  

## The DOM

"The DOM" (Document Object Model) is where the HTML and CSS that we have been learning about this whole time come together to create a very powerful document that we use in our browsers. Within our browser, when looking at a webpage, we see HTML and CSS come together to create a structure that we can in turn see headings, images, links etc....

Browsers represent the html document as a JS object. This means that we can access individual components of "The DOM" the same way we would access individual components of a JS object. 

Here is a quick exercise to prove this point: 

1. type `document` in the console within your browser
1. find `document.body`
1. actually type in `document.body`
1. change the document.body.textContext = 'to something else'
1. look at all the options on the `document.` dot notation.

Within the `document` object, we have a method in there called `getElementById`. This allows us to "get a specific element within the HTML by specifying the id"

One thing to note **we can only add one thing at a time**.

If we wanted to add a `<p>` tag to our page, inside of say, an `<article>`, we can. The article that we want to add the `p` tag into though, **must have a unique id attached to it**. 

```HTML
<article id="parentElement">
</article>
```

Here is the JS code to add a `p` tag to our `article`

```javascript
const parent = document.getElementById('parentElement');  
const child = document.createElement('p');  
child.textContent = 'Some words we want in our p element';  
parent.appendChild(child);
```

```HTML
<div id="parent">
  <p>Some words we want in our p element</p>
</div>
```

There is a lot of potential for DOM manipulation and JS objects. We could potentially make a `render` method on one of the JS objects that can render these new HTML tags as a list to our page when called:

```js
render: function(){
  const parent = document.getElementById('parentElement');
    for(let i=0; i < myArray.length; i++){
      const newTag = document.createElement('li');
      newTag.textContent = myArray[i];
      parent.appendChild(newTag);
    }
}
```


## Domain Modeling

A great resource as an introductory to Domain Modeling is found [HERE](https://www.scaledagileframework.com/domain-modeling/).

Domain Modeling is a way to describe real world entities and their relationships between them. We can take a problem domain and extract from them system requirements by determining what entities are involved and the relationships required. The system architect is usually the one responsible for domain modeling and emulates it through drawings that highlight the "verbs" of each action that takes place within the system and how it links in the overall data flow. Domain modeling allows stakeholders and development teams to better understand the needs of the application and what components/entities are required. 

It ultimately comes down to how the problem is organized and defined. It is important to stress that there is no substitute for good planning, and that if a problem seems too big to effectively define, then it needs to be broken down more. There are two articles on this subject, [one by a former Code Fellows instructor (Ryan Sobol)](https://github.com/codefellows/domain_modeling#domain-modeling) and another by [a tech education entrepreneur](https://simpleprogrammer.com/2013/07/15/understanding-the-problem-domain-is-the-hardest-part-of-programming/).
