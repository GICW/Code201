# Demo Outline
Constructors:  
```javascript
function CookieStore(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
}

CookieStore.prototype.getAvgCookieCount = function() {
  console.log('some random number');
};

const pikePlace = new CookieStore('pike', 15, 40, 6.3);
const otherStore = new CookieStore('otherStore', 10, 30, 2.3);
const anotherCookieStore = new CookieStore('anotherCookieStore', 5, 45, 3.3);

const stores = [pikePlace, otherStore, anotherCookieStore];
```  

Tables:  
```javascript
const tableEl = document.createElement('table');

for(let i = 0; i < stores.length; i++){
  const rowEl = document.createElement('tr');
  const currentStore  = stores[i];

  let el = document.createElement('th');
  el.textContent = currentStore.name;
  rowEl.appendChild(el);

  el = document.createElement('td');
  el.textContent = currentStore.minCust;
  rowEl.appendChild(el);

  el = document.createElement('td');
  el.textContent = currentStore.maxCust;
  rowEl.appendChild(el);

  el = document.createElement('td');
  el.textContent = currentStore.avgCookie;
  rowEl.appendChild(el);
  tableEl.appendChild(rowEl);
}

document.body.appendChild(tableEl);
```
