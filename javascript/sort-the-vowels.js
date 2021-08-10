// https://www.codewars.com/kata/59e49b2afc3c494d5d00002a

function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  const charLowerCase = char.toLowerCase();
  return vowels.includes(charLowerCase);
}

function isValidInput(s) {
  return typeof s === typeof "";
}

function sortVowels(s) {
  if (!isValidInput(s)) return "";
  let vowelsSorted = "";
  for (const char of s) {
    if (isVowel(char)) {
      vowelsSorted += `|${char}\n`;
    } else {
      vowelsSorted += `${char}|\n`;
    }
  }
  return vowelsSorted.substr(0, vowelsSorted.length - 1);
}
