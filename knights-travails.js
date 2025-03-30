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

  knightMoves(startVertex, endVertex) {
    if (
      !this.#isValid(startVertex[0], startVertex[1]) ||
      !this.#isValid(endVertex[0], endVertex[1])
    ) {
      return "Out of board range! Coordinates have to be between 0 to 7.";
    }

    const queue = new Queue();

    //enqueue the startVertex
    queue.enqueue(new Cell(startVertex[0], startVertex[1]));

    console.log(queue);

    while (queue.size()) {
      const currentElement = queue.dequeue();

      //get valid moves
      const validMovesCells = this.#getValidMoves([
        currentElement.x,
        currentElement.y,
      ]);

      //enqueue the cells
      validMovesCells.forEach((cell) => {
        if (!cell.predecessor) cell.predecessors = [];

        if (currentElement.predecessors) {
          currentElement.predecessors.forEach((predecessor) => {
            cell.predecessors.push(predecessor);
          });
        }

        cell.predecessors.push(currentElement);
        queue.enqueue(cell);
      });

      //check if the destination is in the queue
      for (let cell of queue.items) {
        if (cell.x === endVertex[0] && cell.y === endVertex[1]) {
          return cell.predecessors;
        }
      }
    }
    return false;
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
