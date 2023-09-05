import { largestRectangle } from "./largest-rectangle-histogram";

describe("Largest Rectangle in Histogram", () => {
  it("should return the largest rectangle area", () => {
    const heights = [2, 1, 5, 6, 2, 3];

    expect(largestRectangle(heights)).toBe(10);
  });
});
