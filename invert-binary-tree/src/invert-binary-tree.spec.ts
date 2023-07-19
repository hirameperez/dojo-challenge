import { invert, print, Node } from "./invert-binary-tree";

describe("Invert binary tree", () => {
  it("should return an empty array if the tree is empty", () => {
    const invertedTree = invert(null);

    expect(print(invertedTree)).toStrictEqual([]);
  });

  it("should return an inverted binary tree", () => {
    let root = new Node(2);

    root.left = new Node(1);
    root.right = new Node(3);

    let invertedTree = invert(root);

    expect(print(invertedTree)).toStrictEqual([2, 3, 1]);

    root = new Node(4);

    root.left = new Node(2);
    root.right = new Node(7);
    root.left.left = new Node(1);
    root.left.right = new Node(3);
    root.right.left = new Node(6);
    root.right.right = new Node(9);

    invertedTree = invert(root);

    expect(print(invertedTree)).toStrictEqual([4, 7, 2, 9, 6, 3, 1]);
  });
});
