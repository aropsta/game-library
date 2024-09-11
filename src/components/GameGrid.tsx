import { HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoading from "./GameCardLoading";
import CardContainer from "./CardContainer";

const GameGrid = () => {
  const { error, data: games, isLoading } = useGames();
  const loadPlaceholder = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        // paddingBlock={10}
      >
        {isLoading &&
          loadPlaceholder.map((pHolder) => (
            <CardContainer key={pHolder}>
              <GameCardLoading key={pHolder} />
            </CardContainer>
          ))}
        {games.map((game) => (
          <CardContainer key={game}>
            <GameCard key={game.id} game={game}></GameCard>
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
