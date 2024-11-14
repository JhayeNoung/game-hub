import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '@/hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '@/App';

interface Prop{
    gameQuery: GameQuery;
}

function GameGrib({gameQuery}: Prop) {
    const { error, data, isLoading} = useGames(gameQuery);
    const skeletons = [ 1, 2, 3, 4, 5, 6]; // render six skeleton cards

    return (
        <>
        {error && <Text>{error}</Text> }
        <SimpleGrid columns={{sm: 1, md:2, lg: 3, xl: 5}} gap={3}>
            { isLoading && skeletons.map(skeleton => 
            // Wrap 'GameCardSkeleton' and 'Game Card' with 'GameCardContainer' 
            <GameCardContainer key={skeleton}>
                <GameCardSkeleton/>
            </GameCardContainer>)}
            {data.map(game => 
            <GameCardContainer key={game.id}>
                <GameCard game={game} />
            </GameCardContainer> )}
        </SimpleGrid>
        </>
    )
}
  
export default GameGrib