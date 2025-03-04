import { Flex, Skeleton } from '@mantine/core';
import classes from '../../pokemon-card/pokemon-card.module.css';

export const PokemonListSkeleton = () => (
  <Flex wrap="wrap" gap={32} rowGap={72} mt={60} justify="center">
    {[...Array(12)].map((_, index) => (
      <div key={index} className={classes.container}>
        <Skeleton
          height={100}
          circle
          className={classes.pokemon}
          styles={{
            root: {
              position: 'absolute',
              top: '-10%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
            },
          }}
        />
        <Flex direction="column" align="center" gap={8} mt={80}>
          <Skeleton height={24} width="70%" radius="xl" />
          <Flex gap={4} wrap="wrap" justify="center">
            <Skeleton height={20} width={50} radius="xl" />
            <Skeleton height={20} width={50} radius="xl" />
          </Flex>
        </Flex>
        <Skeleton
          height={16}
          width={80}
          radius="xl"
          className={classes.id}
          styles={{
            root: {
              position: 'absolute',
              bottom: '1rem',
              left: '50%',
              transform: 'translateX(-50%)',
            },
          }}
        />
      </div>
    ))}
  </Flex>
);
