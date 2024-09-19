import { Button, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import FilteredTitle from "./components/FilteredTitle";
import useGameQueryStore from "./store";

function App() {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  //If any of the filters in our gameQuery object are NOT undefined, then we have a filter for results
  //TODO: Re implement our clear filters functionality
  const isFiltered = !Object.values(gameQuery).every(
    (value) => value === undefined,
  );

  const reset = useGameQueryStore((s) => s.clearFitlers);

  function clearFilters() {
    // setGameQuery({} as GameQuery);
    reset();
  }

  return (
    <Grid
      templateAreas={{
        base: ` "nav" "main" `,
        lg: `"nav nav" "aside main" `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "260px 1fr",
      }}
    >
      {/* Navigation Bar Area */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>

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
          {/* TODO: Reimplement clear filters functionality */}
          {isFiltered && (
            <Button onClick={clearFilters} variant="link">
              Clear filters
            </Button>
          )}
        </Flex>

        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
