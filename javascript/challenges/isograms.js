// https://www.codewars.com/kata/54ba84be607a92aa900000f1

const isIsogram = (word = '') => {
  for (const char of word) {
    if (word.match(new RegExp(char, 'gi')).length > 1) return false;
  }

  return true;
};

const assert = require('assert');
assert.strictEqual(isIsogram('Dermatoglyphics'), true);
assert.strictEqual(isIsogram('isogram'), true);
assert.strictEqual(isIsogram('aba'), false, 'same chars may not be adjacent');
assert.strictEqual(isIsogram('moOse'), false, 'same chars may not be same case');
assert.strictEqual(isIsogram('isIsogram'), false);
assert.strictEqual(isIsogram(''), true, 'an empty string is a valid isogram');
