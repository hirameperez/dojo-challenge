export default function twoSum (arr: number[], target: number): number[] {
  const dict: Record<string, number> = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const diff = target - element;
    
    if (Object.prototype.hasOwnProperty.call(dict, `${element}`)) {
      return [dict[`${element}`], i];
    }

    dict[`${diff}`] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
