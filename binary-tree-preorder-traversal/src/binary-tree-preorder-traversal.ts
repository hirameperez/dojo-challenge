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

function preorder(root: Node, out: number[]) {
  if (root === null) return;

  out.push(root.value);
  root.left && preorder(root.left, out);
  root.right && preorder(root.right, out);
}

export function getPreorder(root: Node) {
  let result = [];

  preorder(root, result);
  return result;
}
