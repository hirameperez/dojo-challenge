import { nthFibonacci } from "./nth-fibonacci";
import { iterativeFibonacci } from "./nth-fibonacci";

describe("Recursive nthFibonacci", () => {
  it.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
    [8, 21],
  ])("should return the nth member of the fibonacci sequence", (n, expected) => {
    expect(nthFibonacci(n)).toBe(expected);
  });
});

describe("Iterative nthFibonacci", () => {
  it.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
    [8, 21],
  ])("should return the nth member of the fibonacci sequence", (n, expected) => {
    expect(iterativeFibonacci(n)).toBe(expected);
  });
});
