import { Flex, Image, Text } from '@mantine/core';
import pokeball from '../../../assets/pokeball.webp';
import classes from './header.module.css';

export const Header = () => {
  return (
    <Flex mih={65} justify="center" p={8}>
      <Flex justify="center" align="center" gap={8}>
        <Image h={60} src={pokeball} alt="Mantine logo" />
        <Text className={classes.text}>Pokédex</Text>
        <Image h={60} src={pokeball} alt="Mantine logo" />
      </Flex>
    </Flex>
  );
};
