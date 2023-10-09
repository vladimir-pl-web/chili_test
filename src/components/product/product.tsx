"use client";

import { useProducts } from "src/hooks/useProducts";
import tw from "tailwind-styled-components";
import { useParams } from "next/navigation";
import Loader from "../loader/loader";
const ProductInfo = () => {
  const params = useParams();
  const { currentProduct } = useProducts(+params.id);
  console.log(currentProduct, "current");
  return (
    <>
      {currentProduct ? (
        <StyledProduct>
          <StyledCard>
            <StyledCardSide $top={true}>{currentProduct.name}</StyledCardSide>
            <StyledCategory>{currentProduct.category}</StyledCategory>
            <StyledDescription>{currentProduct.description}</StyledDescription>
            <StyledCardSide $top={false}>
              Price: {currentProduct.price} {currentProduct.currency}
            </StyledCardSide>
          </StyledCard>
        </StyledProduct>
      ) : (
        <Loader />
      )}
    </>
  );
};

interface SideProps {
  $top: boolean;
}

const StyledProduct = tw.div`
flex
w-screen
justify-center
min-h-screen
`;
const StyledCard = tw.div`
mt-10
pt-10
p-5
shadow-lg
dark:bg-neutral-700
rounded-lg 
flex
flex-col
items-center
justify-start
gap-5
bg-light-brown
w-[600px]
h-[700px]
relative
`;
const StyledCardSide = tw.div<SideProps>`
${(p) =>
  p.$top ? "top-0 rounded-t-lg border-b-2" : "bottom-0 rounded-b-lg border-t-2"}
border-green-dark
px-6
py-3
h-20
absolute
left-0
right-0
dark:border-neutral-600
dark:text-neutral-50
bg-green-secondary
text-yellow-light
text-center
font-didot
text-3xl
`;

const StyledCategory = tw.h3`
mb-2
pt-20
text-xl
font-medium
leading-tight
text-neutral-800
dark:text-neutral-50
text-center
font-humanist
`;

const StyledDescription = tw.span`
mb-4
text-lg
text-neutral-600
dark:text-neutral-200
text-center
`;

export default ProductInfo;
