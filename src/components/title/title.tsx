import { FC } from "react";
import tw from "tailwind-styled-components";

const Title: FC<{ title: string; classes: string }> = ({ title, classes }) => {
  return <StyledTitle $classes={classes}>{title}</StyledTitle>;
};

interface TitleProps {
  $classes: string;
}

const StyledTitle = tw.h1<TitleProps>`
${(p) => p.$classes}
font-didot
font-bold
`;
export default Title;
