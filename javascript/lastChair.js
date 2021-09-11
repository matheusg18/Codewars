// https://www.codewars.com/kata/542f0c36d002f8cd8a0005e5

const findMiddlePosition = (a, b) => Math.floor((a + b) / 2);

const findBiggestGap = (array = []) => {
  let biggestGap = [];
  let actualGap = [];

  array.forEach((element, index) => {
    if (element === null) {
      actualGap.push(index);
      biggestGap = actualGap.length > biggestGap.length ? actualGap : biggestGap;
    } else {
      actualGap = [];
    }
  });

  return biggestGap.length === 1
    ? [biggestGap[0], biggestGap[0]]
    : [biggestGap[0], biggestGap[biggestGap.length - 1]];
};

const lastChair = (N = 2) => {
  const array = new Array(N).fill(null);
  array[0] = 1;
  array[N - 1] = 2;

  for (let i = 3; i <= N; i++) {
    const middlePosition = findMiddlePosition(...findBiggestGap(array));
    array[middlePosition] = i;
  }

  return array.findIndex((element) => element === N) + 1;
};

const assert = require('assert');
assert.strictEqual(findMiddlePosition(2, 11), 6);
assert.strictEqual(findMiddlePosition(7, 10), 8);
assert.deepStrictEqual(findBiggestGap([null, null, 1]), [0, 1]);
assert.deepStrictEqual(findBiggestGap([1, null, null, null, '1']), [1, 3]);
assert.deepStrictEqual(findBiggestGap([null]), [0, 0]);
assert.strictEqual(lastChair(10), 9);
assert.strictEqual(lastChair(13), 12);
assert.strictEqual(lastChair(20), 19);
assert.strictEqual(lastChair(15), 14);
assert.strictEqual(lastChair(5), 4);
assert.strictEqual(lastChair(6), 5);
