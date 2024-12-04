'use strict';

const productNames = ['boots', 'bathroom', 'breakfast', 'bubblegum', 'chair', 'dog-duck', 'tauntaun', 'scissors', 'water-can', 'wine-glass', 'bag', 'banana', 'cthulhu', 'dragon', 'pen', 'pet-sweep', 'shark', 'sweep', 'unicorn'];

// State object holds the holds the current state of the application (all existing Products)
const state = {
  allProducts: [],
};

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.views = 0;
}

(function buildAlbum() {
  for (let i = 0; i < productNames.length; i++) {
    let product = new Product(productNames[i], 'imgs/' + productNames[i] + '.jpg');
    state.allProducts.push(product);
  }
})();

const productRank = {
  totalClicks: 0,
  voteRounds: 25,
  leftObj: null,
  midObj: null,
  rightObj: null,

  leftEl: document.getElementById('img1'),
  midEl: document.getElementById('img2'),
  rightEl: document.getElementById('img3'),
  imageEls: document.getElementById('images'),
  resultsEl: document.getElementById('results'),
  resultsButton: document.getElementById('showResults'),
  resetButton: document.getElementById('reset'),

  getRandomIndex: function () {
    return Math.floor(Math.random() * productNames.length);
  },

  displayImages: function () {
    productRank.leftObj = state.allProducts[productRank.getRandomIndex()];
    productRank.midObj = state.allProducts[productRank.getRandomIndex()];
    productRank.rightObj = state.allProducts[productRank.getRandomIndex()];

    if (productRank.leftObj === productRank.midObj || productRank.leftObj === productRank.rightObj || productRank.midObj === productRank.rightObj) {
      productRank.displayImages();
    }

    productRank.leftObj.views += 1;
    productRank.midObj.views += 1;
    productRank.rightObj.views += 1;

    productRank.leftEl.src = productRank.leftObj.path;
    productRank.leftEl.id = productRank.leftObj.name;

    productRank.midEl.src = productRank.midObj.path;
    productRank.midEl.id = productRank.midObj.name;

    productRank.rightEl.src = productRank.rightObj.path;
    productRank.rightEl.id = productRank.rightObj.name;
  },

  tallyClicks: function (elId) {
    for (const i in state.allProducts) {
      if (state.allProducts[i].name === elId) {
        state.allProducts[i].tally += 1;
        this.totalClicks += 1;
        console.log(state.allProducts[i].name + ' has ' + state.allProducts[i].tally + ' votes');
      }
    }
  },

  displayResults: function () {
    const ulEl = document.createElement('ul');
    for (const i in state.allProducts) {
      const liElOne = document.createElement('li');
      const str = state.allProducts[i].name + ' has ' + state.allProducts[i].tally + ' votes.';
      liElOne.textContent = (str);
      ulEl.appendChild(liElOne);
    }
    const liElTwo = document.createElement('li');
    liElTwo.textContent = 'Total User Clicks: ' + productRank.totalClicks;
    ulEl.appendChild(liElTwo);
    this.resultsEl.appendChild(ulEl);
  },

  showButton: function () {
    this.resultsButton.hidden = false;
    this.resultsButton.addEventListener('click', function () {
      productRank.resetButton.hidden = false;
      productRank.resultsButton.hidden = true;
      productRank.displayResults();

      productRank.resetButton.addEventListener('click', function () {
        productRank.resetButton.hidden = true;
        location.reload();
      });
    });
  },

  onClick: function (event) {
    if (event.target.id === productRank.leftObj.name || event.target.id === productRank.midObj.name || event.target.id === productRank.rightObj.name) {
      productRank.tallyClicks(event.target.id);

      if (productRank.totalClicks % productRank.voteRounds === 0) {
        productRank.imageEls.removeEventListener('click', productRank.onClick);
        productRank.showButton();
      }
      productRank.displayImages();
    } else {
      alert('Click the image please!');
    }
  }
};

productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();
