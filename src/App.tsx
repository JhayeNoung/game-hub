import { Grid, GridItem, Show, useBreakpointValue} from "@chakra-ui/react"
import { useState } from "react"
import NavBar from "./components/NavBar"
import GameGrib from "./components/GameGrib"
import GenreList from "./components/GenreList"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/usePlatforms"

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const breakpoint = useBreakpointValue({base: 0, lg: 1})
  const [ gameQuery, setGameQuery ] = useState<GameQuery>({} as GameQuery)

  console.log(gameQuery);

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
            <GenreList selectedGenre={gameQuery.genre} onClick={(genre)=>setGameQuery({...gameQuery, genre})}/>
          </GridItem>
        </Show>
        
        <GridItem area="main">
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform)=>setGameQuery({...gameQuery, platform})}/>
          <GameGrib gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App;