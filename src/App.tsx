import React, { useState } from 'react';
import './App.css';

function App() {
  const [cells, setCells] = useState(Array(9).fill(''));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState('');

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
