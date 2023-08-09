export function isUgly(num: number): boolean {
  return num === 1 || num % 2 === 0 || num % 3 === 0 || num % 5 === 0;
}

export function uglyNth(n: number): number {
  let counter = 1;
  let nth = 1;
  let ugly = 1;

  while (nth <= n) {
    // console.log(counter, isUgly(counter))
    if (isUgly(counter)) {
      ugly = counter;
      nth++;
    }
    counter++;
  }
  return ugly;
}

// console.log(isUgly(2));
// console.log(isUgly(3));
// console.log(isUgly(5));
// console.log(isUgly(6));
// console.log(isUgly(7));
// console.log(isUgly(11));
console.log(uglyNth(1));
console.log(uglyNth(10));
