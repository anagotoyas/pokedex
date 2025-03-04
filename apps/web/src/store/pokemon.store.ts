import { create } from 'zustand';
import { Filter } from '../shared/types';

type PokemonStore = {
  filters: Filter;
  setFilters: (filters: Filter) => void;
};

export const usePokemonStore = create<PokemonStore>((set) => ({
  filters: {
    limit: 20,
    offset: 0,
  },
  setFilters: (filters: Partial<Filter>) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),
}));
