import { FC } from "react";
import tw from "tailwind-styled-components";

const Heading: FC<{ title: string; size: string }> = ({ title, size }) => {
  return <StyledHeader $size={size}>{title}</StyledHeader>;
};

interface HeaderProps {
  $size: string;
}

const StyledHeader = tw.h1<HeaderProps>`
${(p) => p.$size}
font-didot
font-bold
`;
export default Heading;
