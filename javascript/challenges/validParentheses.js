// https://www.codewars.com/kata/52774a314c2333f0a7000688

const validParentheses = (parens) => {
  let opened = 0;
  let closed = 0;

  for (const char of parens) {
    if (char === '(') opened++;
    if (char === ')') closed++;
    if (closed > opened) return false;
  }

  if (opened === closed) return true;

  return false;
};

module.exports = validParentheses;
