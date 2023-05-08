import { create } from "zustand";

export interface SearchModalStore {
  isOPen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const useSearchModal = create<SearchModalStore>((set) => ({
  isOPen: false,
  onClose: () => set({ isOPen: false }),
  onOpen: () => set({ isOPen: true }),
}));
export default useSearchModal;
