import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Text,
  Heading,
  Spinner,
  Box,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import { Game } from "../hooks/useGames";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <Flex direction="column" alignItems="start" gap={4}>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </Flex>
  );
};

function GameAttributes({ game }: { game: Game }) {
  return (
    <SimpleGrid as="dl" columns={2}>
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map((p) => (
          <Text key={p.platform.id}>{p.platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metacritic">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genre">
        {game.genres?.map((genre) => <Text key={genre.id}>{genre.name}</Text>)}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
}

export default GameDetailsPage;
