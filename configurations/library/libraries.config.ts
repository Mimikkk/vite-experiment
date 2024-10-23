import {
  createLibraryConfig,
  createLibraryResolver,
} from "./libraries.utils.ts";

export const config = createLibraryConfig({
  libraries: {
    "@mimi/lib-a": "workspace/libs/lib-a/main.ts",
    "@mimi/lib-b": "workspace/libs/lib-b/main.ts",
    "@mimi/lib-ab": "workspace/libs/lib-ab/main.ts",
  },
  dependencies: {
    "@mimi/lib-a": [],
    "@mimi/lib-b": [],
    "@mimi/lib-ab": ["@mimi/lib-a", "@mimi/lib-b"],
  },
});

export type LibraryName = keyof typeof config.libraries;
export const { dependencies, paths, visualize, path } = createLibraryResolver(
  config,
);
