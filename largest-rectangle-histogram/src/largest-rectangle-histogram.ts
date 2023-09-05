export function largestRectangle(heights: number[]): number {
  let result = 0;
  let i = 0;

  const arr = [];

  while (i < heights.length) {
    if (!arr.length || heights[i] > heights[arr[arr.length - 1]]) {
      arr.push(i++);
    } else {
      const idx = arr.pop();
      result = Math.max(
        result,
        heights[idx] * (arr.length ? i - arr[arr.length - 1] - 1 : i)
      );
    }
  }
  return result;
}

// const heights = [2, 1, 5, 6, 2, 3];

// console.log(largestRectangle(heights));
