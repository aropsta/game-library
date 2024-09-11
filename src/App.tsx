import { useState } from "react";
import { Button, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import FilteredTitle from "./components/FilteredTitle";

export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const isFiltered = !Object.values(gameQuery).every(
    (value) => value === undefined,
  );

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
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      {/* Aside */}
      <Show above="lg">
        <GridItem marginRight={3} area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
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
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
          {isFiltered ? (
            <Button
              onClick={() => setGameQuery({} as GameQuery)}
              variant="link"
            >
              Clear filters
            </Button>
          ) : null}
        </Flex>
        {/* Clear Filters */}

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
