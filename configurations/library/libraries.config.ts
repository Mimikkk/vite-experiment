import { createLibraryConfig, createLibraryResolver } from "./libraries.utils.ts";

export const config = createLibraryConfig({
  applications: {
    "app-a": "workspace/apps/app-a",
  },
  libraries: {
    "@mimi/lib-a": "workspace/libs/lib-a",
    "@mimi/lib-b": "workspace/libs/lib-b",
    "@mimi/lib-ab": "workspace/libs/lib-ab",
  },
  dependencies: {
    "@mimi/lib-a": [],
    "@mimi/lib-b": [],
    "@mimi/lib-ab": ["@mimi/lib-a", "@mimi/lib-b"],
  },
});

export type ApplicationName = keyof typeof config.applications;
export type LibraryName = keyof typeof config.libraries;
export const { dependencies, paths, visualize, path, entry } = createLibraryResolver(config);
