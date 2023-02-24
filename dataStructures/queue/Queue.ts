type QueueItem<T> = T;

interface IQueue<T> {
  enqueue: (item: QueueItem<T>) => void;
  dequeue: () => QueueItem<T> | null;
  peek: () => QueueItem<T> | null;
  isEmpty: () => boolean;
  size: () => number;
}

export class Queue<T> implements IQueue<T> {
  private queue: QueueItem<T>[];

  constructor() {
    this.queue = [];
  }

  enqueue(item: T): void {
    if (this.isEmpty()) {
      this.queue[0] = item;
    } else this.queue[this.size()] = item;
  }

  dequeue(): QueueItem<T> | null {
    const element = this.peek();
    this.queue = this.queue.slice(1);
    return element;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  peek(): QueueItem<T> | null {
    return this.queue[0] || null;
  }

  size(): number {
    return this.queue.length;
  }

  print() {
    for (const item of this.queue) {
      console.log('item -> ', item);
    }
  }
}
