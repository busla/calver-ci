# calver-ci

Simple cli wrapper for [calver](https://www.npmjs.com/package/calver).

Depends on two packages that have zero external dependencies.

Supports adding a [build-identifier](https://semver.org/#spec-item-10) attribute to simplify tracking deployment regressions.

## Usage

```bash
    Calver CI.

    Thin cli wrapper for node-calver (https://github.com/muratgozel/node-calver)
    Helpful in CI pipelines for bumping releases.
    Supports build-identifiers as declared in https://semver.org/#spec-item-10


    Usage:
        calver-ci (patch|dev|rc|..) -r <calver-format> -i <0-9A-_Za-z> [-f|--yy.mm.dd.patch]


    Examples:
        calver-ci rc -r 22.9.10.0               # 22.9.10.0-rc.0
        calver-ci rc -r 22.9.10.0-rc.0          # 22.9.10.0-rc.1
        calver-ci calendar -r 22.9.10.0-rc.0    # 22.9.10.0
        calver-ci patch -r 22.9.10.0 -i abcd123 # 22.9.10.1+abcd123
        calver-ci minor -v 22.9 -f yy.mm.minor  # 22.9.1
        calver-ci -h | --help

    Options:
        --help                   Shows this help message
        --release, -r            Calver format: see calver docs
        --identifier, -i         Sequence of <0-9A-_Za-z>: see https://semver.org/#spec-item-10
        --format, -f             Calver recipe: [default: yy.mm.dd.patch]```
