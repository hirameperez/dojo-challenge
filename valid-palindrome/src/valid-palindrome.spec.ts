import { isPalindrome, normalizeStr } from './valid-palindrome';

describe('Valid Palindrome', () => {
  it('should normalize a string', () => {
    const str = 'Able was I, ere I saw Elba.';

    expect(normalizeStr(str)).toBe('ablewasiereisawelba');
  });

  it.each([
    '',
    'Able was I, ere I saw Elba.',
    '12321'
  ])('should return true', (str) => {
    const result = isPalindrome(str);

    expect(result).toBeTruthy();
  });
  
  it.each([
    'globant',
    '()()',
    '12345'
  ])('should return false', (str) => {
    const result = isPalindrome(str);

    expect(result).toBeFalsy();
  });
});