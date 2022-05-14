import type { NextPage } from 'next'

const WhatIsGensosenkyo: NextPage = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border-base-300 bg-base-100"
      >
        <input type="checkbox" className="peer" style={{ minHeight: 0 }} />
        <div className="collapse-title text-2xl font-medium text-center">
          幻水総選挙って何？
        </div>
        <div className="collapse-content">
          <ul className="py-6 px-6 text-base text-left list-disc">
            <li>好きなキャラに投票する、ツイッター内のイベントです。</li>
            <li>
              非公式のファン企画で、既存の企業様、関係者様等とは一切関係ありません。
            </li>
            <li>
              総選挙を通して幻水ファン盛り上がろうぜ！という趣旨のお祭りですので、よろしくお願い致します。
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WhatIsGensosenkyo
