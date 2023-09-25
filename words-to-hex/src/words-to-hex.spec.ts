import { phraseToHex, wordToHex } from "./words-to-hex";

describe("Words to Hex", () => {
  it.each([
    ["I", "#490000"],
    ["It", "#497400"],
    ["Hello", "#48656c"],
  ])("should return the hex string", (word, expected) => {
    expect(wordToHex(word)).toBe(expected);
  });

  it.each([
    ["It", ["#497400"]],
    ["Hello world", ["#48656c", "#776f72"]],
    [
      "Hello, my name is Gary and I like cheese.",
      [
        "#48656c",
        "#6d7900",
        "#6e616d",
        "#697300",
        "#476172",
        "#616e64",
        "#490000",
        "#6c696b",
        "#636865",
      ],
    ],
  ])("should return an array of hex strings", (phrase, expected) => {
    expect(phraseToHex(phrase)).toStrictEqual(expected);
  });
});
