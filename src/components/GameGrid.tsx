import { HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoader from "./GameCardLoader";
import CardContainer from "./CardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data: games, isLoading } = useGames(gameQuery);
  const loadPlaceholder = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={4}
        // paddingBlock={10}
      >
        {isLoading &&
          loadPlaceholder.map((pHolder) => (
            <CardContainer key={pHolder}>
              <GameCardLoader />
            </CardContainer>
          ))}

        {games.map((game) => (
          <CardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
