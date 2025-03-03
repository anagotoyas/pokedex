import { Badge, Flex, Image, Text } from '@mantine/core';
import { PokemonOverview } from '../../types';
import classes from './pokemon-card.module.css';
import { getPokemonTypeColor } from '../../utils/get-pokemon-type-color';

interface PokemonCardProps {
  pokemon: PokemonOverview;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name, types, img } = pokemon;
  return (
    <Flex
      key={id}
      className={classes.container}
      pos="relative"
      justify="center"
    >
      <Image src={img} className={classes.pokemon} />
      <Flex justify="center" align="center" direction="column" gap={16}>
        <Text size="md" className={classes.name} lh={1} mt={16}>
          {name}
        </Text>
        <Flex wrap="wrap" justify="center" align="center" gap={4}>
          {types.map((type, i) => (
            <Badge key={i} bg={getPokemonTypeColor(type)}>
              {type}
            </Badge>
          ))}
        </Flex>
        <Text size="xl" className={classes.id}>
          #{id.toString().padStart(4, '0')}
        </Text>
      </Flex>
    </Flex>
  );
};
