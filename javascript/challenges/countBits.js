// https://www.codewars.com/kata/526571aae218b8ee490006f4

const countBits = (number) => number.toString(2).split('1').length - 1;

module.exports = countBits;
