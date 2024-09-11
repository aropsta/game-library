import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const FilterdHeading = ({ gameQuery }: Props) => {
  const title = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;
  return (
    <Heading fontSize="5xl" marginBottom={4} as="h1">
      {title}
    </Heading>
  );
};

export default FilterdHeading;
