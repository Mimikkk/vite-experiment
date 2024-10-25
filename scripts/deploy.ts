import { Command, EnumType } from "jsr:@cliffy/command@1.0.0-rc.7";
import { resolve } from "jsr:@std/path";
import { type ApplicationName, config } from "../configurations/library/libraries.config.ts";

interface DeployOptions {
  prod?: boolean;
  name?: string;
  test?: boolean;
}

const projectRoot = Deno.cwd();
const runCommand = async (
  command: string,
  args: string[],
  location: string = "",
) => {
  const cmd = new Deno.Command(command, {
    args,
    cwd: resolve(projectRoot, location),
  });

  const status = await cmd.spawn().status;

  if (!status.success) {
    throw new Error(
      `Command '${command}' failed with exit code ${status.code}`,
    );
  }
};

const build = (path: string) => runCommand("deno", ["task", "build"], path);

const deploy = (path: string, options: DeployOptions) => {
  const args = ["deploy"];
  if (options.name) args.push("--project", options.name);
  if (options.prod) args.push("--prod");
  if (options.test) args.push("--dry-run");
  args.push("jsr:@std/http/file-server");

  return runCommand("deployctl", args, `${path}/build`);
};

await new Command()
  .name("deploy")
  .description("Deploy an application to the deployctl")
  .type(
    "application-name",
    new EnumType(Object.keys(config.applications) as ApplicationName[]),
  )
  .option(
    "-n, --name <name:application-name>",
    "Name of the application to deploy",
    {
      required: true,
    },
  )
  .option("-p, --prod", "Deploy to production")
  .option("-t, --test", "Perform a dry run test")
  .action(async (options) => {
    const path = config.applications[options.name];

    await build(path);
    await deploy(path, options);
  })
  .parse(Deno.args);
