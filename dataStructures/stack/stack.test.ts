import { Stack } from './stack';

describe('stack', function () {
  const stack = new Stack();
  test('is Empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });
  test('add element', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(1);
  });
  test('pop', () => {
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    stack.push(7);
    expect(stack.pop()).toBe(7);
    expect(stack.pop()).toBe(6);
    expect(stack.pop()).toBe(5);
  });

  test('size', () => {
    expect(stack.size()).toBe(4);
  });
});
