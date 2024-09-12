import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { GameQuery } from "../App";

interface Props {
  onSearch: (searchText: string) => void;
  searchField: string;
  onSearchChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ onSearch, onSearchChange, searchField }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        if (inputRef.current) onSearch(inputRef.current.value);
        e.preventDefault();
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          // onChange={(e) => {
          //   if (inputRef.current) onSearch(inputRef.current.value);
          //   e.preventDefault();
          // }}
          ref={inputRef}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
          onChange={onSearchChange}
          value={searchField}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
