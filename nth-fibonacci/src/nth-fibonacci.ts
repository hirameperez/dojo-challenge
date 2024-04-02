export function nthFibonacci(n: number): number {
  if (n < 2) {
    return n
  }

  return nthFibonacci(n - 1) + nthFibonacci(n - 2)
}

export function iterativeFibonacci(n: number): number {
  if (n < 2) {
    return n
  }
  
  let result = [0, 1]
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 2] + result[i - 1])
  }

  return result[n]
}

// console.log(iterativeFibonacci(7));
// console.log(iterativeFibonacci(0));
// console.log(iterativeFibonacci(1));
// console.log(iterativeFibonacci(2));
// console.log(iterativeFibonacci(3));
// console.log(iterativeFibonacci(4));

// console.log(nthFibonacci(7));
// console.log(nthFibonacci(2));
// console.log(nthFibonacci(3));
// console.log(nthFibonacci(4));
