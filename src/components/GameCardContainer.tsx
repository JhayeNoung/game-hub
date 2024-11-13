import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface Prop{
    children: ReactNode
}

function GameCardContainer({ children }: Prop) {
  // borderRadius document is under Styling > Style Props > Border
  return (
    // GameCardSkeleton and GameCard will be the 'children' of GameCardContainer
    <Box borderRadius={15} overflow={'hidden'}>{children}</Box>
  )
}

export default GameCardContainer