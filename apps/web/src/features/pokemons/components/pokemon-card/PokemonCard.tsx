import { Badge, Flex, Image, Text } from '@mantine/core';
import { PokemonOverview } from '../../types';
import classes from './pokemon-card.module.css';

interface PokemonCardProps {
  pokemon: PokemonOverview;
}
type PokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass';

function getPokemonTypeColor(type: string) {
  const typeColors: Record<PokemonType, string> = {
    normal: '#A8A77A',
    fighting: '#C22E28',
    flying: '#A98FF3',
    poison: '#A33EA1',
    ground: '#E2BF65',
    rock: '#B6A136',
    bug: '#A6B91A',
    ghost: '#735797',
    steel: '#B7B7CE',
    fire: '#EE8130',
    water: '#6390F0',
    grass: '#7AC74C',
  };

  return typeColors[type.toLowerCase() as PokemonType] || '#777777';
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
        <Text size="xl" className={classes.id}>
          #{id.toString().padStart(4, '0')}
        </Text>
        <Text size="md" className={classes.name} lh={1} mt={16}>
          {name}
        </Text>
        <Flex wrap="wrap" justify="center" gap={4}>
          {types.map((type, i) => (
            <Badge key={i} bg={getPokemonTypeColor(type)}>
              {type}
            </Badge>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
