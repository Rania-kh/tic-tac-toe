import { FC } from "react";

interface ButtonProps {
    title: string
    onClick: () => void
}
export const Button: FC<ButtonProps> = ({ title, onClick }) => (
    <button onClick={onClick}>{title}</button>
)