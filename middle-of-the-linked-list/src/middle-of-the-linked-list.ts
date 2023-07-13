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
  size: number;

  constructor () {
    this.head = null;
    this.size = 0;
  }

  add(val: number) {
    const newNode = new Node(val);
   
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  print() {
    if (!this.head) return '';

    let current = this.head;
    const values = [current.value];

    while(current.next) {
      current = current.next;
      values.push(current.value);
    }

    return values.join(' -> ');
  }

  getMiddle() {
    if (!this.head) return null;

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.value;
  }
}

// const list = new LinkedList();

// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
// list.add(6);

// console.log(list.print());
// console.log(list.getMiddle());
