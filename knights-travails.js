export class Knight {
  #isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  #getValidMoves(coordinates) {
    const [x, y] = coordinates;

    const validMovesCellsArray = [];

    if (this.#isValid(x - 2, y - 1))
      validMovesCellsArray.push(new Cell(x - 2, y - 1));

    if (this.#isValid(x - 2, y + 1))
      validMovesCellsArray.push(new Cell(x - 2, y + 1));

    if (this.#isValid(x - 1, y - 2))
      validMovesCellsArray.push(new Cell(x - 1, y - 2));

    if (this.#isValid(x - 1, y + 2))
      validMovesCellsArray.push(new Cell(x - 1, y + 2));

    if (this.#isValid(x + 1, y - 2))
      validMovesCellsArray.push(new Cell(x + 1, y - 2));

    if (this.#isValid(x + 1, y + 2))
      validMovesCellsArray.push(new Cell(x + 1, y + 2));

    if (this.#isValid(x + 2, y - 1))
      validMovesCellsArray.push(new Cell(x + 2, y - 1));

    if (this.#isValid(x + 2, y + 1))
      validMovesCellsArray.push(new Cell(x + 2, y + 1));

    return validMovesCellsArray;
  }
}

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
