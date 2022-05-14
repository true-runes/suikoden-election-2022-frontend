import type { NextPage } from 'next'

const Kikaku: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-4">総選挙内企画</h1>
            <p className="pb-4">
              今年も下記を募集します。詳細は後日発表いたします。
            </p>
            <div className="text-base text-left pb-4">
              <ul className="list-decimal pl-6 pr-2">
                <li className="pb-2">開票イラスト</li>
                <li className="pb-2">お題小説</li>
                <li className="pb-2">推し台詞</li>
                <li className="pb-2">
                  オープニングイラスト・クロージングイラスト
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kikaku
