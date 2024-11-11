const checkShop = require('../helpers/check-shop.js');

const { I } = inject();


When('I am on the home page', () => {
  I.amOnPage('/');
});

Then('I can navigate to the sales page', () => {
  I.amOnPage('/sales.html')
})

Then('I see home page title', () => {
  I.seeInTitle("Pat's Salmon Cookies");
});

Given('I am on the sales page', () => {
  I.amOnPage('/sales.html');
});

Then('I see sales page title', () => {
  I.seeInTitle("Sales Data: Pat's Salmon Cookies");
});

Then(/I see level 2 heading and correct data for (.+)/, (location) => {
  checkShop(I, location);
});

