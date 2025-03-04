import { Container, Flex, Skeleton } from '@mantine/core';
import classes from '../pokemon-modal.module.css';

export const PokemonModalSkeleton = () => (
  <div className={classes.content}>
    <Container className={classes['section-image']}>
      <Skeleton
        height={48}
        width="70%"
        className={classes.title}
        styles={{
          root: {
            opacity: 0.3,
          },
        }}
      />
      <Skeleton height={150} width={150} className={classes.image} />
    </Container>

    <div className={classes['body-container']}>
      <Flex justify="space-between" align="center">
        <Flex justify="space-between" align="center" gap={8}>
          <Skeleton height={20} width={60} />
          <Skeleton height={20} width={100} />
        </Flex>
        <Flex justify="center" align="center" gap={32}>
          <Flex justify="space-between" align="center">
            <Skeleton height={20} width={80} />
          </Flex>
          <Flex justify="space-between" align="center">
            <Skeleton height={20} width={80} />
          </Flex>
        </Flex>
      </Flex>

      <Flex justify="space-between" align="center" wrap="wrap" gap={8}>
        <Flex gap={8} justify="center" align="center">
          <Skeleton height={20} width={80} />
          <Flex gap={4}>
            <Skeleton height={24} width={80} radius="xl" />
            <Skeleton height={24} width={80} radius="xl" />
          </Flex>
        </Flex>
        <Flex gap={8} justify="center" align="center">
          <Skeleton height={20} width={60} />
          <Flex gap={4}>
            <Skeleton height={24} width={60} radius="xl" />
            <Skeleton height={24} width={60} radius="xl" />
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="column" gap={8}>
        <Skeleton height={20} width={60} />
        {[...Array(6)].map((_, index) => (
          <Flex key={index} align="center" gap={8}>
            <Skeleton height={20} width={100} />
            <Skeleton
              height={8}
              radius="xl"
              styles={{
                root: {
                  flex: 1,
                },
              }}
            />
            <Skeleton height={20} width={40} />
          </Flex>
        ))}
      </Flex>
    </div>
  </div>
);
