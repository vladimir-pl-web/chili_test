"use client";
import { FC } from "react";
import { IProductListItem } from "./types";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Button from "../button/button";

const ProductItem: FC<IProductListItem> = ({ product }) => {
  return (
    <StyledItem>
      <StyledName>Name: {product.name}</StyledName>
      <StyledInfo>Price: {product.price}EU</StyledInfo>
      <StyledInfo>Category: {product.category}</StyledInfo>
      <Link href={`/products/${product.id}`}>
        <Button title={"More"} />
      </Link>
      <StyledCorner />
    </StyledItem>
  );
};
const StyledItem = tw.li`
flex
group
flex-col
min-w-full
lg:min-w-[400px]
bg-light-brown
border
p-5
border-gray-200
rounded-lg
shadow
dark:bg-gray-800
dark:border-gray-700
cursor-pointer
transition-all
duration-300
relative
hover:shadow-2xl
hover:rotate-2
hover:translate-x-8
`;

const StyledName = tw.h5`
mb-2
text-2xl
font-bold
tracking-tight
text-gray-900
dark:text-white
font-humanist
`;
const StyledInfo = tw.span`
mb-3 
font-normal
text-gray-700
dark:text-gray-400
font-humanist
`;

const StyledCorner = tw.div`
flex
items-center
justify-content-center
absolute
w-8
h-8
group-hover:h-10
group-hover:w-10
transition-all
duration-300
top-0
right-0
bg-green-secondary
rounded-bl-3xl
`;

export default ProductItem;
