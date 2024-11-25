const assert = require('assert');

const shopInfo = {
  'Seattle': {
    rowNum: 1,
    minCustomers: 23,
    maxCustomers: 65,
    hourlyAverage: 6.3
  },
  'Tokyo': {
    rowNum: 2,
    minCustomers: 3,
    maxCustomers: 24,
    hourlyAverage: 1.2
  },
  'Dubai': {
    rowNum: 3,
    minCustomers: 11,
    maxCustomers: 38,
    hourlyAverage: 3.7
  },
  'Paris': {
    rowNum: 4,
    minCustomers: 20,
    maxCustomers: 38,
    hourlyAverage: 2.3
  },
  'Lima': {
    rowNum: 5,
    minCustomers: 2,
    maxCustomers: 16,
    hourlyAverage: 4.6
  },
}
module.exports = async function checkShop(I, name, optionalShopInfo) {

  const { rowNum, minCustomers, maxCustomers, hourlyAverage } = optionalShopInfo || shopInfo[name];

  const selector = `#table tbody tr:nth-child(${rowNum}) th`;

  I.see(name, selector);

  const minCookies = Math.ceil(minCustomers * hourlyAverage);

  const maxCookies = Math.ceil(maxCustomers * hourlyAverage);

  I.say(`I expect cookies sold per hour in range ${minCookies} to ${maxCookies}`);

  const texts = await I.grabTextFrom(`#table tbody tr:nth-child(${rowNum}) td`);

  let total = 0;

  for (let i = 0; i < texts.length - 1; i++) {
    const numCookies = parseInt(texts[i]);
    assert(minCookies <= numCookies);
    assert(maxCookies >= numCookies);
    total += numCookies;
  }

  I.say(`Total column should show ${total} cookies sold`);

  I.see(total, `#table tbody tr:nth-child(${rowNum}) td:last-child`);
}
