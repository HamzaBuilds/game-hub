import { HStack, List, ListItem, Image, Text, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGeneris";
import getCroppedImageUrl from "../services/Image-url";

interface Props{
  onSelectionGenre: (genre: Genre)=> void;
  selectedGenre: Genre | null;
}
const GenreList = ({selectedGenre, onSelectionGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner/>
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold': 'normal'} onClick={()=>onSelectionGenre(genre)} fontSize="lg" variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
