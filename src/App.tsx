import { Grid, GridItem, Show, useBreakpointValue} from "@chakra-ui/react"
import { useState } from "react"
import NavBar from "./components/NavBar"
import GameGrib from "./components/GameGrib"
import GenreList from "./components/GenreList"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"

function App() {
  const breakpoint = useBreakpointValue({base: 0, lg: 1})
  const [ selectedGenre, setSelectedGenre ] = useState< Genre | null >(null);
  
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}

        templateColumns={{
          base: '1fr', // base is 1 fraction, means in small device
          lg: '200px 1fr', // in large scree, first column take 200px and second takes all
        }}
      >
        <GridItem area="nav">
          <NavBar/>
        </GridItem>

        {/* Conditionally render based on screen size using `when` */}
        {/* Show Aside on 'lg' */}
        <Show when={breakpoint === 1}>
          <GridItem area="aside" paddingX={3}>
            <GenreList selectedGenre={selectedGenre} onClick={(genre)=>setSelectedGenre(genre)}/>
          </GridItem>
        </Show>
        
        <GridItem area="main">
          <PlatformSelector/>
          <GameGrib selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App;