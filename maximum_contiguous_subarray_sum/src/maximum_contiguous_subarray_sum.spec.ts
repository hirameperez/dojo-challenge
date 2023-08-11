import { maxArr } from './maximum_contiguous_subarray_sum';

describe('Maximum contiguos_subarray_sum', () => {
  it.each([
    [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
    [[-1, -2, -3, -4, -5], -1],
    [[1, 2, 3, 4, 5], 15],
    [[2, -1, 4, -2, 5, -3, 6, -4, 7], 14]
  ])('should return the maximum contiguous sum', (arr, expected) => {
    expect(maxArr(arr)).toBe(expected);
  });
});
