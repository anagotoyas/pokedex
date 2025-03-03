import { create } from 'zustand';
import { Filter } from '../shared/types';

type PokemonStore = {
  filters?: Filter;
  setFilters: (filters?: Filter) => void;
};

export const usePokemonStore = create<PokemonStore>((set) => ({
  filters: undefined,
  setFilters: (filters) => set({ filters }),
}));
