import { createSlice } from "@reduxjs/toolkit";
import { buildBoardMatrix } from "./boardUtils";
import ships from "../../ships";

export const counterSlice = createSlice({
  name: "board",
  initialState: {
    boardCells: buildBoardMatrix(ships.layout),
  },
  reducers: {
    fire: (state, action) => {
      const { coords } = action.payload;
      // TODO: process the action
    },
  },
});

export const { fire } = counterSlice.actions;

export const selectBoardCells = (state) => state.board.boardCells;

export default counterSlice.reducer;
