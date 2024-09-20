import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

//Component to sort results in game grid
const SortSelector = () => {
  //Array used to associate sort orders with labels
  const sortParams = [
    //hyphen dictates sorting reverse order (earliest first):
    //https://api.rawg.io/docs/#operation/games_list
    {
      value: "",
      label: "Relevence",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-added",

      label: "Date added",
    },
    {
      value: "-released",
      label: "Release Date",
    },
    {
      value: "-metacritic",
      label: "Popularity ",
    },
    {
      value: "-rating",
      label: "Average rating",
    },
  ];

  //States using zustand
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  //Getting the current sort order from state using our array so we can use the labels instead of the actual sort order
  const currentSortOrder = sortParams.find(
    (order) => order.value === sortOrder,
  );
  return (
    <Menu>
      <MenuButton fontSize={14} as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortParams.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
