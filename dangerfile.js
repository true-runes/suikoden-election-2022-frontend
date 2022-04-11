// cf. https://danger.systems/js/tutorials/node-app.html

const changedNumberOfLines = danger.git.lines_of_code
const LARGE_NUMBER_OF_CHANGED_LINES = 100
const MINIMUM_NUMBER_OF_CHANGED_LINES = 10
if (changedNumberOfLines > LARGE_NUMBER_OF_CHANGED_LINES) {
  warn(
    `👮‍♂ Pull Request が ${LARGE_NUMBER_OF_CHANGED_LINES} 行を超えており、大きめかもしれません。`
  )
}
if (changedNumberOfLines < MINIMUM_NUMBER_OF_CHANGED_LINES) {
  message(
    `👍 Pull Request が ${MINIMUM_NUMBER_OF_CHANGED_LINES} 行未満であり、コンパクトです。`
  )
}

const isYarnLockChanged = danger.git.modified_files.includes('yarn.lock')
const isPackageJsonChanged = danger.git.modified_files.includes('package.json')
if (isYarnLockChanged && !isPackageJsonChanged) {
  warn(
    '👮‍♂ "yarn.lock" が変更されていますが、"package.json" が変更されていません。'
  )
}
