import { Flex, Image } from '@mantine/core';
import pokedex from '../../../assets/pokedexpng.png';
import { SearchBar } from '../../../ui/search-bar';
import { usePokemonStore } from '../../../../store/pokemon.store';
import classes from './header.module.css';

export const Header = () => {
  const { setFilters, filters } = usePokemonStore();
  return (
    <Flex className={classes.header}>
      <Image h={68} maw={200} src={pokedex} alt="Pokedex logo" pos="initial" />
      <SearchBar
        value={filters?.search}
        placeholder="Search your pokemon..."
        onChange={(value) => setFilters({ search: value, offset: 0 })}
      />
    </Flex>
  );
};
