export function wordLadderLength(start: string, end: string, dict: string[]): number {
  const wordList = new Set([...dict, end]);
  let queue = [];
  let len = 0;

  queue.push(start);

  while (queue.length) {
    const word = queue.shift();
    len++;

    const nextWords = getNextWords(word, wordList);

    if (nextWords.includes(end)) {
      return len;
    }

    queue = queue.concat(nextWords);
  }

  return 0;
}

export function getNextWords(word: string, wordList: Set<string>): string[] {
  const nextWords = [];
  const wordListEntries = Array.from(wordList.values());

  for (let i = 0; i < word.length; i++) {
    const subWord = word.split('');
    subWord.splice(i, 1);

    for (let j = 0; j < wordListEntries.length; j++) {
      const subEntry = wordListEntries[j].split('');
      subEntry.splice(i, 1)

      if (subEntry.join() === subWord.join()) {
        nextWords.push(wordListEntries[j]);
        wordList.delete(wordListEntries[j]);    
      }
    }
  }
  return nextWords;
}

// const hit = 'hit';
// const hot = 'hot';

// console.log(wordLadderLength('met', 'ced', ['xet', 'ten', 'cet', 'lot', 'log']));
// console.log(wordLadderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));

// console.log(getNextWords('met', new Set(['xet', 'ten', 'cet', 'lot', 'log', 'ced'])));
// console.log(getNextWords('xet', new Set(['ten', 'cet', 'lot', 'log', 'ced'])));
// console.log(getNextWords('cet', new Set(['ten', 'lot', 'log', 'ced'])));

// console.log(getNextWords(hit, new Set(['hot', 'dot', 'dog', 'lot', 'log'])));
// console.log(getNextWords(hot, new Set(['dot', 'dog', 'lot', 'log'])));
