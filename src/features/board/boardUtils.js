import { CELL_EMPTY, CELL_HIT, CELL_MISS } from "./boardCell.type";

// TODO: validate input
export function buildBoardMatrix(layout) {
  const matrix = new Array(10)
    .fill(null)
    .map(() => new Array(10).fill(CELL_EMPTY));
  for (const ship of layout) {
    for (const pos of ship.positions) {
      const [x, y] = pos;
      // FIXME: proper mapping of ship types
      matrix[x][y] = ship.ship;
    }
  }
  return matrix;
}

export function buildInitialShipStatsState(shipTypes) {
  return Object.keys(shipTypes).reduce((acc, type) => {
    acc[type] = {
      size: shipTypes[type].size,
      hits: 0,
    };
    return acc;
  }, {});
}

export function hitOrMiss(matrix, position) {
  const [x, y] = position;
  if (matrix[x][y] === CELL_EMPTY) {
    return CELL_MISS;
  }
  return CELL_HIT;
}
