import useGenres, { Genre } from '@/hooks/useGenres'
import { Button, HStack, Image, List, Spinner} from '@chakra-ui/react';


/*
The _hover property in your code is part of Chakra UI’s style props. 

Chakra UI extends the base styling of its components with props like _hover, _active, _focus, etc., 
to allow for easy customization of pseudo-classes and interaction states.

_hover specifically maps to the CSS :hover pseudo-class, which applies styles when the mouse is over an element
*/
interface Prop{
  onClick: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onClick, selectedGenre }: Prop) {
  const { data, isLoading , error } = useGenres();

  // if error rises we simply don't want to show the error message as in GameGrid
  if(error) return null;

  if(isLoading) return <Spinner/>

  return (
    <>
    <List.Root variant={"plain"} paddingLeft={3}>
      {data.map(genre => 
      <List.Item key={ genre.id } paddingY={1}>
        <HStack>
          <Image boxSize="30px" borderRadius={10} src={genre.image_background}/>
          <Button 
          fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal" } 
          onClick={()=>onClick(genre)} variant={'plain'} 
          _hover={{textDecoration: 'underline'}}
          >
            {genre.name}
          </Button>
        </HStack>
      </List.Item>
      )}
    </List.Root>
    </>
  )
}

export default GenreList