import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { createLibraryBuild } from "../../../configurations/vite/vite.resolver.ts";

export default defineConfig({
  build: createLibraryBuild(),
  plugins: [dts()],
});
