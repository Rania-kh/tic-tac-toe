import { FC } from "react";
import { CELL } from "../configs/enums";
import { Button } from "./Button";
import './Result.scss';


interface ResultProps {
    winner: string
    resetGame: () => void
}
export const Result: FC<ResultProps> = ({ winner, resetGame }) => {
    let message = '';
    if (winner === 'tie') {
        message = 'It\'s a tie!';
    } else if (winner === CELL.O) {
        message = `AI wins!`;
    } else if (winner === CELL.X) {
        message = `YOU win!`;
    }

    return (
        <div className="result">
            {winner === CELL.X ? (
                <div className="pyro">
                    <div className="result-message">{message}</div>
                    <div className="before"></div>
                    <div className="after"></div>
                </div>
            ) : winner === CELL.O ? (
                <div>
                    <div className="result-message">{message}</div>
                    <div className='container'>
                        <div className='tear'></div>
                        <div className='tear2'></div>
                        <div className='face'>
                            <div className='eyebrow'>︶</div>
                            <div className='eyebrow'>︶</div>
                            <div className='eye'></div>
                            <div className='eye'></div>
                            <div className='mouth'></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="result-message">{message}</div>
            )}
            <Button onClick={resetGame} title='Start New Game' />
        </div>
    );
};