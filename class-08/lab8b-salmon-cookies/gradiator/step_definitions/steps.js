const { I } = inject();


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
