import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { bar } from "./mod.ts";

describe("Library - lib-b", () => {
  it("bar", () => {
    expect(bar()).toBe("bar");
  });
});
