const { utils } = require('../../utils');

const DIGIT: number = 1;

/**
 * TEST CASES 1: Result existence
 */
test.each([
  [utils.addID(), null],
  [utils.addID(), undefined],
  [utils.addID(), []],
  [utils.addID(), ''],
])(
  `1. Length of an ID should be exist (not equals null, undefined, [], and '')`,
  (input, output) => {
    expect(input).not.toBe(output);
  }
);

/**
 * TEST CASES 2: Length of a result
 */
test('2.1. Length of an ID should be contain 5 symbols', () => {
  expect(utils.addID().length).toBe(5);
});
test('2.2. Length of an ID should NOT be contain 4 symbols', () => {
  expect(utils.addID().length).not.toBe(4);
});
test('2.3. Length of an ID should NOT be contain 6 symbols', () => {
  expect(utils.addID().length).not.toBe(6);
});

/**
 * TEST CASES 3: Symbols of an result
 */
// TODO: Use Array.prototype.some() to optimize it
test.each([
  [utils.addID()[0], '0'],
  [utils.addID()[0], '1'],
  [utils.addID()[0], '2'],
  [utils.addID()[0], '3'],
  [utils.addID()[0], '4'],
  [utils.addID()[0], '5'],
  [utils.addID()[0], '6'],
  [utils.addID()[0], '7'],
  [utils.addID()[0], '8'],
  [utils.addID()[0], '9'],
])(
  `3.1. 1st symbol of an ID should not be a number (0-9)`,
  (input, output) => {
    expect(input).not.toBe(output);
  }
);
test.each([
  [utils.addID()[2], '0'],
  [utils.addID()[2], '1'],
  [utils.addID()[2], '2'],
  [utils.addID()[2], '3'],
  [utils.addID()[2], '4'],
  [utils.addID()[2], '5'],
  [utils.addID()[2], '6'],
  [utils.addID()[2], '7'],
  [utils.addID()[2], '8'],
  [utils.addID()[2], '9'],
])(
  `3.2. 3rd symbol of an ID should not be a number (0-9)`,
  (input, output) => {
    expect(input).not.toBe(output);
  }
);
test.each([
  [utils.addID()[4], '0'],
  [utils.addID()[4], '1'],
  [utils.addID()[4], '2'],
  [utils.addID()[4], '3'],
  [utils.addID()[4], '4'],
  [utils.addID()[4], '5'],
  [utils.addID()[4], '6'],
  [utils.addID()[4], '7'],
  [utils.addID()[4], '8'],
  [utils.addID()[4], '9'],
])(
  `3.3. 5th symbol of an ID should not be a number (0-9)`,
  (input, output) => {
    expect(input).not.toBe(output);
  }
);

/**
 * TEST CASES 4: Type of an result
 */
test('4. Result of an ID should be string type', () => {
  expect(typeof utils.addID() === 'string').toBe(true);
});