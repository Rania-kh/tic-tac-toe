import { CELL } from "../configs/enums";

export const getBestMove = (cells: CELL[]): number => {
    const emptyCells = cells.reduce((indexes, cell, index) => {
        if (cell === CELL.EMPTY) indexes.push(index)
        return indexes
    }, [] as number[])

    if (emptyCells.length === 0) return -1

    let bestMove = -1
    let bestScore = -Infinity

    for (let i = 0; i < emptyCells.length; i++) {
        const index = emptyCells[i]
        const newCells = [...cells]
        newCells[index] = CELL.O

        const score = minimax(newCells, CELL.X, false)
        if (score > bestScore) {
            bestScore = score
            bestMove = index
        }
    }
    return bestMove;
}

export const minimax = (cells: CELL[], player: CELL, isMaximizing: boolean): number => {
    const winner = checkWinner(cells)
    if (winner !== CELL.EMPTY) return winner === CELL.O ? 1 : winner === CELL.X ? -1 : 0

    let bestScore = isMaximizing ? -Infinity : Infinity
    const nextPlayer = player === CELL.O ? CELL.X : CELL.O

    for (let i = 0; i < cells.length; i++) {
        if (cells[i] === CELL.EMPTY) {
            const newCells = [...cells]
            newCells[i] = player
            const score = minimax(newCells, nextPlayer, !isMaximizing)
            if ((isMaximizing && score > bestScore) || (!isMaximizing && score < bestScore)) {
                bestScore = score
            }
        }
    }
    return bestScore
}

export const checkWinner = (cells: CELL[]): string => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) return cells[a]
    }

    if (cells.includes(CELL.EMPTY)) return ''

    return 'tie';
}