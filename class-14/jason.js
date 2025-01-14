'use strict';

// Global Variables
const productName = [
  'boots', 'bathroom', 'breakfast', 'bubblegum', 'chair',
  'dog-duck', 'tauntaun', 'scissors', 'water-can', 'wine-glass',
  'bag', 'banana', 'cthulhu', 'dragon', 'pen', 'pet-sweep',
  'shark', 'sweep', 'unicorn'
];

const state = {
  allProducts: [],
};

// Product Constructor
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.total = 0;
  this.views = 0;
}

// Save to LocalStorage
function saveToLocalStorage() {
  localStorage.setItem('productData', JSON.stringify(state.allProducts));
}

// Load from LocalStorage
function loadFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('productData'));
  if (data) {
    state.allProducts = data.map(item => {
      const product = new Product(item.name, item.path);
      product.total = item.total;
      product.views = item.views;
      return product;
    });
    console.log("Loaded from localStorage:");
    state.allProducts.forEach(product => {
      console.log(`Product: ${product.name}, Votes: ${product.total}, Views: ${product.views}`);
    });
  }
}

// Initialize Products
function createAlbum() {
  if (state.allProducts.length === 0) {
    for (const name of productName) {
      state.allProducts.push(new Product(name, `img/${name}.jpg`));
    }
  }
}

// Main Logic
const productRank = {
  totalClicks: 0,
  rounds: 25,
  left: null,
  mid: null,
  right: null,
  leftElement: document.getElementById('img1'),
  midElement: document.getElementById('img2'),
  rightElement: document.getElementById('img3'),
  imgElement: document.getElementById('productImages'),
  resultElement: document.getElementById('results'),
  resultsButton: document.getElementById('showResults'),
  resetButton: document.getElementById('reset'),

  getRandomIndex: function () {
    return Math.floor(Math.random() * state.allProducts.length);
  },

  displayImages: function () {
    let indices = new Set();
    while (indices.size < 3) {
      indices.add(this.getRandomIndex());
    }
    const [leftIdx, midIdx, rightIdx] = [...indices];
    [this.left, this.mid, this.right] = [
      state.allProducts[leftIdx],
      state.allProducts[midIdx],
      state.allProducts[rightIdx]
    ];
    this.left.views++;
    this.mid.views++;
    this.right.views++;
    this.leftElement.src = this.left.path;
    this.leftElement.id = this.left.name;
    this.midElement.src = this.mid.path;
    this.midElement.id = this.mid.name;
    this.rightElement.src = this.right.path;
    this.rightElement.id = this.right.name;
    saveToLocalStorage();
  },

  allyClicks: function (elId) {
    const clickedProduct = state.allProducts.find(product => product.name === elId);
    if (clickedProduct) {
      clickedProduct.total++;
      this.totalClicks++;
      console.log(`Votes for ${clickedProduct.name}: ${clickedProduct.total}`);
      saveToLocalStorage();
      if (this.totalClicks === this.rounds) {
        this.showButton();
      } else {
        this.displayImages();
      }
    }
  },

  displayResults: function () {
    const ulEl = document.createElement('ul');
    for (const product of state.allProducts) {
      const liEl = document.createElement('li');
      liEl.textContent = `${product.name} has ${product.total} votes and was viewed ${product.views} times.`;
      ulEl.appendChild(liEl);
    }
    const liElTwo = document.createElement('li');
    liElTwo.textContent = `Total User Clicks: ${this.totalClicks}`;
    ulEl.appendChild(liElTwo);
    this.resultElement.appendChild(ulEl);
  },

  showButton: function () {
    this.resultsButton.hidden = false;
    this.resultsButton.addEventListener('click', () => {
      this.resultsButton.hidden = true;
      this.resetButton.hidden = false;
      this.displayResults();
      this.resetButton.addEventListener('click', () => {
        localStorage.removeItem('productData');
        location.reload();
      });
    });
  },

  onClick: function (event) {
    if ([this.left.name, this.mid.name, this.right.name].includes(event.target.id)) {
      this.allyClicks(event.target.id);
    }
  }
};

// Event Listeners
productRank.imgElement.addEventListener('click', event => productRank.onClick(event));

// Initialize App
loadFromLocalStorage();
createAlbum();
productRank.displayImages();
