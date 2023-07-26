import { strCompression } from './basic-string-compression';

describe('Basic String Compression', () => {
  it('should return the same string', () => {
    const str = 'abc';

    expect(strCompression(str)).toBe(str);
  });

  it.each([
    ['aaabbcc', 'a3b2c2'],
    ['aabcccccaaa', 'a2b1c5a3'],
    ['xxxxllllltttt', 'x4l5t4']
  ])('should compress the string', (str, expected) => {
    expect(strCompression(str)).toBe(expected);
  });
});