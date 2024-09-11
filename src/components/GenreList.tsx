import {
  Text,
  Image,
  HStack,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (!error) return null;
  //show loading spinner
  if (isLoading)
    return genres.map((genre) => (
      <List>
        <ListItem>
          <Spinner marginY={4} />
        </ListItem>
      </List>
    ));

  return (
    <List>
      {genres.map((genre) => (
        <ListItem
          key={genre.id}
          padding={1.5}
          borderRadius={4}
          fontWeight={"semiBold"}
          backgroundColor={genre.id === selectedGenre?.id ? "gray.700" : ""}
        >
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={3}
              src={getCroppedImageUrl(genre.image_background)}
              alt=""
            ></Image>
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={(e) => onSelectGenre(genre)}
              variant="link"
              fontSize={"lg"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
