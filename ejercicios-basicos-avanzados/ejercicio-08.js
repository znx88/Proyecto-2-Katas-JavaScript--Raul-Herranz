const avengers = [
 "Hulk",
 "Thor",
 "Iron Man",
 "Captain A.",
 "Spiderman",
 "Captain M.",
];


function findLongestWord(stringList) {
  let longestWord = "";
  for (const word of stringList) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord(avengers));