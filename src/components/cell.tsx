import { FC } from "react";
import { CELL } from "../configs/enums";

interface CellProps {
    value: CELL
    index: number
    onClick: (index: number) => void
}
export const Cell: FC<CellProps> = ({ value, index, onClick }) => {
    const handleClickCellAction = () => onClick(index)
    return (
        <div className="single-cell" onClick={handleClickCellAction}>
            {value}
        </div>
    )
}