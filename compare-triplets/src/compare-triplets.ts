export function compareTriplets(a: number[], b: number[]): number[] {
  let scoreA = 0;
  let scoreB = 0;

  for (let i = 0; i < a.length && i < b.length; i++) {
    if (a[i] > b[i]) {
      scoreA++;
    } else if (a[i] < b[i]) {
      scoreB++;
    }
  }

  const result = [scoreA, scoreB];
  return result;
}

// console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
// console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
