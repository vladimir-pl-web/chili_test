"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";
import Button from "src/components/button/button";
import Heading from "src/components/title/title";
import tw from "tailwind-styled-components";

const HomePage: FC = () => {
  const router = useRouter();
  const onEnter = () => {
    router.push("/products");
  };
  return (
    <StyledHome>
      <Heading title={"Test App"} size="text-5xl" />
      <Button title={"WELCOME"} onClick={onEnter} />
    </StyledHome>
  );
};

const StyledHome = tw.div`
    flex
    flex-col
    gap-10
    items-center
    justify-start
    flex-col
    sm:w-1/2
    p-5
    pt-28
`;

export default HomePage;
