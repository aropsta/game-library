import { HStack, Image, Link } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { GameQuery } from "../App";
import logo from "../../public/logo.png";

interface Props {
  onSearch: (searchText: string) => void;
  gameQuery: GameQuery;
  // searchField: string;
  // onSearchChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
const NavBar = ({ onSearch /* onSearchChange, searchField  */ }: Props) => {
  return (
    <HStack paddingBottom={4}>
      <Link href="/">
        <Image
          src={logo}
          boxSize="42px"
          align="center"
          justifySelf="center"
          fit="cover"
        />
      </Link>
      <SearchInput
        // searchField={searchField}
        // onSearchChange={onSearchChange}
        onSearch={onSearch}
      />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
