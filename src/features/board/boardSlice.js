import { createSlice } from "@reduxjs/toolkit";
import { buildBoardMatrix, hitOrMiss } from "./boardUtils";
import ships from "../../ships";

export const counterSlice = createSlice({
  name: "board",
  initialState: {
    boardCells: buildBoardMatrix(ships.layout),
    shipStats: ships.shipTypes
  },
  reducers: {
    fire: (state, action) => {
      const position = action.payload;
      const [x, y] = position;
      const newCell = hitOrMiss(state.boardCells, position);
      const type = state.boardCells[x][y];
      // TODO: calculate hits per each ship type
      // state.shipStats[type].hits = 0 ?? state.shipStats[type].hits + 1;
      // NOTE: immutability is handled internally in redux toolkit so we can mutate this
      state.boardCells[x][y] = newCell;
      return state;
    },
  },
});

export const { fire } = counterSlice.actions;

export const selectBoardCells = (state) => state.board.boardCells;

export const selectStats = (state) => state.shipStats;

export default counterSlice.reducer;
