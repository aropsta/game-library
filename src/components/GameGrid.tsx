import { Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoader from "./GameCardLoader";
import CardContainer from "./CardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const loadPlaceholder = [1, 2, 3, 4, 5, 6];

  //render certain elements based on response variables
  if (error) return <Text>{error.message}</Text>;
  // if (games.length === 0 && !isLoading)
  //   return <Text fontSize="2xl">No results found</Text>;

  return (
    <>
      <SimpleGrid
        marginBottom={4}
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
          : data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <CardContainer key={game.id}>
                    <GameCard game={game}></GameCard>
                  </CardContainer>
                ))}
              </React.Fragment>
            ))}
      </SimpleGrid>
      <Flex>
        {
          <Button
            isDisabled={!hasNextPage}
            onClick={() => fetchNextPage()}
            justifyContent="flex-start"
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </Button>
        }
      </Flex>
    </>
  );
};

export default GameGrid;
