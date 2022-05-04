#!/bin/bash
set -euxo pipefail
cd ""$(dirname ""$0"")""

railway up --service "幻水総選挙2022 (development)"

exit 0
