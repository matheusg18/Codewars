// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

const likes = (names = []) => {
  const len = names.length;

  if (len === 0) return 'no one likes this';
  if (len === 1) return `${names[0]} likes this`;
  if (len === 2) return `${names[0]} and ${names[1]} like this`;
  if (len === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (len > 3) return `${names[0]}, ${names[1]} and ${len - 2} others like this`;
};

const assert = require('assert');
assert.strictEqual(likes([]), 'no one likes this');
assert.strictEqual(likes(['Peter']), 'Peter likes this');
assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Jhon', 'Anna', 'Lucas']), 'Alex, Jacob and 5 others like this');
