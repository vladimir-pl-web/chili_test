import { FC, useMemo } from "react";
import { IProduct } from "src/types/products";
import tw from "tailwind-styled-components";
import ProductItem from "../productItem/item";
import Title from "../title/title";

const ProductsList: FC<{ products: IProduct[] }> = ({ products }) => {
  const list = useMemo(() => {
    return products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));
  }, [products]);

  return (
    <div className="pt-36">
      <Title
        title={"Try Our Best Goodies"}
        classes={"text-5xl text-center pb-8"}
      />
      {products.length ? (
        <StyledList>{list}</StyledList>
      ) : (
        <StyledMessage>No Products Found</StyledMessage>
      )}
    </div>
  );
};

const StyledList = tw.ul`
grid
gap-5
justify-items-center
md:grid-cols-2
xl:grid-cols-3
grid-cols-1
pt-4
mx-8 
ld:mx-24

`;
const StyledMessage = tw.div`
py-10
font-humanist
font-bold
`;
export default ProductsList;
