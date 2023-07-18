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

export function isBalanced(root: Node): boolean {
  const getHeight = (node: Node): number => {
    if (node === null) return 0;

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    const diff = Math.abs(leftHeight - rightHeight);

    if (leftHeight === -1 || rightHeight === -1 || diff > 1) {
      return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  };

  return getHeight(root) >= 0;
}
