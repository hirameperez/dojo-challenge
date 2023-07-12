import { mergeSort, Item, printMinMax } from './merge-sort-shopping-list';

const mockList: Item[] = [
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

describe('Merge Sort Shopping List', () => {
  it('should return the same array', () => {
    const shoppingList: Item[] = [{ name: 'Doritos', 'price': 12, quantity: 3 }];

    expect(mergeSort(shoppingList)).toStrictEqual(shoppingList);
    expect(mergeSort([])).toStrictEqual([]);
  });

  it('should print an empty string', () => {
    expect(printMinMax([])).toBe('');
  });

  it('should print min to max', () => {
    const result = 'Doritos (2), Peanuts (3), Pizza (2), Beer (12)';

    expect(printMinMax(mockList)).toBe(result);
  });

  it('should print max to min', () => {
    const result = 'Beer (12), Pizza (2), Peanuts (3), Doritos (2)';

    expect(printMinMax(mockList, false)).toBe(result);
  });

  it('should sort the array', () => {
    const sortedArr = [
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
        name: 'Beer',
        price: 15,
        quantity: 12 
      },
      {
        name: 'Pizza',
        price: 120,
        quantity: 2 
      }
    ];

    expect(mergeSort(mockList)).toStrictEqual(sortedArr);
  });
});