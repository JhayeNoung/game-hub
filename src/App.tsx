import { Box, Grid, GridItem, HStack, Show, useBreakpointValue} from "@chakra-ui/react"
import { useState } from "react"
import NavBar from "./components/NavBar"
import GameGrib from "./components/GameGrib"
import GenreList from "./components/GenreList"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/usePlatforms"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  search: string;
}

function App() {
  const breakpoint = useBreakpointValue({base: 0, lg: 1})
  const [ gameQuery, setGameQuery ] = useState<GameQuery>({} as GameQuery)
  
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}

        templateColumns={{
          base: '1fr', // base is 1 fraction, means in small device
          lg: '220px 1fr', // in large scree, first column take 200px and second takes all
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={search=>setGameQuery({...gameQuery, search})}/>
        </GridItem>

        {/* Conditionally render based on screen size using `when` */}
        {/* Show Aside on 'lg' */}
        <Show when={breakpoint === 1}>
          <GridItem area="aside">
            <GenreList selectedGenre={gameQuery.genre} onClick={(genre)=>setGameQuery({...gameQuery, genre})}/>
          </GridItem>
        </Show>
        
        <GridItem area="main">
          <Box paddingLeft={3} paddingBottom={3}>
            <GameHeading game={gameQuery}/>
          </Box>
          <HStack paddingLeft={3}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform)=>setGameQuery({...gameQuery, platform})}/>
            <SortSelector selectedSortOrder={gameQuery.ordering} onSelectedSortOrder={(ordering)=>setGameQuery({...gameQuery, ordering})}/>
          </HStack>
          <Box padding={3}>
            <GameGrib gameQuery={gameQuery}/>
          </Box>
        </GridItem>

      </Grid>
    </>
  )
}

export default App;