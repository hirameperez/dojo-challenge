import { getPreorder, Node } from "./binary-tree-preorder-traversal";
describe("Binary tree preorder traversal", () => {
  it("should return an empty array", () => {
    const root = null;

    expect(getPreorder(root)).toStrictEqual([]);
  });

  it("should get the preorder tree", () => {
    const root = new Node(1);

    root.left = new Node(7);
    root.right = new Node(9);
    root.left.left = new Node(2);
    root.left.right = new Node(6);
    root.left.right.left = new Node(5);
    root.left.right.right = new Node(11);
    root.right.right = new Node(9);
    root.right.right.left = new Node(5);

    expect(getPreorder(root)).toStrictEqual([1, 7, 2, 6, 5, 11, 9, 9, 5]);
  });
});
