#!/bin/bash
set -euxo pipefail
cd "$(dirname "$0")"

"$HOME"/.nodenv/shims/yarn build
"$HOME"/.nodenv/shims/railway up --service "幻水総選挙2022 (development)"

exit 0
