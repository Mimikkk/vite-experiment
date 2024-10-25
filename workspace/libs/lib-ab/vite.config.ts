import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { createLibraryBuild, createResolveAlias } from "../../../configurations/vite/vite.resolver.ts";

export default defineConfig({
  build: createLibraryBuild(),
  resolve: { alias: createResolveAlias(["@mimi/lib-a", "@mimi/lib-b"]) },
  plugins: [dts()],
});
