import {
  Image,
  HStack,
  List,
  Text,
  ListItem,
  Spinner,
  Button,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/utils";
import useGameQueryStore from "../store";

//An aside that holds a list of our genres
const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  const genres = data?.results;

  const color = useColorMode().colorMode === "light" ? "gray.100" : "gray.700";
  function getGenreList() {
    return genres?.map((genre) => (
      <ListItem
        key={genre.id}
        padding={1.5}
        borderRadius={4}
        fontWeight={"semiBold"}
        backgroundColor={genre.id === selectedGenreId ? color : ""}
      >
        <HStack>
          <Image
            objectFit="cover"
            boxSize={"32px"}
            borderRadius={6}
            src={getCroppedImageUrl(genre.image_background)}
            alt=""
          ></Image>
          <Button
            fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
            onClick={() => setGenreId(genre.id)}
            variant="link"
            fontSize={"lg"}
          >
            {genre.name}
          </Button>
        </HStack>
      </ListItem>
    ));
  }

  //if theres an error in API request, display no elements

  return (
    <>
      <Heading marginBottom={4} fontSize="2xl" textAlign="left">
        Genres
      </Heading>
      {error ? (
        <Text fontStyle="bold">
          Failed to Load <br />
          {error.message}
        </Text>
      ) : (
        <List>
          {isLoading ? <Spinner size="xl" marginY={4} /> : getGenreList()}
        </List>
      )}
    </>
  );
};

export default GenreList;
