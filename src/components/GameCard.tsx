import { Card, CardBody, Image, HStack} from '@chakra-ui/react'
import { Game } from '@/hooks/useGames'
import PlatformIconList from './PlatformIconList'
import MetacriticBadge from './MetacriticBadge'

interface Prop{
    game: Game;
}

function GameCard({ game }: Prop) {
  return (
    // borderRadius document is under Styling > Style Props > Border
    <Card.Root>
        <Image src={game.background_image}/>
        <CardBody>
            <Card.Title>{game.name}</Card.Title>
            <HStack justify={'space-between'}>
              <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
              <MetacriticBadge score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card.Root>
  )
}

export default GameCard