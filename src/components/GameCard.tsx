import { Card, CardBody, Image, HStack} from '@chakra-ui/react'
import { Game } from '@/hooks/useGames'
import PlatformIconList from './PlatformIconList'
import MetacriticBadge from './MetacriticBadge'
import { optimizedImage } from '@/helper/image-optimization'

interface Prop{
    game: Game;
}

function GameCard({ game }: Prop) {
  return (
    <Card.Root>
        <Image src={optimizedImage(game.background_image)}/>
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