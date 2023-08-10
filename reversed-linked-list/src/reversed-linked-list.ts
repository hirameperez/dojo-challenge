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
      this.tail = newNode;
    }
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

  reverse() {
    if (!this.head) return;

    let prev = null;
    let next = null;
    let current = this.head;
    
    this.tail = this.head;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  isCycled(): boolean {
    return !!this.tail.next;
  }
}

// const values = [3, 2, 0, -4];
// const list = new LinkedList();

// values.forEach(val => list.add(val));
// console.log(list.print());

// list.reverse();
// console.log(list.print());
