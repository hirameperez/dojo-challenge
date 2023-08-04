import { isAmstrongNumber } from './amstrong-number';

describe('Amstrong Numbers', () => {
  it.each([
    123,
    4,
    999,
    0
  ])('should return false', (num) => {
    expect(isAmstrongNumber(num)).toBeFalsy();
  });

  it.each([
    153,
    371,
    407,
    8208
  ])('should return true', (num) => {
    expect(isAmstrongNumber(num)).toBeTruthy();
  });
});
