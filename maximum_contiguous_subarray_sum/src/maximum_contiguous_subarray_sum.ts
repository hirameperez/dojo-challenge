export function maxArr(arr: number[]): number {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(0, arr[i - 1]) + arr[i];

    if (arr[i] > max) max = arr[i];
  }
  return max;
}