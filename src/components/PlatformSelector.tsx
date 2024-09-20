import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

//Component to filter games by platforms
const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) {
    return null;
  }
  return (
    <Menu>
      <MenuButton as={Button} fontSize={14} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((item) => (
          <MenuItem onClick={() => setPlatformId(item.id)} key={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
