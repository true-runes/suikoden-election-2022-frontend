import type { NextPage } from 'next'

const WhatIsGensosenkyo: NextPage = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold">幻水総選挙って何？</h1>
            {/* TODO: 左寄せ */}
            {/* TODO: フォントの大きさ */}
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
    </div>
  )
}

export default WhatIsGensosenkyo
