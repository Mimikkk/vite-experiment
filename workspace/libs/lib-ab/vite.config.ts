import { defineConfig } from "vite";
import { createResolveAlias } from "../../../configurations/vite/vite.resolver.ts";

export default defineConfig({
  build: {
    outDir: "build",
    lib: {
      entry: "./main.ts",
      formats: ["es"],
    },
  },
  resolve: { alias: createResolveAlias(["@mimi/lib-a", "@mimi/lib-b"]) },
});
