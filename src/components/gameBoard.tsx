import { FC } from "react"
import { CELL } from "../configs/enums"
import { Cell } from "./Cell"

interface GameBoardProps {
    cells: CELL[]
    handleClickCell: (index: number) => void
}
export const GameBoard: FC<GameBoardProps> = ({ cells, handleClickCell }) => (
    <div className='board'>
        {cells.map((cell, index) => (
            <Cell key={index} value={cell} index={index} onClick={() => handleClickCell(index)} />
        ))}
    </div>
)