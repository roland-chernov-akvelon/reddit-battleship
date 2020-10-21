import { createSlice } from "@reduxjs/toolkit";
import {
  buildBoardMatrix,
  buildInitialShipStatsState,
  hitOrMiss,
} from "./boardUtils";
import ships from "../../ships";
import { CELL_HIT } from "./boardCell.type";

export const counterSlice = createSlice({
  name: "board",
  initialState: {
    boardCells: buildBoardMatrix(ships.layout),
    shipStats: buildInitialShipStatsState(ships.shipTypes),
  },
  reducers: {
    fire: (state, action) => {
      const position = action.payload;
      const [x, y] = position;

      const newCell = hitOrMiss(state.boardCells, position);

      // increase hits counter
      if (newCell === CELL_HIT) {
        const shipType = state.boardCells[x][y];
        state.shipStats[shipType].hits++;
      }

      // replace cell in the matrix state
      // NOTE: immutability is handled internally in redux toolkit so we can mutate state here
      state.boardCells[x][y] = newCell;

      return state;
    },
  },
});

export const { fire } = counterSlice.actions;

export const selectBoardCells = (state) => state.board.boardCells;

export const selectStats = (state) => state.board.shipStats;

export default counterSlice.reducer;
