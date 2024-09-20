import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import useGames from "../hooks/useGames";
import { useNavigate } from "react-router-dom";

//Search component in navbar
const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  //Using our zustand store to manage states
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const inputValue = useGameQueryStore((s) => s.inputValue);
  const setInputValue = useGameQueryStore((s) => s.setInputValue);

  const navigate = useNavigate();

  //Getting loading state from hook so input can be disabled. Otherwise can cause crashes if users search while data is still loading
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
