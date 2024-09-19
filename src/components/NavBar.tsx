import { HStack, Image, Link } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from "../../public/logo.png";

const NavBar = () => {
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
      <SearchInput />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
