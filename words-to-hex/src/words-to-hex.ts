export function wordToHex(word: string): string {
  let hexWord = "#";
  let index = 0;

  while (hexWord.length <= 6) {
    if (!word[index]) {
      hexWord += "00";
    } else {
      hexWord += word.charCodeAt(index).toString(16);
    }
    index++;
  }
  return hexWord;
}

export function phraseToHex(phrase: string): string[] {
  return phrase.split(" ").map(word => wordToHex(word));
}

// const word = "Hello";
// console.log(wordToHex(word));
