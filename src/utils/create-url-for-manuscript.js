const URL_TRANSLIT = require('../data/languages/translit/url-translit.json');
const RUSSIAN_ALPHABET = require('../data/languages/russian-alphabet.json');
const ENGLISH_ALPHABET = require('../data/languages/english-alphabet.json');

const throwError = (errorText) => console.log(`ERROR: ${errorText}`);

function createURLForManuscript(manuscriptTitle) {
  let url = '';
  let inputSymbolsInLowerCase = [];
  let inputWordsInLowerCase = [];
  const outputSymbols = [];

  // Divide a manuscript title on separate letters and words
  const inputSymbols = manuscriptTitle.split('');
  console.log('inputSymbols:');
  console.log(inputSymbols);
  const inputWords = manuscriptTitle.split(' ');
  console.log('inputWords:');
  console.log(inputWords);

  // Transform all letters of manuscript title to lower case format
  inputSymbols.forEach((symbol) => inputSymbolsInLowerCase.push(symbol.toLowerCase()));
  console.log('inputSymbolsInLowerCase:');
  console.log(inputSymbolsInLowerCase);
  inputWords.forEach((word) => inputWordsInLowerCase.push(word.toLowerCase()));
  console.log('inputWordsInLowerCase:');
  console.log(inputWordsInLowerCase);

  // Add error handlers: check limits for an URL length
  if (inputSymbols.length > 1980) {
    return throwError('A manuscript title is more than 2000 symbols');
  } else {
    // Define a main title language
    inputWordsInLowerCase.forEach((word, wordIndex) => {
      let wordBySymbols = word.split('');
      let russianLettersCounter = 0;
      let englishLettersCounter = 0;
      let otherLettersCounter = 0;
      
      let isRussianWord = false;
      let isEnglishWord = false;
      let isOtherWord = false;
      
      // Calculate quantity of letters in different languages
      wordBySymbols.forEach((symbol) => {
        if (RUSSIAN_ALPHABET.find((russianSymbol) => russianSymbol === symbol)) {
          russianLettersCounter += 1;
        } else if (ENGLISH_ALPHABET.find((englishSymbol) => englishSymbol === symbol)) {
          englishLettersCounter += 1;
        } else {
          otherLettersCounter += 1;
        }
      });

      // Define a language 
      if ((russianLettersCounter * 100 / word.length) > 50) {
        isRussianWord = true;
        console.log(`${word} is Russian word`);
      } else if ((englishLettersCounter * 100 / word.length) > 50) {
        isEnglishWord = true;
        console.log(`${word} is English word`);
      } else {
        isOtherWord = true;
        console.log(`${word} is other word`);
      }

      // Append an URL link
      if (isRussianWord) {
        wordBySymbols.forEach((symbol, symbolIndex) => {
          return URL_TRANSLIT.map((_symbol) => {
            const isLastSymbol = symbolIndex === word.length - 1;
            const isLastWord = wordIndex === inputWordsInLowerCase.length - 1;

            if (_symbol.cyrillic === symbol) {
              return (isLastSymbol && !isLastWord)
                ? url += _symbol.latin + '-'
                : url += _symbol.latin;
            }
          });
        });
      } else if (isEnglishWord) {
        wordBySymbols.forEach((symbol, symbolIndex) => {
          const isLastSymbol = symbolIndex === word.length - 1;
          const isLastWord = wordIndex === inputWordsInLowerCase.length - 1;

          return (isLastSymbol && !isLastWord)
            ? url += symbol + '-'
            : url += symbol;
        });
      }
    });

    // // Convert a manuscript title to URL symbols
    // let URLSymbols = [];
    // inputSymbolsInLowerCase
    //   .forEach((symbol) => {
    //     return URL_TRANSLIT.map((_symbol) => {
    //       if (_symbol.cyrillic === symbol) {
    //         return URLSymbols.push(_symbol.latin);
    //       }
    //     });
    //   });
    // console.log('URLSymbols:');
    // console.log(URLSymbols);

    // Integrate URL symbols to create a full URL
    // URLSymbols.forEach((symbol) => url += symbol);
    console.log('url:');
    console.log(url);

    return;
  }
}

createURLForManuscript('Начала натуральной философии, Newton');