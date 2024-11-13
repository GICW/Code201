'use strict';

const checkShop = require('../helpers/check-shop.js');
const checkTotals = require('../helpers/check-totals.js');

const { I } = inject();

const shopInfo = {
  name: "",
  rowNum: 0,
  minCustomers: 0,
  maxCustomers: 0,
  hourlyAverage: 0
}

Given('I am on the sales page', () => {
  I.amOnPage('/sales.html');
});

Then(/I see correct data for (.+)/, async (location) => {
  await checkShop(I, location);
});

Then('I see correct totals for all locations', async () => {
  await checkTotals(I);
});

Given(/I enter (.+) as store name/, (store) => {
  shopInfo.name = store;
  I.fillField('store', store);
});

Given('I enter {int} for minimum', (num) => {
  shopInfo.minCustomers = num;
  I.fillField('min', num);
});

Given('I enter {int} for maximum', (num) => {
  shopInfo.maxCustomers = num;
  I.fillField('max', num);
});

Given('I enter {int} for average', (num) => {
  shopInfo.hourlyAverage = num;
  I.fillField('avg', num);
});

When('I submit', () => {
  I.click('#submit');
});

Then(/I should see (.+) added at row (\d+) with correct data/, async (name, rowNum) => {

  shopInfo.rowNum = rowNum;

  checkShop(I, name, shopInfo)
});
