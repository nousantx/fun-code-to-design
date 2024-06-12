import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@src": path.resolve(__dirname, "./src"),
      "@css": path.resolve(__dirname, "./src/styles/css"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@design": path.resolve(__dirname, "./src/design")
    }
  }
});
