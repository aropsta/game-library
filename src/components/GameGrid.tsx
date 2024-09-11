import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoader from "./GameCardLoader";
import CardContainer from "./CardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data: games, isLoading } = useGames(gameQuery);
  const loadPlaceholder = [1, 2, 3, 4, 5, 6];

  //render certain elements based on response variables
  if (error.length > 0) return <Text>{error}</Text>;
  if (games.length === 0 && !isLoading)
    return <Text fontSize="2xl">No results found</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      // paddingBlock={10}
    >
      {isLoading
        ? loadPlaceholder.map((pHolder) => (
            <CardContainer key={pHolder}>
              <GameCardLoader />
            </CardContainer>
          ))
        : games.map((game) => (
            <CardContainer key={game.id}>
              <GameCard game={game}></GameCard>
            </CardContainer>
          ))}
    </SimpleGrid>
  );
};

export default GameGrid;
