import { triangleSum } from './triangle';

describe('Triangle', () => {
  it.each([
    [[[2]], 2],
    [[[2], [3, 4]], 5],
    [[[2], [3, 4], [6, 5, 7]], 10],
    [[[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]], 11]
  ])('should return the minimum path sum', (arr, expected) => {
    expect(triangleSum(arr)).toBe(expected);
  });
});
