import binarySearch from "./binary-search";

describe("Binary search", () => {
  it("should return -1 when the array is empty", () => {
    const arr = [];

    expect(binarySearch(arr, 1)).toBe(-1);
  });

  it("should return -1 if the element is not found", () => {
    const arr = [-1, 4, 7, 8, 12];
    const element = 3;

    expect(binarySearch(arr, element)).toBe(-1);
  });

  it("should return the index of the element in the array", () => {
    const arr = [-1, 0, 3, 5, 9, 12];
    const element = 9;

    expect(binarySearch(arr, element)).toBe(4);
  });
});
