import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
      <GridItem area="nav" border="1px" borderColor={"gray.200"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" border="1px" borderColor={"gray.200"}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main" border="1px" borderColor={"gray.200"} padding={2}>
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
