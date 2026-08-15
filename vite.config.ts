import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

const src = import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(src, "./src"),
      "@components": path.resolve(src, "./src/components"),
      "@pages": path.resolve(src, "./src/pages"),
      "@stores": path.resolve(src, "./src/stores"),
    },
  },
});
