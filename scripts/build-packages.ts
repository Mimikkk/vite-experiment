import * as vite from "npm:vite";
import liba from "../workspace/libs/lib-a/vite.config.ts";

liba.build.lib.entry = "../workspace/libs/lib-a/main.ts";
console.log(liba);
vite.build(liba);
