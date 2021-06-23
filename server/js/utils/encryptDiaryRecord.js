/**
 * Test initial value
 */
const input = [
  'У лукоморья дуб зелёный. Златая цепь на дубе том: И днём, и ночью кот учёный Всё ходит по цепи кругом.',
  'Идёт направо — песнь заводит, Налево — сказку говорит. Там чудеса: там леший бродит, Русалка на ветвях сидит.',
  'Там на неведомых дорожках Следы невиданных зверей. Избушка там на курьих ножках Стоит без окон, без дверей.'
];

/**
 * Additional functions
 */
const getInitialSequence = (value) => [...Array(value).keys()];
const encryptSequence = (initialSequence) => {
  let initialSequenceClone = initialSequence;
  let currentIndex = initialSequenceClone.length;
  let randomIndex;
  
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [initialSequenceClone[currentIndex], initialSequenceClone[randomIndex]] = [
      initialSequenceClone[randomIndex], initialSequenceClone[currentIndex]];
  }
  const randomSequence = initialSequenceClone;

  return randomSequence;
};

const encryptDiaryRecord = (input) => {
  let output = {
    paragraphs: {
      initialSequence: getInitialSequence(input.length),
      encryptedSequence: [],
    },
    sentences: {
      initialSequence: [],
      encryptedSequence: []
    }
  };
  
  // STEP 1. Save sequence of sentences
  output.sentences.initialSequence = getInitialSequence(input
    .join(' ')
    .split(/[.]\s[А-ЯA-Z]/g)
    .length
  );

  // STEP 2. Randomize paragraphs and sentences sequence
  output.paragraphs.encryptedSequence = encryptSequence(output.paragraphs.initialSequence);
  
  return output;
};

console.log(encryptDiaryRecord(input));