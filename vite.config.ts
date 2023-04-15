import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

import { URL, fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

