export function longestSequence(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const numsSorted = mergeSort(arr);
  let result = [numsSorted[0]];
  let temp = [numsSorted[0]];

  for (let i = 0; i < numsSorted.length; i++) {
    if (numsSorted[i + 1] === numsSorted[i] + 1) {
      temp.push(numsSorted[i + 1]);
      if (temp.length > result.length) {
        result = temp;
      }
    } else {
      temp = [];
      temp.push(numsSorted[i + 1]);
    }
  }
  return result;
}

export function merge(left: number[], right: number[]): number[] {
  let sortedArr: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  if (left.length) {
    sortedArr = sortedArr.concat(left);
  }
  if (right.length) {
    sortedArr = sortedArr.concat(right);
  }

  return sortedArr;
}

export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);
  const left = arr.slice(0, half);
  const right = arr.slice(half, arr.length);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

// const arr = [2, 4, 1, 7];
// const arr = [100, 4, 200, 1, 3, 2];
// const arr = [1, 2, 3, 6, 8, 10, 5, 7, 11];
// console.log(mergeSort(arr));
// console.log(longestSequence(arr));
