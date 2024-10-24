'use strict';

const { I } = inject();
const assert = require('assert');

Given('I am on the home page', () => {
  I.amAcceptingPopups();
  I.amOnPage('/');
});

When('I confirm the prompts', () => {
  I.acceptPopup();
});

Then('I see popups that confirm my responses', async () => {
  let pageSource = await I.grabSource();
  let prompts = pageSource.match(/(prompt)/g);
  assert.strictEqual(prompts.length >= 4, true);
});
