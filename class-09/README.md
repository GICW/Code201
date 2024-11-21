# HTML Forms and JS Events

## Overview

In this class you will be learn JavaScript Events and how they can bring interactivity to your application. You will also learn how to construct HTML forms.

## Class Outline

- Code review of previous class lab assignment
- Code demo
  - Events and event listeners
  - HTML forms
- Lab preview and prep

## Learning Objectives

### Students will be able to

#### Describe and Define

- JavaScript's `addEventListener()`.
- Anonymous functions and callbacks.
- Syntax and operations of an HTML `<form>`.
- Form structure, using semantic tags, including `<input>`, `<label>`, and `<fieldset>`.

#### Execute

- Code event listeners and handlers to capture events on the page.
- Collect form input and use it to instantiate new objects.
- Add a new row to dynamic data table(s) by storing, computing, and rendering data from the HTML form.
- Successfully pair-program with a fellow student and manage the collaborative and version control aspects of working with Git (from the command line) and GitHub (in the browser).

## Notes

1. What is a JavaScript Event?

1. What 2 arguments do we need to pass into the `addEventListener()` method for it to run correctly?

1. What is a callback function?

1. An HTML form is used to collect `________` input.

1. An `<input>` element can be displayed in many ways, depending on the `_______` attribute.

1. What does `event.preventDefault()` do?


### JavaScript Events

- **Why**
  - Events provide a dynamic interface to a webpage.
- **What**
  - Events are actions or occurances that happen to HTML elements. JavaScript code can then be written to react to these events.
- **How**
  - Start with a basic demonstration of an event and event listeners on a `<div>` element in CodePen or VSCode.
  - Break down the steps with event handling:
    - Grab element to listen to.
    - Add `addEventListener()` method and pass in the 2 arguments of the event type and callback/event handler function.
    - Build out the event handler function. You can demonstrate this as an inline anonymous function or a separately defined callback function.

### HTML forms

- **Why**
  - This is a great way for us to gather user info and input.
- **What**
  - An HTML form represents a document section containing interactive controls for submitting information.
- **How**
  - Demonstrate a form build out using the following semantic elements:
    - `<form>`
    - `<fieldset>`
    - `<legend>`
    - `<label>`
    - `<input>`
  - Add event handling to the form button.
  - Demonstrate grabbing form data on submit with an event handler function.
