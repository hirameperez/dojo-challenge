import { isBalanced, Node } from "./balanced-binary-tree";

describe("Balanced binary tree", () => {
  it("should return true when the tree is empty", () => {
    const node = null;

    expect(isBalanced(node)).toBeTruthy();
  });

  it('should return true', () => {
    const root = new Node(3);

    root.left = new Node(9);
    root.right = new Node(20);
    root.right.left = new Node(15);
    root.right.right = new Node(7);

    expect(isBalanced(root)).toBeTruthy();
  });

  it('should return false', () => {
    const root = new Node(1);

    root.left = new Node(2);
    root.right = new Node(2);
    root.left.left = new Node(3);
    root.left.right = new Node(3);
    root.left.left.left = new Node(4);
    root.left.left.left = new Node(4);

    expect(isBalanced(root)).toBeFalsy();
  });
});
