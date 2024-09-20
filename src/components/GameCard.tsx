import { Game } from "../hooks/useGames";
import { HStack, Card, Image, CardBody, Heading } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/utils";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

//Card componenet from Chakra UI for each game
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        objectFit="scale-down"
        src={getCroppedImageUrl(game.background_image)}
      ></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
