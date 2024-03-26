import { removeDuplicates } from "./remove-duplicates";
describe("Remove duplicated", () => {
  it('should return an array with the same length', () => {
    const nums = [1, 2, 3, 4];

    expect(removeDuplicates(nums)).toHaveLength(4);
  });
});
