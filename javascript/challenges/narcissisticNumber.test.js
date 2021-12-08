// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  const digits = value.toString().split('').map(Number);
  const len = digits.length;

  return digits.reduce((acc, digit) => acc + digit ** len, 0) === value;
}

// Tests
describe('=== narcissisticNumber ===', () => {
  const narcissistics = [0, 1, 2, 3, 4, 5, 6, 7, 153, 370, 407, 1634, 8208, 9474];
  const nonNarcissistics = [20, 42, 123, 546, 88, 17, 100, 999];

  it('should be narcissistics', () => {
    narcissistics.forEach((num) => expect(narcissistic(num)).toBe(true));
  });

  it('should not be narcissistics', () => {
    nonNarcissistics.forEach((num) => expect(narcissistic(num)).toBe(false));
  });
});
