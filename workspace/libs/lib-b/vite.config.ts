import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "build",
    lib: {
      entry: "./main.ts",
      formats: ["es"],
    },
  },
});
