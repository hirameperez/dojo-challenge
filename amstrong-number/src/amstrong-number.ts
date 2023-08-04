export function isAmstrongNumber(num: number): boolean {
  if (num === 0 || num < 10) return false;

  const strNumber = `${num}`;
  const strLength = strNumber.length;
  let total = 0;

  for (let i = 0; i < strLength; i++) {
    const digit = parseInt(strNumber[i], 10);
    total += Math.pow(digit, strLength);
  }

  return total === num;
}

// console.log(isAmstrongNumber(153)); // true
// console.log(isAmstrongNumber(123)); // false
// console.log(isAmstrongNumber(8208)); // true
