import calver from "calver";
import arg from "arg";
import type { Spec } from "arg";

const usage = `
  USAGE
      calver-cli --latest 22.9.9.0 --modifier patch --identifier some-branch-abcd123

  OPTIONS
      --help                   Shows this help message
      --latest, -l             calver-format
      --modifier, -m           semantic|modifier|composite, see https://github.com/muratgozel/node-calver
      --identifier, -i         ASCI sequence, see https://semver.org/#spec-item-10
`;

const error = (msg: string): never => {
  console.error(msg);
  process.exit(2); // ignore stack trace when exiting
};

const spec: Spec = {
  "--help": Boolean,
  "--latest": String,
  "--modifier": String,
  "--identifier": String,

  // Aliases
  "-h": "--help",
  "-l": "--latest",
  "-m": "--modifier",
  "-i": "--identifier",
};
const args = arg(spec);

if (args["--help"]) console.error(usage);

const latest = args["--latest"] || error("missing required argument: --latest");
const identifier =
  args["--identifier"] || error("missing required argument: --identifier");
const modifier = args["--modifier"] || "calendar";

const finalizeVersion = (version: string, buildId: string): string => {
  return buildId !== "" ? `${version}+${buildId}` : version;
};

const getNextTag = (
  tag: string,
  modifier: string,
  buildId = ""
): string | never => {
  if (!tag) {
    error("latest git tag missing!");
  }
  const format = "yy.mm.dd.patch";

  try {
    const version = calver.inc(format, `${tag}`, modifier);
    return finalizeVersion(version, buildId);
  } catch (e) {
    return error(`${e.message}, ${tag}`);
  }
};

const nextTag = getNextTag(latest, modifier, identifier);
console.log(nextTag);
