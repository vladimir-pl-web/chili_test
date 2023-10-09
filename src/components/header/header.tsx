import { FC } from "react";
import tw from "tailwind-styled-components";
import Search from "../search/search";

const Header: FC = () => {
  return (
    <StyledHeader>
      <Search />
    </StyledHeader>
  );
};

const StyledHeader = tw.header`
fixed
z-10
top-0
left-0
right-0
bg-green-dark
py-8
px-8 
md:px-24
shadow-md 
`;
export default Header;
