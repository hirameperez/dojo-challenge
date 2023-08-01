export function printNumbers(arr: number[]): string {
  return arr.join(', ');
}

export function arrRange(start: number, end: number): number[] {
  if (start === end) return [start];

  return [start].concat(arrRange(start + 1, end));
}

// console.log(arrRange(1, 10));
