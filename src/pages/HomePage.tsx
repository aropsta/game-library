import { Button, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import FilteredTitle from "../components/FilteredTitle";
import "./HomePage.css";

const HomePage = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  //If any of the filters in our gameQuery object are NOT undefined, then we have a filter for results
  const isFiltered = !Object.values(gameQuery).every(
    (value) => value === undefined,
  );

  const reset = useGameQueryStore((s) => s.clearFitlers);

  function clearFilters() {
    reset();
  }

  return (
    <Grid
      templateAreas={{
        base: `"main" `,
        lg: `"aside main" `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "260px 1fr",
      }}
    >
      {/* Aside */}
      <Show above="lg">
        <GridItem marginRight={3} area="aside">
          <GenreList />
        </GridItem>
      </Show>

      {/* Main Grid */}
      <GridItem area="main">
        {/* TITLE */}
        <Flex>
          <FilteredTitle />
        </Flex>

        {/* Filters  */}
        <Flex gap={4} marginBottom={6}>
          <PlatformSelector />
          <SortSelector />

          {/* Clear Filters */}
          {isFiltered && (
            <Button onClick={clearFilters} variant="link">
              Clear filters
            </Button>
          )}
        </Flex>

        {/*Games grid*/}
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
