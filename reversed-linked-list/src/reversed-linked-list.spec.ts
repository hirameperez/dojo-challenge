import { LinkedList } from './reversed-linked-list';

describe('Reversed linked list', () => {
  it.each([
    [[5, 1, 4, 2, 8], '8 -> 2 -> 4 -> 1 -> 5'],
    [[1, 2, 3, 4], '4 -> 3 -> 2 -> 1'],
    [[4, 2, 8], '8 -> 2 -> 4'],
    [[-8, 8, 2, 7], '7 -> 2 -> 8 -> -8'],
  ])('should reverse a linked list', (values, expected) => {
    const list = new LinkedList();

    values.forEach(val => list.add(val));
    list.reverse();

    expect(list.print()).toBe(expected);
  });
});