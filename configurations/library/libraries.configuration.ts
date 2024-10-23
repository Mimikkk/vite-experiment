export interface LibraryConfig<LibraryName extends string> {
  libraries: Record<LibraryName, string>;
  dependencies: Record<NoInfer<LibraryName>, NoInfer<LibraryName>[]>;
}

export const createLibraryConfig = <const LibraryName extends string>(
  config: LibraryConfig<LibraryName>,
): LibraryConfig<LibraryName> => {
  return config;
};

export const createLibraryResolver = <const LibraryName extends string>(
  config: LibraryConfig<LibraryName>,
) => {
  const path = (library: LibraryName): string => config.libraries[library];

  const readDependencies = (libraries: LibraryName[]): LibraryName[] => {
    const visited = new Set<LibraryName>();
    const stack: [LibraryName, LibraryName[]][] = libraries.map(
      (lib) => [lib, []],
    );

    while (stack.length > 0) {
      const [currentLib, path] = stack.pop()!;

      if (path.includes(currentLib)) {
        throw Error(
          `Circular dependency detected: ${path.join(" -> ")} -> ${currentLib}`,
        );
      }

      if (!visited.has(currentLib)) {
        visited.add(currentLib);

        const dependencies = config.dependencies[currentLib];
        if (dependencies) {
          for (const dependency of dependencies) {
            stack.push([dependency, [...path, currentLib]]);
          }
        }
      }
    }

    return [...visited];
  };

  const dependencies = (
    libraries: LibraryName | LibraryName[],
  ): LibraryName[] => {
    return readDependencies(Array.isArray(libraries) ? libraries : [libraries]);
  };

  const paths = (
    libraries: LibraryName | LibraryName[],
  ): string[] => dependencies(libraries).map(path);

  const visualize = (): string => {
    let graph = "digraph LibraryDependencies {\n";
    for (const [library, deps] of Object.entries(config.dependencies)) {
      for (const dep of deps as LibraryName[]) {
        graph += `  "${library}" -> "${dep}";\n`;
      }
    }
    graph += "}";
    return graph;
  };

  return {
    dependencies,
    paths,
    visualize,
    path,
  };
};