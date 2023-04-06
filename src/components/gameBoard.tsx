import { FC } from "react"
import { CELL } from "../configs/enums"
import { Cell } from "./cell"

interface GameBoardProps {
    cells: CELL[]
    handleClickCell: (index: number) => void
}
export const GameBoard: FC<GameBoardProps> = ({ cells, handleClickCell }) => {
    return (

        <div className='board'>
            {cells.map((cell, index) => <Cell value={cell} index={index} onClick={handleClickCell} />)}
        </div>
    )
}