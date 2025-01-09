'use strict';

let canvasElem = document.getElementById('chart')


// TODO: Bring in the AppState, load product data from local storage and create the chart
function renderChart() {

  // SOLUTION
  let state = new AppState();
  state.loadItems();

  let productNames = [];
  let productClicks = [];
  let productViews = [];

  for (let product of state.allProducts) {
    productNames.push(product.name);
    productClicks.push(product.timesClicked)
    productViews.push(product.timesShown);
  }

  Chart.defaults.font.size = 20; //eslint-disable-line
  Chart.defaults.font.weight = 'bold'; //eslint-disable-line

  let chartObj = {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# Of Votes',
        data: productClicks,
        borderWidth: 5,
        backgroundColor: ['#ff006e'],
        borderColor: ['#ff006e']
      },
      {
        label: '# of Views',
        data: productViews,
        borderWidth: 5,
        backgroundColor: ['#8338ec'],
        borderColor: ['#8338ec']
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: 'black' }
        },
        x: {
          ticks: { color: 'black' }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'black',
            padding: 30,
            font: {
              size: 16
            }
          },
        }
      }
    }
  };

  new Chart(canvasElem, chartObj); //eslint-disable-line
}

renderChart();
