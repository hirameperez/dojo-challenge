export function isPalindrome(str: string): boolean {
  const normalizedStr = normalizeStr(str);
  for (
    let i = 0, j = normalizedStr.length - 1;
    i < normalizedStr.length;
    i++, j--
  ) {
    if (normalizedStr[i] !== normalizedStr[j]) return false;
  }
  return true;
}

export function normalizeStr(str: string): string {
  return str
    .trim()
    .toLocaleLowerCase("en-US")
    .replace(/((&quot)|[\/\\"“”'\.,;:-])+/g, "")
    .normalize("NFKD")
    .replace(/[ ]+/g, "")
    .replace(/\p{Diacritic}/gu, "");
}

// console.log(normalizeStr("Able was I, ere I saw Elba."));
// console.log(isPalindrome("Able was I, ere I saw Elba."));
