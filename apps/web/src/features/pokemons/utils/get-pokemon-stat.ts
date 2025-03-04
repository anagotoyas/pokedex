import { PokemonStat } from '../types';

export const getPokemonStat = (stat: PokemonStat): string => {
  const statNames: Record<PokemonStat, string> = {
    hp: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    'special-attack': 'Special Attack',
    'special-defense': 'Special Defense',
    speed: 'Speed',
  };

  return statNames[stat] || stat;
};
