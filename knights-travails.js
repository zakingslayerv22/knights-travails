class Queue {
  constructor(items = []) {
    this.items = items;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.isEmpty() ? "Queue is empty" : this.items.shift();
  }

  size() {
    return this.items.length;
  }
}

class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.predecessors = null;
  }
}
