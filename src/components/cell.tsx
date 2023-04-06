import { FC } from "react";
import { CELL } from "../configs/enums";
import { motion } from "framer-motion";
import "./Cell.scss";

interface CellProps {
    value: CELL
    index: number
    onClick: () => void
}
export const Cell: FC<CellProps> = ({ value, index, onClick }) => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="square"
            onClick={onClick}
        >
            {value && (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={value}
                ></motion.span>
            )}
        </motion.div>
    )
}