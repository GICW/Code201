const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tableElement = document.getElementById('sales-table'); //Finds the HTML element with the ID sales-table and stores it in tableElement to later add rows. 

const state = {
  allCookieStands: [],
};//Initializes an object state with an empty array allCookieStands to hold each CookieStand instance.

function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];//Initializes arrays customersEachHour and cookiesEachHour to store hourly customer counts and cookies sold.
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0; //Sets totalDailyCookies to zero to track total cookies for the day.
}

CookieStand.prototype.calcCustomersEachHour = function() {
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
  } //Calculates random customer counts for each hour, based on minCustomersPerHour and maxCustomersPerHour.
}; //Adds these numbers to customersEachHour back to line 14.

CookieStand.prototype.calcCookiesEachHour = function() {
  this.calcCustomersEachHour();//First calls calcCustomersEachHour to get hourly customer data.
  for (let i = 0; i < hours.length; i++) {
    const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  } //Then, for each hour, calculates cookies sold based on avgCookiesPerSale and stores it in cookiesEachHour, adding each hour's sales to totalDailyCookies.
};

CookieStand.prototype.render = function() {
  this.calcCookiesEachHour();//Calls calcCookiesEachHour to prepare hourly cookie data.
  const tableRow = document.createElement('tr');//Creates a table row for the store, adding its name and hourly cookie sales to each cell.
  let tableDataElement = document.createElement('td'); 
  tableRow.appendChild(tableDataElement);
  for (let i = 0; i < hours.length; i++) {
    tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(tableDataElement);
  }
  const tableHeader = document.createElement('th');
  tableHeader.textContent = this.totalDailyCookies;
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);//adds the total cookies sold in a final cell and appends the row to tableElement.
};

let seattle = new CookieStand('Seattle', 23, 65, 6.3);//Instantiates five CookieStand objects, one for each location, with specific customer and sales data.
let tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
let dubai = new CookieStand('Dubai', 11, 38, 3.7);
let paris = new CookieStand('Paris', 20, 38, 2.3);
let lima = new CookieStand('Lima', 2, 16, 4.6);
state.allCookieStands.push(seattle, tokyo, dubai, paris, lima);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} //Helper function that returns a random number between min and max.

function makeHeaderRow() {
  const tableRow = document.createElement('tr');//Creates a header row with "Locations" followed by each hour in hours.
  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'Locations';
  tableRow.appendChild(tableHeader);
  for (let i = 0; i < hours.length; i++) {
    tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement('th');
  tableHeader.textContent = 'Location Totals';//Adds a "Location Totals" column to the end for daily totals.
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
}

function makeFooterRow() {
  const tableRow = document.createElement('tr');//Creates a footer row for hourly totals across all locations and the overall total at the end.
  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'Hourly Totals for All Locations';
  tableRow.appendChild(tableHeader);
  let totalOfTotals = 0; //Calculates hourly totals by adding up cookies sold at each location, for each hour.
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < state.allCookieStands.length; j++){
      hourlyTotal += state.allCookieStands[j].cookiesEachHour[i];
      totalOfTotals += state.allCookieStands[j].cookiesEachHour[i];
    }
    tableHeader = document.createElement('th');
    tableHeader.textContent = hourlyTotal;
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement('th');
  tableHeader.textContent = totalOfTotals;
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
}

(function renderTable() {
  makeHeaderRow(); //Calls makeHeaderRow to add the header.
  for(let i = 0; i < state.allCookieStands.length; i++){
    state.allCookieStands[i].render(); //oops over each store in allCookieStands to render its row.
  }
  makeFooterRow();//Calls makeFooterRow to display hourly and overall totals at the bottom.
})();
