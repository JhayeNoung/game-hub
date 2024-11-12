import { Badge } from '@chakra-ui/react'

interface Prop {
    score: number,
}

function MetacriticBadge({ score }: Prop) {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red';

    return (
        <Badge colorPalette={color} paddingX={2} fontSize='14px'>{score}</Badge>
    );
}

export default MetacriticBadge;