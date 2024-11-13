module.exports = async function (I) {

  const tableSelector = 'table:nth-of-type(1)';

  const lastCellTexts = await I.grabTextFrom(`${tableSelector} th:last-child, ${tableSelector} td:last-child`);

  const locationTotalTexts = lastCellTexts.slice(1, -1); // chop off first and last

  const sum = locationTotalTexts.reduce((acc, cur) => {
    acc += parseInt(cur);
    return acc;
  }, 0);

  I.say(`Expecting the "total of totals" to be ${sum}`);

  I.see(sum, `${tableSelector} tr:last-child th:last-child`);
}
