'use strict';

const assert = require('assert');

const { I } = inject();

let pageSource = null;

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
