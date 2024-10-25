import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { foobar } from "./mod.ts";

describe("Library - lib-ab", () => {
  it("foobar", () => {
    expect(foobar()).toBe("foobar");
  });
});
