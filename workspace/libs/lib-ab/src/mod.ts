import { foo } from "@mimi/lib-a";
import { bar } from "@mimi/lib-b";

export const foobar = (): string => foo() + bar();
