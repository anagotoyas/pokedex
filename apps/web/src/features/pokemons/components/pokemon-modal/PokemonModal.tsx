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
      }}
    >
      {isLoading && <p>Loading...</p>}
      {pokemon && (
        <div>
          <Container className={classes['section-image']}>
            <Text className={classes.title}>{name?.toUpperCase()}</Text>
            <Image src={img} alt={name} className={classes.image} />
          </Container>
          <div className={classes['body-container']}>
            <Flex justify="center" align="center" gap={32}>
              <Flex justify="space-between" align="center">
                <IconWeight size={20} /> {weight} kg
              </Flex>
              <Flex justify="space-between" align="center">
                <IconArrowAutofitHeight size={20} /> {height} m
              </Flex>
            </Flex>
            <Flex justify="space-between" align="center">
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
                <Flex key={stat.name} direction="column" gap={4}>
                  <Text>{getPokemonStat(stat.name)}: </Text>
                  <Progress
                    value={Number(stat.value)}
                    color={getColorBar(stat.value)}
                  />
                </Flex>
              ))}
            </Flex>
          </div>
        </div>
      )}
    </Modal>
  );
};
