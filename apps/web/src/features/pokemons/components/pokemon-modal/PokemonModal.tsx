import {
  Badge,
  Container,
  Flex,
  Image,
  Modal,
  Progress,
  Text,
} from '@mantine/core';
import { usePokemonStore } from '../../../../store/pokemon.store';
import { useFetchPokemonById } from '../../hooks/useFetchPokemonById.hook';
import classes from './pokemon-modal.module.css';
import { IconArrowAutofitHeight, IconWeight } from '@tabler/icons-react';
import { getPokemonTypeColor } from '../../utils/get-pokemon-type-color';
import { getPokemonStat } from '../../utils/get-pokemon-stat';
import { PokemonModalSkeleton } from './components/pokemon-modal-skeleton';

export const PokemonModal = () => {
  const { isModalOpen, closeModal } = usePokemonStore();
  const { data: pokemon, isLoading } = useFetchPokemonById();
  const { img, name, height, weight, abilities, stats, types } = pokemon ?? {};

  if (!isModalOpen) return null;

  const getColorBar = (value: number) => {
    if (value <= 30) return 'var(--color-red)';
    if (value <= 60) return 'var(--color-orange)';
    return 'var(--color-green)';
  };

  return (
    <Modal
      opened={isModalOpen}
      onClose={closeModal}
      centered
      size="lg"
      radius={16}
      classNames={{
        root: classes.modal,
        header: classes.header,
        body: classes.body,
        content: classes.content,
      }}
    >
      {isLoading ? (
        <PokemonModalSkeleton />
      ) : (
        pokemon && (
          <div>
            <Container className={classes['section-image']}>
              <Text className={classes.title}>{name?.toUpperCase()}</Text>
              <Image src={img} alt={name} className={classes.image} />
            </Container>

            <div className={classes['body-container']}>
              <Flex justify="space-between" align="center" wrap="wrap">
                <Flex justify="space-between" align="center" gap={8}>
                  <Text fw={700}>Name: </Text>
                  <Text>{name}</Text>
                </Flex>
                <Flex justify="center" align="center" gap={32}>
                  <Flex justify="space-between" align="center">
                    <IconWeight size={20} /> {weight} hg
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <IconArrowAutofitHeight size={20} /> {height} dm
                  </Flex>
                </Flex>
              </Flex>

              <Flex justify="space-between" align="center" wrap="wrap" gap={8}>
                <Flex gap={8} justify="center" align="center">
                  <Text fw="700">Abilities: </Text>
                  {abilities?.map((ability) => (
                    <Badge
                      key={ability}
                      color="var(--color-primary)"
                      variant="outline"
                    >
                      {ability}
                    </Badge>
                  ))}
                </Flex>
                <Flex gap={8} justify="center" align="center">
                  <Text fw="700">Types: </Text>
                  {types?.map((type) => (
                    <Badge
                      key={type}
                      color={getPokemonTypeColor(type)}
                      variant="filled"
                    >
                      {type}
                    </Badge>
                  ))}
                </Flex>
              </Flex>
              <Flex direction="column" gap={8}>
                <Text fw="700">Stats: </Text>
                {stats?.map((stat) => (
                  <Flex key={stat.name} align="center" gap={8}>
                    <Text w={100}>{getPokemonStat(stat.name)}</Text>
                    <Progress
                      value={Number(stat.value)}
                      color={getColorBar(stat.value)}
                      size="md"
                      w="100%"
                      radius="xl"
                    />
                    <Text w={40} ta="right">
                      {stat.value}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </div>
          </div>
        )
      )}
    </Modal>
  );
};
