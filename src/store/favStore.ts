import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
  favorites: string[];
  addToFavorites: (petId: string) => void;
  removeFromFavorites: (petId: string) => void;
}

const useStore = create<StoreState>(
  persist(
    (set) => ({
      favorites: [],
      addToFavorites: (petId: string) =>
        set((state) => ({ favorites: [...state.favorites, petId] })),
      removeFromFavorites: (petId) =>
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== petId),
        })),
    }),
    {
      name: "petStore",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
