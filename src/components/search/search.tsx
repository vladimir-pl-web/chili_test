import { ChangeEvent, FC, useState } from "react";
import { useProducts } from "src/hooks/useProducts";
import tw from "tailwind-styled-components";

const Search: FC = () => {
  const [text, setText] = useState<string>("");
  const { setTerm } = useProducts();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setText(value);
    setTerm({ searchTerm: text });
  };
  return (
    <StyledSearch
      value={text}
      placeholder="Type for search..."
      onChange={(e) => onChangeHandler(e)}
    />
  );
};

const StyledSearch = tw.input`
block
w-full
p-4
pl-10
text-sm
text-gray-900
border
border-gray-300
rounded-lg
bg-gray-50
focus:ring-blue-500
focus:border-blue-500
dark:bg-gray-700
dark:border-gray-600
dark:placeholder-gray-400
dark:text-white
dark:focus:ring-blue-500
dark:focus:border-blue-500
`;
export default Search;
