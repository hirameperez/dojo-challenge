import twoSum from './two-sum';

describe('Two sum', () => {
  it('should return [0, 1]', () => {
    const result = twoSum([2, 7, 11, 15], 9);

    expect(result).toStrictEqual([0, 1]);
  });

  it('should return [1, 2]', () => {
    const result = twoSum([3, 2, 4], 6);

    expect(result).toStrictEqual([1, 2]);
  });

  it('should return [0, 1]', () => {
    const result = twoSum([3, 3], 6);

    expect(result).toStrictEqual([0, 1]);
  });
});
