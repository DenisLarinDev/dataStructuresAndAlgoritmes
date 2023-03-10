interface ILinkedListNode<T> {
  value: T;
  next: ILinkedListNode<T> | null;
}

export class LinkedListNode<T> implements ILinkedListNode<T> {
  next: ILinkedListNode<T> | null;
  value: T;

  constructor(value: T, next: ILinkedListNode<T> | null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList<T> {
  root: ILinkedListNode<T> | null;
  private tail: ILinkedListNode<T> | null;

  constructor() {
    this.root = null;
    this.tail = null;
  }

  public isEmpty() {
    return this.root === null;
  }

  public addNode(value: T) {
    const node = new LinkedListNode<T>(value, null);
    if (!this.root) {
      this.root = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
  }

  public addNodeByIndex(value: T, index: number) {
    const nodeByIndex = this.findNodeByIndex(index);
    const previousNodeByIndex = this.findNodeByIndex(index - 1);
    if (!previousNodeByIndex && nodeByIndex) {
      this.root = new LinkedListNode(value, this.root);
    } else if (!nodeByIndex) {
      const lastNode = this.getLastNode();
      if (lastNode) {
        const newNode = new LinkedListNode<T>(value, null);
        lastNode.next = newNode;
        this.tail = newNode;
      } else {
        const newNode = new LinkedListNode(value, null);
        this.root = newNode;
        this.tail = newNode;
      }
    } else if (nodeByIndex && previousNodeByIndex) {
      previousNodeByIndex.next = new LinkedListNode(value, nodeByIndex);
    }
  }

  public getLastNode(): ILinkedListNode<T> | null {
    return this.tail;
  }

  public findNodeByIndex(index: number): ILinkedListNode<T> | null {
    if (index < 0) return null;
    let iterator = this.root;
    let iteratorIndex = 0;
    while (iteratorIndex !== index && iterator) {
      iteratorIndex++;
      iterator = iterator?.next || null;
    }
    return iterator;
  }

  public findNode(value: T): ILinkedListNode<T> | null {
    let iterator = this.root;
    while (iterator) {
      if (iterator.value === value) return iterator;
      iterator = iterator.next;
    }
    return null;
  }

  public removeNodeByIndex(index: number) {
    const currentNode = this.findNodeByIndex(index);
    if (currentNode) {
      const previousNode = this.findNodeByIndex(index - 1);
      if (previousNode) {
        previousNode.next = currentNode.next;
      }
    }
  }

  public printList() {
    let iterator = this.root;
    while (iterator !== null) {
      console.log('iterator.value -> ', iterator.value);
      iterator = iterator.next;
    }
  }

  public toArray() {
    const array: T[] = [];
    let iterator = this.root;
    while (iterator) {
      array.push(iterator.value);
      iterator = iterator.next;
    }
    return array;
  }

  public reverseList() {
    const listData = this.toArray().reverse();
    const root = new LinkedListNode<T>(listData[0], null);
    let iterator = root;
    for (let i = 1; i < listData.length; i++) {
      iterator.next = new LinkedListNode<T>(listData[i], null);
      iterator = iterator.next;
    }
    this.root = root;
    return this;
  }
}
