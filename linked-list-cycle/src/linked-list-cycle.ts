/**
 * Challenge name: linked-list-cycle
 * Description: Given the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 */

export class Node {
  value: number;
  next: Node;

  constructor(val: number) {
    this.value = val;
    this.next = null;
  }
}

export class LinkedList {
  head: Node;
  tail: Node;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(val: number) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  print() {
    if (!this.head || this.isCycled()) return "";

    let current = this.head;
    const values = [current.value];

    while (current.next) {
      current = current.next;
      values.push(current.value);
    }

    return values.join(" -> ");
  }

  addToHead(arr: number[], pos: number) {
    if (!arr.length || this.head !== null) return;

    let counter = 0;
    let endNode: Node = null;

    do {
      const newNode = new Node(arr[counter]);

      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }

      if (counter === pos) {
        endNode = newNode;
      }
      counter++;
    } while (counter < arr.length);

    this.tail.next = endNode;
  }

  isCycled(): boolean {
    return !!this.tail.next;
  }
}

// const values = [3, 2, 0, -4];
// const list = new LinkedList();

// list.addToHead(values, 1);
// console.log(list.isCycled());
// console.log(list.print());

// const values = [1];
// const list = new LinkedList();

// list.addToHead(values, -1);
// console.log(list.isCycled());
// console.log(list.print());
