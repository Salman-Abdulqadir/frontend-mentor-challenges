import { create } from "zustand";
import { Extension, FilterType, Theme } from "../types";

interface ExtensionStore {
  extensions: Extension[];
  activeFilter: FilterType;
  searchQuery: string;
  theme: Theme;
  setExtensions: (extensions: Extension[]) => void;
  toggleExtension: (id: string) => void;
  removeExtension: (id: string) => void;
  setActiveFilter: (filter: FilterType) => void;
  setSearchQuery: (query: string) => void;
  toggleTheme: () => void;
}

export const useExtensionStore = create<ExtensionStore>((set) => ({
  extensions: [],
  activeFilter: "all",
  searchQuery: "",
  theme: "light",
  setExtensions: (extensions) => set({ extensions }),
  toggleExtension: (id) =>
    set((state) => ({
      extensions: state.extensions.map((ext) =>
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
      ),
    })),
  removeExtension: (id) =>
    set((state) => ({
      extensions: state.extensions.filter((ext) => ext.id !== id),
    })),
  setActiveFilter: (filter) => set({ activeFilter: filter }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
