#!/bin/bash

set -euox pipefail


function create_rc() {
  local version
  version=$1
  # shellcheck disable=SC2086
  ./build/index.js calendar.rc -r $version -f yy.mm.dd
}

function create_cal() {
  local version
  version=$1
  # shellcheck disable=SC2086
  ./build/index.js calendar -r $version -f yy.mm.dd
}

# shellcheck disable=SC2002
current_version="$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' | xargs)"

current_date=$(date +'%-y.%-m.%-d')

echo "current date: $current_date"

if [ "$current_version" = "$current_date" ] || [[ "$current_version" = *"rc"* ]]; then
  echo "$current_version" = "$current_date"
  echo "$current_version includes rc"
  echo "creating an rc version ..."
  new_version=$(create_rc "$current_version")
else
  new_version=$(create_cal "$current_version")
fi

# new_version=$(./build/index.js calendar.beta -r $current_version -f yy.mm.dd)

# shellcheck disable=SC2086
echo "new version: ${new_version}"

# shellcheck disable=SC2086
yarn version --new-version $new_version
# shellcheck disable=SC2086
yarn publish --new-version $new_version --tag latest
# git push --follow-tags