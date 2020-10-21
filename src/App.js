import React from "react";
import { Board } from "./features/board/Board";
import { BoardStats } from "./features/board/BoardStats";
import "./app.css";

function App() {
  return (
    <div className="app">
      <BoardStats />
      <Board />
    </div>
  );
}

export default App;
