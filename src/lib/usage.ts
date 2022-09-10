export const usage = `
  calver-ci is thin cli wrapper for node-calver.

  see https://github.com/muratgozel/node-calver#README for detailed options.

  USAGE
      calver-ci <semantic|modifier|composite> --version [calver-format] --identifier [0-9A-Za-z-]

  EXAMPLE
      calver-ci patch --version 22.9.9.0 --identifier some-branch-abcd123

  OPTIONS
      --help                   Shows this help message
      --version, -v            serialized calver-format
      --identifier, -i         ASCI sequence, see https://semver.org/#spec-item-10
      --format, -f             calver-format
`;
