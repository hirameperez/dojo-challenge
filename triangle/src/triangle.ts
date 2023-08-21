export function triangleSum(triangle: number[][]): number {
  let currIndex = 0;
  let sum = 0;

  for (let i = 0; i < triangle.length; i++) {
    const row = triangle[i];
    
    if ((row[currIndex - 1] || Number.MAX_SAFE_INTEGER) < row[currIndex]) {
      if ((row[currIndex - 1] || Number.MAX_SAFE_INTEGER) < (row[currIndex + 1] || Number.MAX_SAFE_INTEGER)) {
        sum += row[currIndex - 1];
        currIndex = currIndex - 1;
      } else {
        sum += row[currIndex + 1];
        currIndex = currIndex + 1;
      }
    } else {
      if (row[currIndex] < (row[currIndex + 1] || Number.MAX_SAFE_INTEGER)) {
        sum += row[currIndex];
      } else {
        sum += row[currIndex + 1];
        currIndex = currIndex + 1;
      }
    }
  }
  return sum;
}

const triangle = [
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
];

// const triangle = [
//   [2],
//   [3, 4],
//   [6, 5, 7]
// ];

// console.log(triangleSum(triangle));
