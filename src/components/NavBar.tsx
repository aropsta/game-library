import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { GameQuery } from "../App";

interface Props {
  onSearch: (searchText: string) => void;
  gameQuery: GameQuery;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingBottom={4}>
      {/* <Image src={logo} boxSize="60px" /> */}
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
