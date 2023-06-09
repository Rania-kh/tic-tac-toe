import React, { useState } from 'react';
import './App.css';
import { Button, GameBoard, Result } from './components';
import { CELL } from './configs/enums';
import { checkWinner, getBestMove } from './utils';

function App() {
  const [cells, setCells] = useState<CELL[]>(Array(9).fill(CELL.EMPTY));
  const [player, setPlayer] = useState<CELL>(CELL.X);
  const [winner, setWinner] = useState<string>(CELL.EMPTY);

  const resetGame = () => {
    setCells(Array(9).fill(CELL.EMPTY));
    setPlayer(CELL.X);
    setWinner(CELL.EMPTY);
  }

  // function to implement the minimax algorithm and calculate the best result for the O player
  const handleClickCell = (index: number) => {
    if (winner || cells[index]) return

    const newCells = [...cells]
    newCells[index] = player

    const newWinner = checkWinner(newCells)
    if (newWinner) {
      setWinner(newWinner)
      return
    }
    setPlayer(player === CELL.X ? CELL.O : CELL.X)

    if (player === CELL.X) {
      const bestMove = getBestMove(newCells)
      if (bestMove !== -1) {
        newCells[bestMove] = CELL.O
        setCells(newCells)
        const newWinner = checkWinner(newCells)
        if (newWinner) {
          setWinner(newWinner)
          return
        }
        setPlayer(CELL.X)
      }
    }
  }

  return (
    <div className='game'>
      <h1> TIC-TAC-TOE </h1>
      <Button onClick={resetGame} title='Reset Game' />
      <GameBoard cells={cells} handleClickCell={handleClickCell} />
      {winner && <Result winner={winner} resetGame={resetGame} />}
    </div>
  );
}

export default App;
