import { create } from "zustand";
import type { SidebarStore } from "./sidebar.types";

export const useStoreSidebar = create<SidebarStore>((set) => ({
  openSidebar: false,
  setOpenSidebar: () => set((state) => ({ openSidebar: !state.openSidebar })),
}));
