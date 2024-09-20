import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import useGames from "../hooks/useGames";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const inputValue = useGameQueryStore((s) => s.inputValue);
  const setInputValue = useGameQueryStore((s) => s.setInputValue);

  const navigate = useNavigate();

  const { isLoading } = useGames();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) {
          setSearchText(inputValue);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputRef}
          disabled={isLoading}
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
