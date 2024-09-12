import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { GameQuery } from "../App";
import { Dispatch, SetStateAction } from "react";

interface Props {
  onSearch: (searchText: string) => void;
  gameQuery: GameQuery;
  searchField: string;
  onSearchChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
const NavBar = ({ onSearch, onSearchChange, searchField }: Props) => {
  return (
    <HStack paddingBottom={4}>
      {/* <Image src={logo} boxSize="60px" /> */}
      <SearchInput
        searchField={searchField}
        onSearchChange={onSearchChange}
        onSearch={onSearch}
      />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
