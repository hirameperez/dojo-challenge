export interface Item {
  name: string;
  price: number;
  quantity: number;
}

export function merge(left: Item[], right: Item[]): Item[] {
  let sortedArr: Item[] = [];

  while(left.length && right.length) {
    if ((left[0].price * left[0].quantity) < (right[0].price * right[0].quantity)) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  if (left.length) {
    sortedArr = sortedArr.concat(left);
  }
  if (right.length) {
    sortedArr = sortedArr.concat(right);
  }

  return sortedArr;
}

export function mergeSort(arr: Item[]) {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);
  const left = arr.slice(0, half);
  const right = arr.slice(half, arr.length);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);
  
  return merge(leftSorted, rightSorted);
}

export function printMinMax(items: Item[], min = true): string {
  if (!items.length) {
    return '';
  }

  let result = [];

  if (min) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
  
      result.push(`${item.name} (${item.quantity})`);
    }
  } else {
    for (let i = items.length -1 ; i >= 0; i--) {
      const item = items[i];
  
      result.push(`${item.name} (${item.quantity})`);
    }
  }

  
  return result.join(', ');
}

const itemsOne: Item[] = [
  {
    name: 'Doritos',
    price: 25,
    quantity: 2 
  },
  {
    name: 'Peanuts',
    price: 20,
    quantity: 3 
  },
  {
    name: 'Pizza',
    price: 120,
    quantity: 2 
  },
  {
    name: 'Beer',
    price: 15,
    quantity: 12 
  }
];

console.log(printMinMax(itemsOne, false));
