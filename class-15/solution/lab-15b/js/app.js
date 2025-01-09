let data;
let productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

// State object keeps track of the allProducts array
const state = {
  allProducts: [],
};

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.views = 0;
  data.labels.push(name);
  data.datasets[0].data.push(0);
}

function buildAlbum() {
  for (let i = 0; i < productNames.length; i++) {
    state.allProducts.push(new Product(productNames[i], 'imgs/' + productNames[i] + '.jpg'));
  }
  localStorage.setItem('allProducts', JSON.stringify(state.allProducts));
}

(function checkLocal() {
  if (localStorage.chartData && localStorage.allProducts) {
    console.log('Exists');
    data = JSON.parse(localStorage.chartData);
    state.allProducts = JSON.parse(localStorage.getItem('allProducts'));
  } else {
    console.log('Doesnt exist');
    data = {
      labels: [],
      datasets: [
        {
          label: "Product Analysis Results",
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: []
        }
      ]
    };
    buildAlbum();
  }
})();

let productRank = {
  totalClicks: 0,
  voteRounds: 25,
  leftObj: null,
  midObj: null,
  rightObj: null,
  barChart: null,

  leftEl: document.getElementById('img1'),
  midEl: document.getElementById('img2'),
  rightEl: document.getElementById('img3'),
  imageEls: document.getElementById('images'),
  resultsButton: document.getElementById('showResults'),
  resetButton: document.getElementById('reset'),
  ctx: document.getElementById("canvas").getContext("2d"),

  getRandomIndex: function () {
    return Math.floor(Math.random() * productNames.length);
  },

  displayImages: function () {
    productRank.leftObj = state.allProducts[productRank.getRandomIndex()];
    productRank.midObj = state.allProducts[productRank.getRandomIndex()];
    productRank.rightObj = state.allProducts[productRank.getRandomIndex()];
    let renderedImages = [productRank.leftEl.id, productRank.midEl.id, productRank.rightEl.id];

    if (
      productRank.leftObj.name === productRank.midObj.name ||
      productRank.leftObj.name === productRank.rightObj.name ||
      productRank.midObj.name === productRank.rightObj.name ||
      renderedImages.includes(productRank.leftObj.name) ||
      renderedImages.includes(productRank.midObj.name) ||
      renderedImages.includes(productRank.rightObj.name)
    ) {
      productRank.displayImages();
    } else {

      productRank.leftObj.views += 1;
      productRank.midObj.views += 1;
      productRank.rightObj.views += 1;

      productRank.leftEl.src = productRank.leftObj.path;
      productRank.leftEl.id = productRank.leftObj.name;

      productRank.midEl.src = productRank.midObj.path;
      productRank.midEl.id = productRank.midObj.name;

      productRank.rightEl.src = productRank.rightObj.path;
      productRank.rightEl.id = productRank.rightObj.name;
    }
  },

  tallyClicks: function (elId) {
    for (let i in state.allProducts) {
      if (state.allProducts[i].name === elId) {
        state.allProducts[i].tally += 1;
        this.totalClicks += 1;
        data.datasets[0].data[i] = state.allProducts[i].tally;
        console.log(state.allProducts[i].name + ' has ' + state.allProducts[i].tally + ' votes');
      }
    }
    localStorage.setItem('chartData', JSON.stringify(data));
    localStorage.setItem('allProducts', JSON.stringify(state.allProducts));
  },

  showButton: function () {
    this.resultsButton.hidden = false;
    this.resultsButton.addEventListener('click', function () {
      productRank.resetButton.hidden = false;
      productRank.resultsButton.hidden = true;
      productRank.barChart = new Chart(productRank.ctx).Bar(data);
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
      console.log('Click the image, Idiot!');
    }
  }
};

productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();
