import { create } from 'zustand';
import { Filter } from '../shared/types';

type PokemonStore = {
  filters: Filter;
  setFilters: (filters: Filter) => void;
  selectedPokemon: number | null;
  isModalOpen: boolean;
  openModal: (pokemonId: number) => void;
  closeModal: () => void;
};

export const usePokemonStore = create<PokemonStore>((set) => ({
  filters: {
    limit: import.meta.env.VITE_DEFAULT_LIMIT
      ? parseInt(import.meta.env.VITE_DEFAULT_LIMIT)
      : 10,
    offset: 0,
  },
  setFilters: (filters: Partial<Filter>) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),
  selectedPokemon: null,
  isModalOpen: false,
  openModal: (pokemonId) =>
    set({ selectedPokemon: pokemonId, isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));
