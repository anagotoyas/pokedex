import { Flex, Image } from '@mantine/core';
import pokedex from '../../../assets/pokedexpng.png';
import { SearchBar } from '../../../ui/search-bar/SearchBar';
import { usePokemonStore } from '../../../../store/pokemon.store';
import classes from './header.module.css';

export const Header = () => {
  const { setFilters, filters } = usePokemonStore();
  return (
    <Flex justify="center" align="center" className={classes.header} gap={32}>
      <Image h={68} src={pokedex} alt="Pokedex logo" pos="initial" />
      <SearchBar
        value={filters?.search}
        placeholder="Search your pokemon!"
        onChange={(value) => setFilters({ search: value })}
      />
    </Flex>
  );
};
