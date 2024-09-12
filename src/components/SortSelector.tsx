import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;

  sortOrder: string;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const sortParams = [
    {
      value: "",
      label: "Relevence",
    },
    {
      //hyphen dictates sorting reverse order (earliest first):
      //https://api.rawg.io/docs/#operation/games_list
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
            onClick={() => onSelectSortOrder(order.value)}
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
