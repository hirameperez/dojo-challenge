export function strCompression(str: string): string {
  let compressed = "";
  let prev = str[0];

  for (let i = 1; i < str.length; i++) {
    const curr = str[i];

    if (prev[0] !== curr) {
      compressed += `${prev[0]}${prev.length}`;
      prev = curr;
    } else {
      prev += curr;
    }
  }

  compressed += `${prev[0]}${prev.length}`;

  if (compressed.length >= str.length) return str;

  return compressed;
}

// console.log(strCompression("aabbbccca"));
