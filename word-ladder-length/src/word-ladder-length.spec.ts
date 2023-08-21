import { getNextWords, wordLadderLength } from './word-ladder-length';

describe('Word Ladder Length', () => {
  it.each([
    ['met', 'ced', ['xet', 'ten', 'cet', 'lot', 'log'], 3],
    ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'], 5],

  ])('should return the word letter length', (start, end, dict, expected) => {
    expect(wordLadderLength(start, end, dict)).toBe(expected)
  });

  it.each([
    ['met', ['xet', 'ten', 'cet', 'lot', 'log', 'ced'], ['xet', 'cet']],
    ['xet', ['ten', 'cet', 'lot', 'log', 'ced'], ['cet']],
    ['hit', ['hot', 'dot', 'dog', 'lot', 'log'], ['hot']],
    ['hot', ['dot', 'dog', 'lot', 'log'], ['dot', 'lot']],
    ['foo', ['dot', 'dog', 'lot', 'log'], []],
  ])('should return the "next word" list', (word, wordList, expected) => {
    expect(getNextWords(word, new Set(wordList))).toStrictEqual(expected);
  });
});
