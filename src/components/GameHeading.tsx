import { GameQuery } from '@/App'
import { Heading } from '@chakra-ui/react'

interface Props{
  game: GameQuery;
}

function GameHeading({ game }: Props) {
  // default: Games
  // if you choose genre: Genre Games
  // if you choose platform: Platform Genre Games
  const heading = `${game.platform?.name || ''} ${game.genre?.name || ''} Games`

  return (
    <Heading size="3xl">{heading}</Heading>
  )
}

export default GameHeading