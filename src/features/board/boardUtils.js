import { CELL_EMPTY, CELL_SHIP, CELL_HIT, CELL_MISS } from "./boardCell.type";

// TODO: validate input
export function buildBoardMatrix(layout) {
  const matrix = new Array(10).fill(null).map(() => new Array(10).fill(CELL_EMPTY));
  for (const ship of layout) {
    for (const pos of ship.positions) {
      const [x, y] = pos;
      // FIXME: proper mapping of ship types
      matrix[x][y] = CELL_SHIP;
    }
  }
  return matrix;
}

export function hitOrMiss(matrix, position) {
  const [x, y] = position;
  if (matrix[x][y] === CELL_SHIP) {
    return CELL_HIT;
  }
  return CELL_MISS;
}
