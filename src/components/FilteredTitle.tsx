import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const FilterdHeading = ({ gameQuery }: Props) => {
  //old implementation when genre was stored in game query object
  // const title = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const selectedGenre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const selectedPlatform = platforms?.results.find(
    (g) => g.id === gameQuery.platformId,
  );

  const title = `${selectedPlatform?.name || ""} ${selectedGenre?.name || ""} Games`;
  return (
    <Heading fontSize="5xl" marginBottom={4} as="h1">
      {title}
    </Heading>
  );
};

export default FilterdHeading;
