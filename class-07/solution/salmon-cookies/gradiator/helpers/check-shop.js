const assert = require('assert');

const shopInfo = {
  'Seattle': {
    rowNum: 2,
    minCustomers: 23,
    maxCustomers: 65,
    hourlyAverage: 6.3
  },
  'Tokyo': {
    rowNum: 3,
    minCustomers: 3,
    maxCustomers: 24,
    hourlyAverage: 1.2
  },
  'Dubai': {
    rowNum: 4,
    minCustomers: 11,
    maxCustomers: 38,
    hourlyAverage: 3.7
  },
  'Paris': {
    rowNum: 5,
    minCustomers: 20,
    maxCustomers: 38,
    hourlyAverage: 2.3
  },
  'Lima': {
    rowNum: 6,
    minCustomers: 2,
    maxCustomers: 16,
    hourlyAverage: 4.6
  },
}
module.exports = async function checkShop(I, name, optionalShopInfo) {

  const { rowNum, minCustomers, maxCustomers, hourlyAverage } = optionalShopInfo || shopInfo[name];

  const tableMarkup = await I.grabHTMLFrom('table:first-of-type');

  let baseSelector = `table:first-of-type tr:nth-child(${rowNum})`;

  if (tableMarkup.includes('<tbody>')) {
    baseSelector = `table:first-of-type tbody tr:nth-child(${rowNum - 1})`;
  }

  I.see(name, `${baseSelector} th:first-child, ${baseSelector} td:first-child`);

  const minCookies = Math.ceil(minCustomers * hourlyAverage);

  const maxCookies = Math.ceil(maxCustomers * hourlyAverage);

  I.say(`I expect cookies sold per hour in range ${minCookies} to ${maxCookies}`);

  const texts = await I.grabTextFrom(`${baseSelector} td, ${baseSelector} th`);

  let total = 0;
  let startIndex = 1;
  let endIndex = texts.length - 1;

  for (let i = startIndex; i < endIndex; i++) {
    const numCookies = parseInt(texts[i]);
    assert(minCookies <= numCookies);
    assert(maxCookies >= numCookies);
    total += numCookies;

  }

  I.say(`Total column should show ${total} cookies sold`);

  assert(parseInt(total) == total);

}
