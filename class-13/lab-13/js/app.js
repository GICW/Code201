'use strict';

// target element for the event listener
let dashboardElem = document.getElementById('products');

// appDashboard constructor
function AppDashboard(rounds) {
  this.rounds = rounds;
  this.allProducts = [];
  this.displayedProducts = [];
}

// product constructor
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.views = 0;
}

// instantiates the list of products and puts them in an internal array - allProducts
AppDashboard.prototype.instantiateProducts = function() {
  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep','tauntaun', 'unicorn', 'water-can', 'wine-glass'];
  for (let i = 0; i < productNames.length; i++) {
    this.allProducts.push(new Product(productNames[i], 'imgs/' + productNames[i] + '.jpg'));
  }
  console.log(this.allProducts);
}

//--------------------------------- Image Selection/Render ---------------------------------//
// chooses a product at random from the all products array
AppDashboard.prototype.chooseProduct = function() {
  let index = Math.floor(Math.random() * this.allProducts.length);
  return this.allProducts[index];
}


// sets an array called invalid products that stores previous rounds products and any valid new products chosen. Chooses products until three new unique products are chosen and adds them to the internal displayedProducts array
AppDashboard.prototype.chooseThree = function() {
  const invalidProducts = [];
  for (let product of this.displayedProducts) {
    invalidProducts.push(product);
  }
  this.displayedProducts = [];
  // randomly chooses three products
  while (this.displayedProducts.length < 3) {
    let potentialProduct = this.chooseProduct();
    let productIsUnique = true;
    for (let product of invalidProducts) {
      if (potentialProduct.name === product.name) {
        productIsUnique = false;
      }
    }
    if (productIsUnique) {
      invalidProducts.push(potentialProduct);
      this.displayedProducts.push(potentialProduct);
    }
  }
}

// renders the three chosen unique elements to the page
AppDashboard.prototype.render = function() {
  this.chooseThree();
  for (let i in this.displayedProducts) {
    this.displayedProducts[i].views++;
    let imgElement = this.displayedProducts[i].renderProduct();
    let id = Number(i) + 1;
    imgElement.setAttribute('id', id);
    dashboardElem.appendChild(imgElement);
  }
}

//--------------------------------- Results ---------------------------------//
// helper function for results pannel
AppDashboard.prototype.pluralizer = function(num, word) {
  if (num !== 1) {
    return `${num} ${word}s`;
  }
  return `${num} ${word}`;
}

// creates and renders/shows results pannel
AppDashboard.prototype.renderResults = function () {
  const resultsElem = document.getElementById('results')
  for (let product of this.allProducts) {
  const liElem = document.createElement('li');
  resultsElem.appendChild(liElem);
  const pElem = document.createElement('p');
  pElem.textContent = `${product.name} was shown ${product.views} times and recieved ${this.pluralizer(product.tally, 'vote')}.`;
  liElem.appendChild(pElem);
  }
  const asideElem = document.getElementById('aside');
  asideElem.setAttribute('class', 'show')
}

// hides upper dashboard and shows/renders charts
AppDashboard.prototype.updateUpperMessage = function() {
  upperMessage.innerHTML = '';
  const charts = document.getElementById('charts')
  charts.setAttribute('class', 'show')
  this.renderClicksChart();
  this.renderViewsChart()
  this.renderPercentageChart()
}

//--------------------------------- Event Handling ---------------------------------//
// handle click on the dashboard, count votes, track voting rounds
// if there are rounds left render new images for voting
// else remove listener and render results
AppDashboard.prototype.handleClick = function(event) {
  let id = event.target.id;
  
  if (id === '1') {
    this.displayedProducts[0].tally++;
  } else if (id === '2') {
    this.displayedProducts[1].tally++;
  } else if (id === '3') {
    this.displayedProducts[2].tally++;
  }
  if (id === '1' || id === '2' || id === '3') {
    this.rounds--;
  }
  if (this.rounds > 0) {
    dashboardElem.innerHTML = '';
    this.render();
  } else {
    this.setItemInStorage();
    dashboardElem.removeEventListener('click', boundHandler);
    this.renderResults();
    this.updateUpperMessage();
  }
}

