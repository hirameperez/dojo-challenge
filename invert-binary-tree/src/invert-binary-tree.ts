export class Node {
  left: Node;
  right: Node;
  value: number;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  isLeaf(): boolean {
    return this.left === null && this.right === null;
  }
}

export function invert(root: Node) {
  if (root === null) return null;

  const aux = root.left;
  root.left = root.right;
  root.right = aux;

  invert(root.left);
  invert(root.right);

  return root
}

export function print(root: Node): number[] {
  if (!root) return [];

  const list = [];
  const queue = [root];

  while (queue.length) {
    const curr = queue.shift();
    list.push(curr.value);

    if (curr.left) {
      queue.push(curr.left);
    }

    if (curr.right) {
      queue.push(curr.right);
    }
  }

  return list;
}
