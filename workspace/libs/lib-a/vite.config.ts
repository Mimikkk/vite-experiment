import { defineConfig } from "vite";

export default defineConfig({
  lib: {
    entry: "./main.ts",
    formats: ["es"],
  },
});
