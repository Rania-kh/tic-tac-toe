import React, { useState } from 'react';
import './App.css';
import { CELL } from './configs/enums';

function App() {
  const [cells, setCells] = useState<CELL[]>(Array(9).fill(CELL.EMPTY));
  const [player, setPlayer] = useState<CELL>(CELL.X);
  const [winner, setWinner] = useState<CELL>(CELL.EMPTY);

  return (
    <div className='tic-tac-toe'>
      <h1 className='title'> TIC-TAC-TOE </h1>
      <div className='board'>
        {cells.map((cell, index) => (
          <div className="single-cell">
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
