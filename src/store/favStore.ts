import create from "zustand";
import { persist } from "zustand/middleware";

// Define the store state
interface StoreState {
  favorites: string[];
  addToFavorites: (petId: string) => void;
  removeFromFavorites: (petId: string) => void;
}

// Create the store
const useStore = create<StoreState>()(
  persist(
    (set) => ({
      favorites: [],
      addToFavorites: (petId: string) =>
        set((state) => ({ favorites: [...state.favorites, petId] })),
      removeFromFavorites: (petId: string) =>
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== petId),
        })),
    }),
    {
      name: "favoritesStore", // Name for the localStorage key
    }
  )
);

export default useStore;
