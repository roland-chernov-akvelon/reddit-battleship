import { CELL_EMPTY, CELL_SHIP } from "./boardCell.type";

// TODO: validate input
export function buildBoardMatrix(layout) {
  const matrix = new Array(10).fill(new Array(10).fill(CELL_EMPTY));
  for (const ship of layout) {
    for (const pos of ship.positions) {
      const [x, y] = pos;
      matrix[x][y] = CELL_SHIP;
    }
  }
  return matrix;
}
