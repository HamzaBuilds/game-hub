import { Badge } from '@chakra-ui/react';
import { MdPadding } from 'react-icons/md';

interface Props{
    score:number;
}

export const CriticScore = ({score}: Props) => {

    let color = score > 75 ? 'green' :score > 60 ? 'yellow' :'';
  return (
     <Badge colorScheme={color} fontSize={'40px'}  paddingX={2} borderRadius={'4px'}>{score}</Badge>
  )
}
