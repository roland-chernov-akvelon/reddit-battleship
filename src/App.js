import React from 'react';
import { Board } from './features/board/Board';
import { BoardStats } from './features/board/BoardStats';

function App() {
  return (
    <div className="app">
      <Board />
      <BoardStats />
    </div>
  );
}

export default App;
