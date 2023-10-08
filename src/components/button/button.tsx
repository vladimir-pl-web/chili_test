"use client";
import { FC } from "react";
import tw from "tailwind-styled-components";
import { IButton } from "./types";

const Button: FC<IButton> = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};
interface ButtonProps {
  $primary?: boolean;
}

const StyledButton = tw.button<ButtonProps>`
   transition-all
    duration-300
    bg-green-primary
    hover:bg-green-dark
    hover:scale-105
    text-yellow-light
    font-bold
    py-2
    px-4
    border
    rounded
    font-humanist
`;

export default Button;
