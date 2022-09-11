#!/bin/bash

set -euox pipefail

# shellcheck disable=SC2002
current_version="$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' | xargs)"
current_date=$(date +'%-y.%-m.%-d')
echo "current date: $current_date"

if [ "$current_version" == "$current_date" ]; then
  echo "same calver date: $current_version == $current_date, creating an rc version instead .."
  # shellcheck disable=SC2086
  new_version=$(./build/index.js calendar.rc -r $current_version -f yy.mm.dd)
else
  # shellcheck disable=SC2086
  new_version=$(./build/index.js calendar -r $current_version -f yy.mm.dd)
fi

# shellcheck disable=SC2086
echo "new version: ${new_version}"

# shellcheck disable=SC2086
yarn version --new-version $new_version
# yarn publish --tag v"$new_version"
# git push --tags