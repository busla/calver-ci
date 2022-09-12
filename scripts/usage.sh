#!/bin/bash

set -euo pipefail

PROJECT_DIR=$(git rev-parse --show-toplevel)

output="$(node "${PROJECT_DIR}"/build/index.js -h  2>&1)"

cat << EOF >>"${PROJECT_DIR}"/README.md

\`\`\`bash${output}\`\`\`
EOF
