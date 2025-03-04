import { Flex, Image, Text } from '@mantine/core';
import empty from '../../assets/pokeball-empty.png';
import classes from './empty.module.css';

interface EmptyProps {
  message?: string;
}

export const Empty = ({ message = 'No results' }: EmptyProps) => {
  return (
    <Flex className={classes.container}>
      <Image src={empty} alt="empty" className={classes.img} />
      <Text className={classes.text}>{message}</Text>
    </Flex>
  );
};
