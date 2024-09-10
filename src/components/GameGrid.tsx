import React, { useEffect, useState } from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";
import { ul } from "framer-motion/client";

interface Games {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Games[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/xgames")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
