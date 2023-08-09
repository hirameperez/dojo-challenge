import { isUgly, uglyNth } from './ugly-number';

describe('Ugly numbers', () => {
  it.each([1, 2, 3, 4, 5, 6, 8, 9, 10, 12])('should be ugly numbers', (num) => {
    expect(isUgly(num)).toBeTruthy();
  });

  it.each([7, 11, 13, 17])('should not be ugly numbers', (num) => {
    expect(isUgly(num)).toBeFalsy();
  });

  it.each([
    [1, 1],
    [2, 2],
    [7, 8],
    [9, 10],
    [10, 12]
  ])('should return the nth ugly number', (num, expected) => {
    expect(uglyNth(num)).toBe(expected);
  });
});
