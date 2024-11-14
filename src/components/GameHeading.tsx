import { GameQuery } from '@/App'
import { Heading } from '@chakra-ui/react'

interface Props{
  game: GameQuery;
}

function GameHeading({ game }: Props) {
  const heading = `${game.platform?.name || ''} ${game.genre?.name || ''} Games`

  return (
    <Heading size="3xl">{heading}</Heading>
  )
}

export default GameHeading