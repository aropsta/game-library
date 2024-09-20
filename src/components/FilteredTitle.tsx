import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

//Displays title of the current title based on what genre and platform filter are applied
const FilterdHeading = () => {
  //old implementation when genre was stored in game query object
  // const title = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);

  const title = `${selectedPlatform?.name || ""} ${selectedGenre?.name || ""} Games`;
  return (
    <Heading fontSize="5xl" marginBottom={4} as="h1">
      {title}
    </Heading>
  );
};

export default FilterdHeading;
