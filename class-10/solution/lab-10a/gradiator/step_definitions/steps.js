'use strict';

const { I } = inject();

Given('I can load index.html', () => {
  I.amOnPage('/');
});

Then('I can see the logo', () => {
  I.seeInSource('logo.png');
  I.seeInSource('small-logo.png');
});

Then('the page loads reset css and google fonts', () => {
  I.seeInSource('reset.css');
  I.seeInSource('Patrick+Hand+SC');
  I.seeInSource('Yellowtail');
  I.seeInSource('Oswald');
});

Then('I can see the icons', () => {
  let icons = ['fb', 'flic', 'gp', 'insta', 'mail', 'pint', 'rss', 'twit'];
  icons.forEach(icon => {
    I.seeInSource(`${icon}-icon.png`);
  });
});

Then('I can see the hero image', () => {
  I.seeInSource('choco-pizza.png');
});

Then('I can see the author', () => {
  I.seeInSource('van-pic.png')
});

Then('I can see the recipe text', () => {
  I.see('For the fig swirl, melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss into a saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside, and let cool completely.');
  I.see('Ice Cream: In a small pot over medium heat, combine milk and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.');
  I.see('Using an ice cream machine, pour liquids into the frozen basin and process using manufacturers instructions, ie. let spin and thickden for 20 minutes before adding marscapone, fig-jam mixture and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into Pyrex dish or glass tupperware. Freeze for atleast 2 hours before serving.');
  I.see('1 1/2 Cups Milk');
  I.see('1/2 Cup Mascarpone');
  I.see('1/2 Tsp Pink Salt');
  I.see('1lb Black Mission Figs');
  I.see('1/2 Cup Brown Sugar');
  I.see('2-4 Tsp Water');
  I.see('1 1/2 Cups Heavy Cream');
  I.see('1/3 Cup Granulated Sugar');
  I.see('2 Egg Yolks');
  I.see('1 Lemon, Juiced');
  I.see('2 Tbsp Butter');
  I.see('1 Cup Honey Roasted Pecans, Lightly Chopped');
});

Then('I can see the author bio', () => {
  I.see('Vanessa Stevenson');
  I.see('Food enthusiast, photography fan. Add a pinch of raw foodism and thats pretty much who I am.');
});
