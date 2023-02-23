type StackItem<T> = T;

interface IStack<T> {
  push: (element: T) => void;
  pop: () => StackItem<T> | null;
  peek: () => StackItem<T> | null;
  isEmpty: () => boolean;
  size: () => number;
}

export class Stack<T> implements IStack<T> {
  private stack: StackItem<T>[];

  constructor() {
    this.stack = [];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  push(element: T): void {
    this.stack.unshift(element);
  }

  pop(): StackItem<T> | null {
    const element = this.peek();
    this.stack = this.stack.slice(1);
    return element;
  }

  peek(): StackItem<T> | null {
    return this.stack[0] ?? null;
  }

  size(): number {
    return this.stack.length;
  }
}
