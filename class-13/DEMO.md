# Demo

## Local Storage in the Console

To introduce local storage, start by opening up your browser developer tools and navigate to where local storage is stored. If you are using Chrome, it is in the "application" tab. If you are using Edge, it is in the "Storage" tab.

### Set Item

You will see "local storage" as an option on the left hand side. This is where all of our data will store. To practice, go back to your console in your browser and enter the following:

`localStorage.setItem('name', 'Jane Smith');`

The syntax for `setItem()` require 2 arguments that you must provide. These values will in turn save directly to local storage with the key and the value as the data that you sent in.

> `setItem(key, value)`  

### Get Item

Navigate to where your local storage is stored and you should see a new entry, with the 'name' as the key, and 'Jane Smith' as the value.

To retrieve an item, go back to your console and enter the following:

`localStorage.getItem('name');`

You will receive the value of 'Jane Smith' back. `getItem()` requires just the argument of key.

> `getItem(key)`

Remember that the key and the value must be a string, so make sure you are only entering strings in to the function arguments.

### Update an Item

Because local storage is driven by key/value pairs. That means we can easily update a specific value as long as we have a key.

Given the example from above, if i wanted to change the 'name' value to "William Shakespeare", all I would have to do is run the following code in our console:

`localStorage.setItem('name', 'William Shakespeare');`

Take a look in local storage and you will find that the name has been updated from 'Jane Smith' to 'William Shakespeare'

### Remove Item

To remove a specific entry in local storage, all you have to do is call the `removeItem()` function. The only argument you sending it is the key of the data that you wish to remove.

> `removeItem(key)`

Navigate to your console in your browser and enter

`localStorage.removeItem('name')`;

You can confirm that your 'name' has been removed by navigating back to your local storage and verifying that the 'name' key is now removed, along with it's value.

### Clear Local Storage

To clear all of the values in local storage, it is a simple
`localStorage.clear()` call. This function does not take any arguments and it will wipe your local storage clean of any data.

Go to your console, and add multiple entries into your localStorage

 `setItem('name', 'Jack Shepard')`  
 `setItem('age', '35')`  
 `setItem('color', 'red')`

One you have multiple items in your local storage, run a

`localStorage.clear()`

You will notice that your local storage is now completely empty. You can also verify that it is empty by running the command

`localStorage` by itself in the console. You will receive the length of items in your local storage. You should see this value to 0.
  
## Start Code : Local Storage

1. This contains a light/dark mode, an accordian, and a textarea element. The state of the app will be saved as a global object literal.
1. The whole point of this app is to save the state of site settings in local storage, so that they persist on page refresh.
1. This is a great opportunity to introduce the concept of state to the class.

Our goal with this application is to save the state of site settings. We want the data to persist through page refreshes and closing of the browser.


### Saving to Local Storage

```js
// save to local storage
function saveSettings() {
  let stringify = JSON.stringify(settings);
  localStorage.setItem("settings", stringify);
  // console.log(stringify); 
}
```


### Load From Local Storage

```js
// load from local storage
function loadSettings() {
  let getSettings = localStorage.getItem("settings");
  if (getSettings) {
    console.log(getSettings); //
    settings = JSON.parse(getSettings);
    console.log(settings); //
  }
}
```


### Making Dark Mode/Light Mode Work With Local Storage

Add saveSettings() call to the bottom of enterDarkMode and enterLightMode functions.

```js
function enterDarkMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("darkButton");
  body.classList.remove("light");
  welcome.classList.remove("light");
  body.classList.add("dark");
  welcome.classList.add("dark");
  button.setAttribute("checked", "checked");

  // local storage
  settings.darkMode = true;
  saveSettings();  // <------ add this line
}

function enterLightMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("lightButton");
  body.classList.remove("dark");
  welcome.classList.remove("dark");
  body.classList.add("light");
  welcome.classList.add("light");
  button.setAttribute("checked", "checked");

  // local storage
  settings.darkMode = false;
  saveSettings();  // <------ add this line
}
```

### Have Settings Load from Local Storage on Page Load
Define a page load function that loads the settings object from local storage.

```js
// use settings from local storage on page load
function pageLoad() {
  let savedSettings = localStorage.getItem("settings");
  if (!savedSettings) {
    return;
  }
  settings = JSON.parse(savedSettings);
  if (settings.darkMode) {
    enterDarkMode();
  } else {
    enterLightMode();
  }
  if (settings.open !== null) {
    details[settings.open].setAttribute("open", "open")
  }
  commentBox.value = settings.comment;
}
```

Don't forget to invoke the function at the bottom of app.js!

```js
// loads page with saved settings
pageLoad();
```

## Stretch Goals:
If time permits, you can add the local storage functionality to the current open details and the comment box at the bottom of the page. When local storage is utilized this way the the current details tab will stay open and the comment in progress will still be there on page reload/refresh.



### Saving Open Details:
Add the code within the comment block to the callback function attached to the details elements:

```js
// add event listener to all details
for (let i = 0; i < details.length; i++) {
  details[i].addEventListener("click", function () {

////////////////////////////////////////////////////////////////////////////////////////    
    // store the open detail & local storage
    if (settings.open === i) { // guard clause so that details that get closed, stay closed
      settings.open = null;
      saveSettings();
      return
    }
    openDetail = i;
    settings.open = i;
    saveSettings();
////////////////////////////////////////////////////////////////////////////////////////   

    // remove 'open' attribute from other details
    for (let j = 0; j < details.length; j++) {
      if (j !== openDetail) {
        details[j].removeAttribute("open");
      }
    }
  });
}
```

### Saving Comment in Progress:
Add the event listener and callback function to the comment box. Here is a good time to talk about the "input" event.

```js
commentBox.addEventListener("input", function () {
  settings.comment = commentBox.value;
  saveSettings();
});
```
