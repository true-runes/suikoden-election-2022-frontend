// cf. https://danger.systems/js/tutorials/node-app.html
// cf. https://danger.systems/js/reference.html#GitDSL
// cf. https://danger.systems/reference.html

;(async () => {
  const changedNumberOfLines = await danger.git.linesOfCode()
  const LARGE_NUMBER_OF_CHANGED_LINES = 100
  const MINIMUM_NUMBER_OF_CHANGED_LINES = 10

  // TODO: main ブランチの場合はスキップするように修正する
  if (changedNumberOfLines > LARGE_NUMBER_OF_CHANGED_LINES) {
    warn(
      `👮‍♂ Pull Request が ${LARGE_NUMBER_OF_CHANGED_LINES} 行を超えており、大きめかもしれません（mainブランチ への Pull Request ならば問題ありません）。`
    )
  }

  if (changedNumberOfLines < MINIMUM_NUMBER_OF_CHANGED_LINES) {
    message(
      `👍 Pull Request が ${MINIMUM_NUMBER_OF_CHANGED_LINES} 行未満であり、コンパクトです。`
    )
  }

  // markdown() も使える
  message(`🖊 今回の Pull Request の変更行数は ${changedNumberOfLines} 行です。`)
})()

const isYarnLockChanged = danger.git.modified_files.includes('yarn.lock')
const isPackageJsonChanged = danger.git.modified_files.includes('package.json')

if (isYarnLockChanged && !isPackageJsonChanged) {
  warn(
    '👮‍♂ "yarn.lock" が変更されていますが、"package.json" が変更されていません。'
  )
}
