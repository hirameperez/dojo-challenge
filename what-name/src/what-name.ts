export function whatName(
  names: { first: string; last: string | null }[],
  value: { first?: string; last?: string }
): {
  first: string;
  last: string | null;
} {
  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    if (name.first === value.first || name.last === value.last) {
      return name;
    }
  }
}

const names = [
  {
    first: "Mercutio",
    last: null,
  },
  {
    first: "Tybalt",
    last: "Capulet",
  },
  {
    first: "Romeo",
    last: "Montague",
  },
];

// const result = whatName(names, { last: "Capulet" });
// console.log(result);
