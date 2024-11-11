const assert = require('assert');

const shopInfo = {
    'Seattle': {
        id: 'seattle',
        minCustomers: 23,
        maxCustomers: 65,
        hourlyAverage: 6.3
    },
    'Tokyo': {
        id: 'tokyo',
        minCustomers: 3,
        maxCustomers: 24,
        hourlyAverage: 1.2
    },
    'Dubai': {
        id: 'dubai',
        minCustomers: 11,
        maxCustomers: 38,
        hourlyAverage: 3.7
    },
    'Paris': {
        id: 'paris',
        minCustomers: 20,
        maxCustomers: 38,
        hourlyAverage: 2.3
    },
    'Lima': {
        id: 'lima',
        minCustomers: 2,
        maxCustomers: 16,
        hourlyAverage: 4.6
    },
}

module.exports = async function checkShop(I, name) {

    const { id, minCustomers, maxCustomers, hourlyAverage } = shopInfo[name];

    I.amOnPage('/sales.html');

    I.see(name);

    I.say("I am checking each hours cookie sales");

    const items = await I.grabTextFrom(`#${id} li`);

    const minCookies = Math.ceil(minCustomers * hourlyAverage);

    const maxCookies = Math.ceil(maxCustomers * hourlyAverage);

    let total = 0;

    items.forEach((item, i) => {
        if (i < items.length - 1) {

            const regex = /^\d+(a|p)m: \d+/gm;

            assert(regex.test(item));

            const numCookies = parseInt(item.split(" ")[1]);

            total += numCookies;

            assert(minCookies <= numCookies <= maxCookies);
        }
    })

    const totalText = items[items.length - 1];

    I.say('Confirm correct total of cookies');

    assert(totalText == `Total: ${total} cookies`);
}
