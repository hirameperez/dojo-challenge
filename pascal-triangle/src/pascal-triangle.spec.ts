import { pascalTriangle } from "./pascal-triangle";

describe("Pascal triangle", () => {
  it("should return an empty array", () => {
    const nRows = 0;

    expect(pascalTriangle(nRows)).toStrictEqual([]);
  });

  it("should return a single row", () => {
    const nRows = 1;

    expect(pascalTriangle(nRows)).toStrictEqual([[1]]);
  });

  it.each([
    [2, [[1], [1, 1]]],
    [3, [[1], [1, 1], [1, 2, 1]]],
    [4, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]],
    [5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]],
    [
      6,
      [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1],
      ],
    ],
  ])("should return the Pascal's triangle", (nRows, expected) => {
    expect(pascalTriangle(nRows)).toStrictEqual(expected);
  });
});
