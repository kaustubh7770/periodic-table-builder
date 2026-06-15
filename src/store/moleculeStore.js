import { create } from "zustand";

const useMoleculeStore = create((set) => ({
  selectedAtoms: [],

  addAtom: (atom) =>
    set((state) => ({
      selectedAtoms: [...state.selectedAtoms, atom],
    })),

  clearAtoms: () =>
    set({
      selectedAtoms: [],
    }),
}));

export default useMoleculeStore;