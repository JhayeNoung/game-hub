import { Skeleton, Card, CardBody} from '@chakra-ui/react'
import { SkeletonText } from './ui/skeleton'

function GameCardSkeleton() {
  return (
    <>
    <Card.Root>
        <Skeleton height="200px"/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card.Root>
    </>
  )
}

export default GameCardSkeleton