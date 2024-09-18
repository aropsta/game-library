import { HStack, Image, Link } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { GameQuery } from "../App";
import logo from "../../public/logo.png";

interface Props {
  onSearch: (searchText: string) => void;
  gameQuery: GameQuery;
}
const NavBar = ({ onSearch }: Props) => {
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
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
