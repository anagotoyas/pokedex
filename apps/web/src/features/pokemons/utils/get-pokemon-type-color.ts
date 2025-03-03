import { PokemonType } from '../types';

export const getPokemonTypeColor = (type: PokemonType): string => {
  const typeColors: Record<PokemonType, string> = {
    normal: 'var(--color-normal)',
    fighting: 'var(--color-fighting)',
    flying: 'var(--color-flying)',
    poison: 'var(--color-poison)',
    ground: 'var(--color-ground)',
    rock: 'var(--color-rock)',
    bug: 'var(--color-bug)',
    ghost: 'var(--color-ghost)',
    steel: 'var(--color-steel)',
    fire: 'var(--color-fire)',
    water: 'var(--color-water)',
    grass: 'var(--color-grass)',
  };

  return (
    typeColors[type.toLowerCase() as PokemonType] || 'var(--color-default)'
  );
};
