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
}

const GenreList = ({ onSelectGenre }: Props) => {
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
        <ListItem key={genre.id} paddingY={1.5}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              alt=""
            ></Image>
            <Button
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
