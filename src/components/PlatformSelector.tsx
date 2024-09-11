import {
  Text,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatofrms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatofrms();

  if (error) return <Text></Text>;
  else
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((item) => (
            <MenuItem key={item.id}>{item.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
};

export default PlatformSelector;
