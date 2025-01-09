'use strict';

const assert = require('assert');
const checkImages = require('../helpers/check-images.js');
const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

const { I } = inject();

let tempImages = null;

// lab 11 features
Given('I am on the home page', () => {
  I.amOnPage('/');
});

Then('I should see {int} different products on the page', async (num) => {
  const renderedImages = await I.grabAttributeFrom({ xpath: '//img' }, 'src');
  const images = checkImages(renderedImages);
  assert.strictEqual(images.count, num);
});

When('I click an img', () => {
  I.click('img');
});

Then('I should still see {int} products', async (num) => {
  const renderedImages = await I.grabAttributeFrom({ xpath: '//img' }, 'src');
  const images = checkImages(renderedImages);
  assert.strictEqual(images.count, num);
});

When('{int} images are clicked', (int) => {
  I.amOnPage('/');
  for (let i = 0; i < int; i++) {
    I.click('img');
  }
});

// lab 12 features
Given('I am on the home page', () => {
  I.amOnPage('/');
});

When('I click on an image', async () => {
  tempImages = await I.grabAttributeFrom({ xpath: '//img' }, 'src');
  I.click('img');
})

Then('I should see {int} new products', async (num) => {
  // grab all image from the render
  let newImages = await I.grabAttributeFrom({ xpath: '//img' }, 'src');

  const renderedImages = checkImages(newImages);
  assert.strictEqual(num, renderedImages.count);
  newImages.forEach(image => {
    assert.strictEqual(false, tempImages.includes(image));
  });
});

When('I have clicked {int} images', (num) => {
  for (let i = 0; i < num; i++) {
    I.click('img');
  }
});

When('I click {string}', (buttonText) => {
  I.click(buttonText);
});

Then('I should see a visual chart', () => {
  I.seeElement('canvas');
});

// lab 13 features
Given('I am on the home page', async () => {
  I.amOnPage('/');
});

Given('user has made a few clicks', async () => {
  for (let i = 0; i < 5; i++) {
    let imgUrls = await I.grabAttributeFrom({ xpath: '//img' }, 'src');
    let renderedProducts = checkImages(imgUrls);
    I.click(`#${renderedProducts.matches[0]}`);
  }
});

When('the page is refreshed', () => {
  I.refreshPage();
});

When('the user has clicked {int} times', async (num) => {
  for (let i = 0; i < num; i++) {
    let imgUrls = await I.grabAttributeFrom({ xpath: '//img' }, 'src');
    let renderedProducts = checkImages(imgUrls);
    I.click(`#${renderedProducts.matches[0]}`);
  }
});

When('the user clicks {string}', (buttonText) => {
  I.click(buttonText);
});

Then('the user should see persisted chart data', () => {
  I.seeElement('canvas');
});