//--------------------------------- Storage ---------------------------------//
// checks storage for products, if they exist reinstantiate and use in dashboard
// else create a new array of products
AppDashboard.prototype.getItemsFromStorage = function() {
  if (localStorage.getItem('allProducts')) {
    let parsedProducts = JSON.parse(localStorage.getItem('allProducts'));
    for (let product of parsedProducts) {
      let constructedProduct = new Product(product.name, product.path)
      constructedProduct.tally = product.tally;
      constructedProduct.views = product.views;
      this.allProducts.push(constructedProduct);
    }
  } else {
    this.instantiateProducts();
  }
}


// sets products in storage after voting
AppDashboard.prototype.setItemInStorage = function() {
  localStorage.setItem('allProducts', JSON.stringify(this.allProducts));
}


//--------------------------------- Charts ---------------------------------//
// creates an array from the product names to use in all the charts as labels
AppDashboard.prototype.createLabelsArray = function() {
  let labelsArray = [];
  for (let i = 0; i < this.allProducts.length; i++) {
    labelsArray.push(this.allProducts[i].name);
  }
  return labelsArray;
}

// finds the percentage of votes to times displayed per product for the percentage chart. Is called after the voting is completed
AppDashboard.prototype.createPercentageDataArray = function() {
  let percentageDataArray = [];
  for (let i = 0; i < this.allProducts.length; i++) {
    if (parseInt(this.allProducts[i].tally) === 0 || parseInt(this.allProducts[i].views) === 0 ) {
      percentageDataArray.push(0);
    } else {
      percentageDataArray.push(parseInt(this.allProducts[i].tally) / parseInt(this.allProducts[i].views) * 100);
    }
  }
  return percentageDataArray;
}

// creates a data array for clicks per product for the click chart
AppDashboard.prototype.createObjClicksDataArray = function() {
  let objClicksDataArray = [];
  for (let i = 0; i < this.allProducts.length; i++) {
    objClicksDataArray.push(this.allProducts[i].tally);
  }
  console.log(objClicksDataArray);
  return objClicksDataArray;
}

// creates a data array for views per product for the products chart
AppDashboard.prototype.createObjViewsDataArray = function () {
  let objViewsDataArray = [];
  for (let i = 0; i < this.allProducts.length; i++) {
    objViewsDataArray.push(this.allProducts[i].views);
  }
  return objViewsDataArray;
}


// three charts
// chart for clicks per item
AppDashboard.prototype.renderClicksChart = function() {
  var ctx = document.getElementById('myChart1').getContext('2d');
  var clicksChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: this.createLabelsArray(),
      datasets: [{
        label: '# of Votes',
        data: this.createObjClicksDataArray(),
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


// chart for views per item
AppDashboard.prototype.renderViewsChart = function() {
  var ctx2 = document.getElementById('myChart2').getContext('2d');
  var viewsChart = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: this.createLabelsArray(),
      datasets: [{
        label: '# of Views',
        data: this.createObjViewsDataArray(),
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


// chart for percentage of clicks for the times displayed
AppDashboard.prototype.renderPercentageChart = function() {
  var ctx3 = document.getElementById('myChart3').getContext('2d');
  var percentageChart = new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: this.createLabelsArray(),
      datasets: [{
        label: '% of times voted for',
        data: this.createPercentageDataArray(),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


// product has single method to create it's own img element
Product.prototype.renderProduct = function() {
  const imageElem = document.createElement('img');
  imageElem.setAttribute('src', this.path);
  imageElem.setAttribute('alt', this.name);
  imageElem.setAttribute('class', 'productImg')
  return imageElem;
}


//--------------------------------- Start Script ---------------------------------//
// instantiate a dashboard
let app = new AppDashboard(25);

// create a reference to a single context binding for the listeners
let boundHandler = app.handleClick.bind(app);

// attach listener to the dashboard
dashboardElem.addEventListener('click', boundHandler);

// check storage for products
app.getItemsFromStorage();

// render products for first vote
app.render();

