// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers = [], target) {
  const indexes = [];

  numbers.forEach((num, firstIndex) => {
    const match = numbers.findIndex(
      (innerNum, secondIndex) => firstIndex !== secondIndex && num + innerNum === target
    );

    if (match !== -1) indexes.push([firstIndex, match]);
  });

  return indexes[0];
}

// Tests
describe('=== twoSum ===', () => {
  it('should pass', () => {
    const numericalCompare = (a, b) => a - b;

    expect(twoSum([1, 2, 3], 4).sort(numericalCompare)).toEqual([0, 2]);
    expect(twoSum([1234, 5678, 9012], 14690).sort(numericalCompare)).toEqual([1, 2]);
    expect(twoSum([2, 2, 3], 4).sort(numericalCompare)).toEqual([0, 1]);
  });
});
