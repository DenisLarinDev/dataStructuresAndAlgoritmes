import { LinkedList } from './LinkedList';

test('create empty list', () => {
  const linkedListTest = new LinkedList<number>();
  expect(linkedListTest.root).toBe(null);
});
test('add 1 as first element by add Node', () => {
  const linkedListTest = new LinkedList<number>();
  linkedListTest.addNode(1);
  expect(linkedListTest.root?.next).toBe(null);
  expect(linkedListTest.root?.value).toBe(1);
});

test('add 1 as first element by add NodeByIndex', () => {
  const linkedListTest = new LinkedList<number>();
  linkedListTest.addNodeByIndex(1, 213);
  expect(linkedListTest.root?.next).toBe(null);
  expect(linkedListTest.root?.value).toBe(1);
});

describe('linked list functions', function () {
  const linkedListTest = new LinkedList<number>();
  test('add 6 nodes', () => {
    linkedListTest.addNode(1);
    linkedListTest.addNode(2);
    linkedListTest.addNode(3);
    linkedListTest.addNode(4);
    linkedListTest.addNode(5);
    linkedListTest.addNode(6);
    expect(linkedListTest.toArray().length).toBe(6);
  });
  test('getLastNode', () => {
    expect(linkedListTest.getLastNode()?.value).toBe(6);
  });
  test('find by index', () => {
    expect(linkedListTest.findNodeByIndex(2)?.value).toBe(3);
  });
  test('find first node', () => {
    expect(linkedListTest.findNode(4)?.value).toBe(4);
  });
  test('remove node by index', () => {
    linkedListTest.removeNodeByIndex(3);
    expect(linkedListTest.toArray().length).toBe(5);
    expect(linkedListTest.findNodeByIndex(3)?.value).toBe(5);
    expect(linkedListTest.findNodeByIndex(2)?.value).toBe(3);
  });
  test('reverseList', () => {
    linkedListTest.addNodeByIndex(4, 3);
    linkedListTest.reverseList();
    expect(linkedListTest.toArray()).toStrictEqual([6, 5, 4, 3, 2, 1]);
  });
});
