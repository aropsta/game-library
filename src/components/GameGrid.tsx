import { Button, Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoader from "./GameCardLoader";
import CardContainer from "./CardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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

  //Caculating total number of games fetched so far
  //data.pages contains an array of pages, each of which is an araray of our Game objects
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 1;

  //Conditionally render these elements based on our data's state
  if (error) return <Text>{error.message}</Text>;
  if (fetchedGamesCount === 0 && !isLoading)
    return <Text fontSize="2xl">No results found</Text>;

  return (
    //infinite scroll component from react-infinite-scroll-component
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={fetchNextPage}
      //!! converts and undefined boolean into a false
      hasMore={!!hasNextPage}
      loader={<Spinner size="xl" />}
      endMessage={
        <Text style={{ textAlign: "center" }}>
          <b>End of the line!</b>
        </Text>
      }
    >
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
    </InfiniteScroll>
    // {
    //   <Button
    //     isDisabled={!hasNextPage}
    //     onClick={() => fetchNextPage()}
    //     justifyContent="flex-start"
    //   >
    //     {isFetchingNextPage ? "Loading..." : "Load more"}
    //   </Button>
    // }
  );
};

export default GameGrid;
