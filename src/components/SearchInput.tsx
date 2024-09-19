import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const inputValue = useGameQueryStore((s) => s.inputValue);
  const setInputValue = useGameQueryStore((s) => s.setInputValue);
  return (
    <form
      onSubmit={(e) => {
        if (inputRef.current) setSearchText(inputValue);
        e.preventDefault();
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
