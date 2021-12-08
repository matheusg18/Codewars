// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function DNAStrand(dna) {
  const dnaEncryption = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  let complementaryDna = "";
  for (const dnaSymbol of dna) {
    complementaryDna += dnaEncryption[dnaSymbol];
  }
  return complementaryDna;
}
