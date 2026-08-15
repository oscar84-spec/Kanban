import { create } from "zustand";
import type { Theme, ThemeConfig } from "@stores/theme/theme.types.ts";

const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem("theme") as Theme | null;

  if (stored) return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme: Theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");

  localStorage.setItem("theme", theme);
};

export const useThemeStore = create<ThemeConfig>((set, get) => ({
  theme: getInitialTheme(),
  toggleTheme: () => {
    const next = get().theme === "dark" ? "light" : "dark";
    applyTheme(next);
    set({ theme: next });
  },
  setTheme: (t) => {
    applyTheme(t);
    set({ theme: t });
  },
}));
