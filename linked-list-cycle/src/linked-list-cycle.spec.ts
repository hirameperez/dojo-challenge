import { LinkedList, Node } from './linked-list-cycle';

describe('Middle of a linked list', () => {
  it('should print the list if it is not cycled', () => {
    const values = [1, 2, 3];
    const pos = -1;
    const list = new LinkedList();

    list.addToHead(values, pos);

    expect(list.print()).toBe('1 -> 2 -> 3');
  });

  it('should not print the list if it is cycled', () => {
    const values = [1, 2, 3];
    const pos = 1;
    const list = new LinkedList();

    list.addToHead(values, pos);

    expect(list.print()).toBe('');
  });

  it('should not be cycled', () => {
    const values = [1];
    const pos = -1;
    const list = new LinkedList();

    list.addToHead(values, pos);

    expect(list.isCycled()).toBeFalsy();
  });

  it('should be cycled', () => {
    const values = [3, 2, 0, -4];
    const pos = 1;
    const list = new LinkedList();

    list.addToHead(values, pos);

    expect(list.isCycled()).toBeTruthy();
  });
});