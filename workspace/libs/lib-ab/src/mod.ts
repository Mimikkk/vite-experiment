/**
 * @module lib-ab
 *
 * This module exports the `foobar` function which returns the concatenation of "foo" and "bar" from the `lib-a` and `lib-b` modules.
 *
 * @example
 * ```ts
 * import { foobar } from "@mimi/lib-ab";
 * foobar(); // "foobar"
 * ```
 */
import { foo } from "@mimi/lib-a";
import { bar } from "@mimi/lib-b";

/**
 * @description This function returns the concatenation of "foo" and "bar".
 * @returns "foobar"
 */
export const foobar = (): string => foo() + bar();
