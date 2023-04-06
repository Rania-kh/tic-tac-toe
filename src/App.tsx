import React, { useState } from 'react';
import './App.css';
import { Button, GameBoard } from './components';
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
  const handleClickCell = (index: number) => {
    console.log(index)
    console.log('winner || cells[index]')
    console.log(winner || cells[index])
    if (winner || cells[index]) return

    const newCells = [...cells]
    newCells[index] = player
    setCells(newCells)
    console.log('newCells')
    console.log(newCells)
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
      <h2> TIC-TAC-TOE </h2>
      <Button onClick={resetGame} title='Reset Game' />
      <GameBoard cells={cells} handleClickCell={handleClickCell} />
    </div>
  );
}

export default App;
