const checkImages = require('../helpers/check-images.js');

const { I } = inject();

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
