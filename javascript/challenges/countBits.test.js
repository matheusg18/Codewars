// https://www.codewars.com/kata/526571aae218b8ee490006f4

const countBits = (number) => number.toString(2).split('1').length - 1;

describe('=== countBits ===', () => {
  it('Testing for fixed tests', () => {
    expect(countBits(0)).toBe(0);
    expect(countBits(4)).toBe(1);
    expect(countBits(7)).toBe(3);
    expect(countBits(9)).toBe(2);
    expect(countBits(10)).toBe(2);
    expect(countBits(8)).toBe(1);
    expect(countBits(12)).toBe(2);
  });
});
