import { resolve } from "jsr:@std/path";
import { config } from "../configurations/library/libraries.config.ts";

Deno.chdir("../");
const projectPath = Deno.cwd();

const paths = Object.values(config.libraries);

const execPath = Deno.execPath();
const promises = paths
  .map((path) => resolve(projectPath, path, "..")).map(
    (cwd) =>
      new Deno.Command(execPath, {
        args: ["task", "--config", "jsr.json", "build"],
        cwd,
      }),
  ).map((command) => command.spawn().status);

await Promise.all(promises);
const publish = new Deno.Command(Deno.execPath(), {
  args: ["publish", "--dry-run", "--allow-dirty"],
  cwd: projectPath,
});

await publish.spawn().status;
