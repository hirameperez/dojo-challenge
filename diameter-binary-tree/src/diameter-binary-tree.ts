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

export function getDiameter(root: Node): number {
  if (root === null) {
    return 0;
  }

  let max = 0;

  const dfs = function (node: Node) {
    if (node === null) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    max = Math.max(left + right, max);

    return Math.max(left, right) + 1;
  }

  dfs(root);

  return max;
}

// const root = new Node(1);

// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);

// console.log(getDiameter(root));
