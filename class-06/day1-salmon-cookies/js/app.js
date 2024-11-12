'use strict';

// Store Definitions

const seattle = {
  locationName: 'Seattle',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerSale: 6.3,
  cookiesEachHour: [],
  estimate: function () {
    this.cookiesEachHour = estimateSales(this);
  }
};

const tokyo = {
  locationName: 'Tokyo',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerSale: 1.2,
  cookiesEachHour: [],
  estimate: function () {
    this.cookiesEachHour = estimateSales(this);
  }
};

const dubai = {
  locationName: 'Dubai',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerSale: 3.7,
  cookiesEachHour: [],
  estimate: function () {
    this.cookiesEachHour = estimateSales(this);
  }
}

const paris = {
  locationName: 'Paris',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerSale: 2.3,
  cookiesEachHour: [],
  estimate: function () {
    this.cookiesEachHour = estimateSales(this);
  }
};

const lima = {
  locationName: 'Lima',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerSale: 4.6,
  cookiesEachHour: [],
  estimate: function () {
    this.cookiesEachHour = estimateSales(this);
  }
};

// Application State
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const stores = [seattle, tokyo, dubai, paris, lima];

// Helper Methods
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function estimateSales(store) {//estimates for all the stores from line 62
  const sales = [];
  for (let i = 0; i < hours.length; i++) { //goes through iterantions until the condition i < hours.length is false
    const numCustomers = random(store.minCustomersPerHour, store.maxCustomersPerHour);//Calls a random function to generate a random number of customers for the hour, within the range set by the store’s minCustomersPerHour and maxCustomersPerHour.
    const hourSales = Math.ceil(numCustomers * store.avgCookiesPerSale);//Estimates the number of cookies sold in this hour by multiplying numCustomers by store.avgCookiesPerSale, then rounds up to the nearest whole number with Math.ceil.
    sales.push(hourSales); //Adds the calculated hourSales value to the sales array, storing the estimate for that hour.
  }
  return sales;//sales array, for each hour
}

function render(store) {

  let total = 0;

  const root = document.getElementById('root');

  // Create a section, with a class of "location" for each store
  const location = document.createElement('section')
  location.classList.add('location');//"classList" only affects the CSS, you may ignore this, b/c you do not have my css file or will not use this class to define your own CSS
  root.appendChild(location);

  // In the section, add a title
  const title = document.createElement('h2');
  title.textContent = store.locationName;
  location.appendChild(title);

  // Create a UL to hold the hour totals
  const list = document.createElement('ul');
  location.appendChild(list);

  // Each hour - make a new list item with the estimated total,  Starts a loop to go through each hour of the day.
  for (let i = 0; i < hours.length; i++) {
    total += store.cookiesEachHour[i];//Adds cookies sold in the current hour to total.
    const listItem = document.createElement('li');//Creates an <li> element for this hour's data.
    listItem.textContent = hours[i] + ': ' + store.cookiesEachHour[i] + ' cookies';//Sets <li> text to show the hour and cookies sold.
    list.appendChild(listItem);//Adds this <li> to the <ul> list.
  }

  // Last item in the list - total
  const totalItem = document.createElement('li');//Creates a <li> element for the total sales.
  totalItem.textContent = 'Total: ' + total + ' cookies';//Sets <li> text to show the total cookies sol
  list.appendChild(totalItem);//Adds the total <li> to the <ul> list.
}


// Render them all ...
function runApplication() { //Defines a function runApplication to process all stores.
  for (let i = 0; i < stores.length; i++) {//Loops through each store in stores.
    stores[i].estimate(); //Calls the estimate method for each store to calculate sales.
    render(stores[i]);//Calls render for each store to display its sales.
  }
}

runApplication();//Calls runApplication to start the process.
