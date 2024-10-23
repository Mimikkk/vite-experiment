import { dirname, fromFileUrl, resolve } from "jsr:@std/path";
import type { AliasOptions, ResolverFunction } from "vite";
import {
  dependencies,
  type LibraryName,
  path,
} from "../library/libraries.resolver.ts";

export const resolveRoot = () =>
  resolve(dirname(fromFileUrl(import.meta.url)), "../../");

export interface CreateResolverOptions {
  root: string;
}

export const createResolver =
  ({ root }: CreateResolverOptions): ResolverFunction => (slug: string) => {
    const resolvedId = resolve(root, slug);

    return { id: resolvedId, attributes: { path: resolvedId } };
  };

const _resolver = createResolver({ root: resolveRoot() });

export const createResolveAlias = (
  libaries: LibraryName[],
  resolver: ResolverFunction = _resolver,
): AliasOptions =>
  dependencies(libaries).map((name) => ({
    find: name,
    replacement: path(name),
    customResolver: resolver,
  }));
