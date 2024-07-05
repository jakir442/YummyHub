import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/yummyhub/",
  plugins: [react()],
  build: {
    outDir: "dist", // Pastikan output directory adalah 'dist'
  },
});
