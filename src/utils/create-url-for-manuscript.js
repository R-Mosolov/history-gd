const translit = require('../data/languages/translit.json');

function createURLForManuscript(manuscriptTitle) {
  const inputSymbols = manuscriptTitle.split('');
  const outputSymbols = [];

  const result = inputSymbols.forEach((symbol) => {
    return outputSymbols = translit.find(() => symbol.cyrillic === symbol);
  });

  // Define a main title language
  // ...

  return console.log(result);
}

createURLForManuscript('Начала натуральной философии');