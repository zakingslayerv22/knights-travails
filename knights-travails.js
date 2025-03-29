export class Knight {
  #getValidMoves(coordinates) {
    const [x, y] = coordinates;

    const validMovesCellsArray = [];

    if (x - 2 >= 0 && y - 1 >= 0)
      validMovesCellsArray.push(new Cell(x - 2, y - 1));

    if (x - 2 >= 0 && y + 1 < 8)
      validMovesCellsArray.push(new Cell(x - 2, y + 1));

    if (x - 1 >= 0 && y - 2 >= 0)
      validMovesCellsArray.push(new Cell(x - 1, y - 2));

    if (x - 1 >= 0 && y + 2 < 8)
      validMovesCellsArray.push(new Cell(x - 1, y + 2));

    if (x + 1 < 8 && y - 2 >= 0)
      validMovesCellsArray.push(new Cell(x + 1, y - 2));

    if (x + 1 < 8 && y + 2 < 8)
      validMovesCellsArray.push(new Cell(x + 1, y + 2));

    if (x + 2 < 8 && y - 1 >= 0)
      validMovesCellsArray.push(new Cell(x + 2, y - 1));

    if (x + 2 < 8 && y + 1 < 8)
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
