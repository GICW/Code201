'use strict';

const assert = require('assert');
const checkShop = require('../helpers/check-shop.js');
const checkTotals = require('../helpers/check-totals.js');

const { I } = inject();

let pageSource = null;

// Lab 07 features
Given('I am on the sales page', () => {
  I.amOnPage('/sales.html');
});

Then(/I see correct data for (.+)/, async (location) => {
  await checkShop(I, location);
});

Then('I see correct totals for all locations', async () => {
  await checkTotals(I);
});

// Lab 08 features

Given('I am on home page', () => {
  I.amOnPage('/');
});

Then('I see home page title', () => {
  I.seeInTitle("Salmon Cookie");
});

Then(/I should see (.+) image/, (img) => {
  const selector = `img[src$="${img}"]`;
  I.waitForVisible(selector, 10);
});

Then('I should see link to sales page', () => {
  I.seeElement('a[href$="sales.html"]');
});

Then(/I should see (.+) location/, (location) => {
  I.see(location);
});

// Lab 09 features

Given('I am on the sales page', () => {
  I.amOnPage('/sales.html');
});

Then('I should see a form with a fieldset', async () => {
  pageSource = await I.grabSource();
  assert.strictEqual(pageSource.includes('<form'), true);
  assert.strictEqual(pageSource.includes('</form>'), true);
  assert.strictEqual(pageSource.includes('<fieldset'), true);
});


When('I fill out and submit the form', () => {
  I.fillField('input[name=location]', 'Gradiator');
  I.fillField('input[name=min]', 2);
  I.fillField('input[name=max]', 10);
  I.fillField('input[name=avg]', 5);
  I.click('button[type="submit"]');
});

Then('I should see a new store in the table', () => {
  I.see('Gradiator');
});

let tableRows = null;

When('I fill out the form with an existing store', async () => {
  pageSource = await I.grabSource();
  tableRows = await I.grabNumberOfVisibleElements('tr');
  I.fillField('input[name=location]', 'Pike Place Market');
  I.fillField('input[name=min]', 3);
  I.fillField('input[name=max]', 20);
  I.fillField('input[name=avg]', 3);
  I.click('button[type="submit"]');
});

Then('I see the table update', async () => {
  let tempSource = await I.grabSource();
  let temptableRows = await I.grabNumberOfVisibleElements('tr');
  assert.notStrictEqual(pageSource, tempSource);
  assert.strictEqual(tableRows, temptableRows);
});

// Lab 10 features
Given('I can load the home page', () => {
  I.amOnPage('/');
});

Then('I see each stores location', async () => {
  let pageSource = await I.grabSource();
  let addressRegExp = /\b(\d{2,4}\s+)(?![a|p]m\b)(NW|NE|SW|SE|north|south|west|east|n|e|s|w)?([\s|\,|.]+)?(([a-zA-Z|\s+]{1,30}){1,4})(court|ct|street|st|drive|dr|lane|ln|road|rd|blvd|ave)?/gi;
  let addresses = pageSource.match(addressRegExp);

  let zipRegExp = /(?:[-\s]\d{5})(?:[-\s]\d{4})?/gi;
  let zipCodes = pageSource.match(zipRegExp);

  assert.strictEqual(addresses.length > 0 || zipCodes.length > 0, true);
});

Then('I see each stores hours', async () => {
  let pageSource = await I.grabSource();
  let hoursRegExp = /[0-1]?[1-9](:[0-5]?[0-9])?[aApP][mM]/gi;
  let hours = pageSource.match(hoursRegExp);

  assert.strictEqual(hours.length > 0, true);
});

Then('I see each stores phone number', async () => {
  let pageSource = await I.grabSource();
  let phoneRegExp = /(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/g;
  let phoneNumbers = pageSource.match(phoneRegExp);
  assert.strictEqual(phoneNumbers.length > 0, true);
});

Then('I see each stores email address', async () => {
  let pageSource = await I.grabSource();
  let emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  let emailAddresses = pageSource.match(emailRegExp);
  assert.strictEqual(emailAddresses.length > 0, true);
});
