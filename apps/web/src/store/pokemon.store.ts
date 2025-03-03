import { create } from 'zustand';
import { PokemonFilter } from '../shared/types';

type PokemonStore = {
  filters?: PokemonFilter;
  setFilters: (filters?: PokemonFilter) => void;
};

export const usePokemonStore = create<PokemonStore>((set) => ({
  filters: undefined,
  setFilters: (filters) => set({ filters }),
}));
