import { Node, getDiameter } from './diameter-binary-tree';

describe('Diameter binary tree', () => {
  it('should return the diameter', () => {
    let root = new Node(1);

    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    expect(getDiameter(root)).toBe(3);

    root = new Node(1);

    root.left = new Node(2);
    expect(getDiameter(root)).toBe(1);
  });
});