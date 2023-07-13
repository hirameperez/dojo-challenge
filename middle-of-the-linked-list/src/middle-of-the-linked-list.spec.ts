import { LinkedList, Node } from './middle-of-the-linked-list';

describe('Middle of a linked list', () => {
  it('should print the list', () => {
    const list = new LinkedList();

    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.print()).toBe('1 -> 2 -> 3');
  });

  it('should return the middle value', () => {
    const list = new LinkedList();

    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

    expect(list.getMiddle()).toBe(3);
    
    list.add(6);
    expect(list.getMiddle()).toBe(4);
  });
});