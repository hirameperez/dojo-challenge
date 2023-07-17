export default function binarySearch(
  arr: number[],
  target: number,
  startIndex = 0,
  endIndex = arr.length -1
) {
  if (!arr.length || startIndex > endIndex) return -1;

  const middle = Math.floor((startIndex + endIndex) / 2);

  if (target === arr[middle]) return middle;

  if (target < arr[middle]) return binarySearch(arr, target, startIndex, middle -1);
  else return binarySearch(arr, target, middle + 1, endIndex);
}
