import { Flex, Image } from '@mantine/core';
import pokedex from '../../../assets/pokedexpng.png';

export const Header = () => {
  return (
    <Flex mih={65} justify="start">
      <Flex justify="center" align="center">
        <Image h={68} src={pokedex} alt="Pokedex logo" />
      </Flex>
    </Flex>
  );
};
