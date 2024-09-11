import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: ` "nav" "main" `,
        lg: `"nav nav" "aside main" `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" border="1px" borderColor={"gray.200"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem
          area="aside"
          paddingX={4}
          border="1px"
          borderColor={"gray.200"}
        >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" border="1px" borderColor={"gray.200"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
