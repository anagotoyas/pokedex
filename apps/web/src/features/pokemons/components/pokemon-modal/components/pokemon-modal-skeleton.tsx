import { Container, Flex, Skeleton } from '@mantine/core';
import classes from '../pokemon-modal.module.css';

export const PokemonModalSkeleton = () => (
  <div>
    <Container className={classes['section-image']}>
      <Skeleton height={48} width="70%" mx="auto" />
      <Skeleton height={150} width={150} mt={20} />
    </Container>
    <div className={classes['body-container']}>
      <Flex justify="space-between" align="center" wrap="wrap" gap={8}>
        <Flex gap={8} justify="center" align="center">
          <Skeleton height={20} width={80} />
          <Skeleton height={20} width={100} />
        </Flex>
        <Flex gap={8} justify="center" align="center">
          <Skeleton height={20} width={60} />
          <Skeleton height={20} width={80} />
        </Flex>
      </Flex>
      <Flex direction="column" gap={8}>
        <Skeleton height={20} width={60} />
        {[...Array(6)].map((_, index) => (
          <Flex key={index} direction="column" gap={4}>
            <Skeleton height={16} width={120} />
            <Skeleton height={8} />
          </Flex>
        ))}
      </Flex>
    </div>
  </div>
);
