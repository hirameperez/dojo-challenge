import { longestSequence, mergeSort } from './longest-consecutive-sequence';

describe('Longest Consecutive Sequence', () => {
  it.each([
    [[4, 2, 7, 5], [2, 4, 5, 7]],
    [[1, 3, 2, 4, 5], [1, 2, 3, 4, 5]],
    [[8, 2, 1], [1, 2, 8]],
  ])('should sort the arrays', (arr, expected) => {
    expect(mergeSort(arr)).toStrictEqual(expected);
  });

  it.each([
    [[1], [1]],
    [[], []]
  ])('should return the same arr', (arr, expected)=> {
    expect(longestSequence(arr)).toStrictEqual(expected);
  });

  it.each([
    [[100, 4, 200, 1, 3, 2], [1, 2, 3, 4]],
    [[1, 2, 3, 6, 8, 10, 5, 7], [5, 6, 7, 8]],
    [[2, 4, 1, 7], [1, 2]],
  ])('should return the longest consecutive sequence arr', (arr, expected) => {
    expect(longestSequence(arr)).toStrictEqual(expected);
  });
});
