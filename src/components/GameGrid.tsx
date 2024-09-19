import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoader from "./GameCardLoader";
import CardContainer from "./CardContainer";
import React from "react";
import "../main.css";

import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } = useGames();
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
      style={{
        overflow: "visible",
      }}
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
        overflow="show"
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
