import { compareTriplets } from "./compare-triplets";

describe("compareTriplets", () => {
  it.each([
    [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1],
    ],
    [
      [17, 18, 30],
      [99, 16, 8],
      [2, 1],
    ],
    [
      [10, 15, 20],
      [5, 6, 7],
      [3, 0],
    ],
    [
      [6, 8, 12],
      [7, 9, 15],
      [0, 3],
    ],
  ])("should return an score", (a, b, expected) => {
    expect(compareTriplets(a, b)).toStrictEqual(expected);
  });
});
