![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/busla/calver-ci/publish/main) [![GitHub issues](https://img.shields.io/github/issues/busla/calver-ci)](https://github.com/busla/calver-ci/issues) ![GitHub pull requests](https://img.shields.io/github/issues-pr/busla/calver-ci) ![GitHub last commit](https://img.shields.io/github/last-commit/busla/calver-ci?color=brightgreen) ![npm](https://img.shields.io/npm/dt/calver-ci?color=brightgreen&logo=npm)

![npm bundle size](https://img.shields.io/bundlephobia/min/calver-ci) ![GitHub repo size](https://img.shields.io/github/repo-size/busla/calver-ci)

![npm (prod) dependency version](https://img.shields.io/npm/dependency-version/calver-ci/calver) ![npm (prod) dependency version](https://img.shields.io/npm/dependency-version/calver-ci/arg) ![npm (prod) dependency version](https://img.shields.io/npm/dependency-version/calver-ci/slug)

![node-current](https://img.shields.io/node/v/calver-ci?color=blue)

[![GitHub license](https://img.shields.io/github/license/busla/calver-ci)](https://github.com/busla/calver-ci/blob/main/LICENSE)

# calver-ci

Simple cli wrapper for [calver](https://www.npmjs.com/package/calver).

Depends on two packages that have zero external dependencies.

Supports adding a [build-identifier](https://semver.org/#spec-item-10) attribute to simplify tracking deployment regressions.

## Usage

````bash
    Calver CI.

    Thin cli wrapper for node-calver (https://github.com/muratgozel/node-calver)
    Helpful in CI pipelines for bumping releases.
    Supports build-identifiers as declared in https://semver.org/#spec-item-10


    Usage:
        calver-ci (patch|dev|rc|..) -r <calver-format> -i <0-9A-_Za-z> [-f|--yy.mm.dd.patch] [-l|--en]


    Examples:
        calver-ci rc -r 22.9.10.0                                 # 22.9.10.0-rc.0
        calver-ci rc -r 22.9.10.0-rc.0                            # 22.9.10.0-rc.1
        calver-ci calendar -r 22.9.10.0-rc.0                      # 22.9.10.0
        calver-ci patch -r 22.9.10.0 -i abcd123                   # 22.9.10.1+abcd123
        calver-ci patch -r 22.9.10.0 -i "hvað er að frétta"       # 22.9.10.1+hvad-er-ad-fretta
        calver-ci minor -v 22.9 -f yy.mm.minor  # 22.9.1
        calver-ci -h | --help

    Options:
        --help                   Shows this help message
        --release, -r            Calver format: see calver docs
        --identifier, -i         Sequence of <0-9A-_Za-z>: see https://semver.org/#spec-item-10
        --format, -f             Calver recipe: [default: yy.mm.dd.patch]```
````
