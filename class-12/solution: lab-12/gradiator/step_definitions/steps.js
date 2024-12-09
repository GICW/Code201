const assert = require('assert');
const checkImages = require('../helpers/check-images.js');

const { I } = inject();

Given('I am on the home page', () => {
  I.amOnPage('/');
});

let tempImages = null;

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
