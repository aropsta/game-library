import { useState } from "react";
import { Button, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import FilteredTitle from "./components/FilteredTitle";

export interface GameQuery {
  platformId?: number;
  genreId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  //If any of the filters in our gameQuery object are NOT undefined, then we have a filter for results
  const isFiltered = !Object.values(gameQuery).every(
    (value) => value === undefined,
  );

  function clearFilters() {
    setGameQuery({} as GameQuery);
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
        <NavBar
          gameQuery={gameQuery}
          onSearch={(searchText) => {
            setGameQuery({ ...gameQuery, searchText });
          }}
        />
      </GridItem>

      {/* Aside */}
      <Show above="lg">
        <GridItem marginRight={3} area="aside">
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>

      {/* Main Grid */}
      <GridItem area="main">
        {/* TITLE */}
        <Flex>
          <FilteredTitle gameQuery={gameQuery} />
        </Flex>

        {/* Filters  */}
        <Flex gap={4} marginBottom={6}>
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platformId: platform.id })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
          {/* Clear Filters */}
          {isFiltered ? (
            <Button onClick={clearFilters} variant="link">
              Clear filters
            </Button>
          ) : null}
        </Flex>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
