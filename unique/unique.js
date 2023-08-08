function difference(arrOne, arrTwo) {
  const result = [];
  for (let i = 0; i < arrTwo.length; i++) {
    const element = arrTwo[i];
    if (Array.isArray(element)) {
      element.forEach((e) => {
        number = extractFromArray(e);
        if (arrOne.indexOf(number) === -1) {
          result.push(number);
        }
      });
    } else {
      if (arrOne.indexOf(element) === -1) {
        result.push(element);
      }
    }
  }
  return arrOne.concat(result);
}

function extractFromArray(arr) {
  if (!Array.isArray(arr)) return arr;

  return extractFromArray(arr[0]);
}

// Coding Challenge
// Write a JavaScript function to find the unique elements from two arrays.
// Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Expected Output [“1”, “2", “3”, “10", “100”]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
// Expected Output [“1", “2”, “3", “4”, “5", “6”]
