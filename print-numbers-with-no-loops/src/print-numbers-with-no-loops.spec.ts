import { arrRange, printNumbers } from './print-numbers-with-no-loops';

describe('Print numbers with no loops', () => {
  it('should print numbers separated by commas', () => {
    const arr = [1, 2, 3];

    expect(printNumbers(arr)).toBe('1, 2, 3');
  });

  it('return an array of numbers', () => {
    const arr = arrRange(1, 10);

    expect(arrRange(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
