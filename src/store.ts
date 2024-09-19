import { create } from "zustand";
//File for zustand to manage state for game query object

//Our interface for making queries
interface GameQuery {
  platformId?: number;
  genreId?: number;
  sortOrder?: string;
  searchText?: string;
}

//Our query store that manages app state.
interface GameQueryStore {
  gameQuery: GameQuery;
  inputValue: string;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setInputValue: (value: string) => void;
  clearFitlers: () => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  //Initialize our query object and search field
  gameQuery: {},
  inputValue: "",

  //When setSearch function is called set gameQuery to be just the searchText, clear all others
  setSearchText: (searchText) =>
    set(() => ({
      gameQuery: { searchText },
      inputValue: searchText,
    })),

  //When function is called spread the current gameQuery and append genreId
  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId },
    })),

  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId },
    })),

  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder },
    })),
  setInputValue: (value: string) =>
    set(() => ({
      inputValue: value,
    })),
  clearFitlers: () =>
    set(() => ({
      gameQuery: {
        // ...state.gameQuery,
        // platformId: undefined,
        // genreId: undefined,
        // sortOrder: undefined,
        // searchText: undefined,
      },
      inputValue: "",
    })),
}));
export default useGameQueryStore;
