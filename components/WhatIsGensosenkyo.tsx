import type { NextPage } from 'next'

const WhatIsGensosenkyo: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-4">幻水総選挙って何？</h1>
            <div className="text-base text-left">
              <ul className="list-disc pl-6 pr-2">
                <li className="pb-2">
                  好きな幻水キャラに投票する、非公式のTwitterイベントです
                </li>
                <li className="pb-2">
                  有志によるファン企画であり、既存の企業様、関係者様等とは一切関係ありません
                </li>
                <li className="pb-2">
                  幻水総選挙をきっかけに「幻水が好き！」「このキャラが好き！」という思いを発信できる場にできたらいいなと思います
                </li>
                <li className="pb-2">
                  幻水ファンが盛り上がれるお祭りのようなイベントを目指して頑張りますので、どうぞよろしくお願い致します
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatIsGensosenkyo
