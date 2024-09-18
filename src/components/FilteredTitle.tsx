import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const FilterdHeading = ({ gameQuery }: Props) => {
  //old implementation when genre was stored in game query object
  // const title = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  const selectedGenre = useGenre(gameQuery.genreId);
  const selectedPlatform = usePlatform(gameQuery.platformId);

  const title = `${selectedPlatform?.name || ""} ${selectedGenre?.name || ""} Games`;
  return (
    <Heading fontSize="5xl" marginBottom={4} as="h1">
      {title}
    </Heading>
  );
};

export default FilterdHeading;
