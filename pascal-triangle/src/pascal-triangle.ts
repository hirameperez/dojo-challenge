export function pascalTriangle(rows: number): number[][] {
  if (rows === 0) return [];

  const triangle = [[1]];

  if (rows === 1) return triangle;

  for (let i = 0; i < rows - 1; i++) {
    const row = [1];
    for (let j = 1; j <= i + 1; j++) {
      row[j] = triangle[i][j] ? triangle[i][j - 1] + triangle[i][j] : 1;
    }
    triangle.push(row);
  }
  return triangle;
}

// console.log(pascalTriangle(3));
