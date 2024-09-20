import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

//Component to display screenshots using Chakra UI Image componenet
const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
      {data?.results.map((file) => <Image key={file.id} src={file.image} />)}
    </SimpleGrid>
  );
};

export default GameScreenshots;
