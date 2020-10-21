import { createSlice } from "@reduxjs/toolkit";
import { CELL_EMPTY } from "./boardCell.type";

const initialState = {
  boardCells: new Array(10).fill(new Array(10).fill(CELL_EMPTY)),
};

export const counterSlice = createSlice({
  name: "board",
  initialState: initialState,
  reducers: {
    fire: (state, action) => {
      const { coords } = action.payload;
      // TODO: process the action
    },
  },
});

export const { fire } = counterSlice.actions;

export const selectBoardCells = state => state.board.boardCells;

export default counterSlice.reducer;
