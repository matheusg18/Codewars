// https://www.codewars.com/kata/525f50e3b73515a6db000b83

const createPhoneNumber = (numbers = []) => `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;

const assert = require('assert');
assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890');
assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), '(111) 111-1111');
assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890');
