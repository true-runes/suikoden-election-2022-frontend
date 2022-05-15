import type { NextPage } from 'next'
import Link from 'next/link'

const Kikaku: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-4 underline font-zen-old-mincho">
              総選挙内企画
            </h1>

            <div>
              <p className="pb-4 text-left">
                今年も下記の企画を準備中です。詳細は各項目のリンク先に記載があります。
              </p>
              <div className="text-base text-left pb-4">
                <ul className="list-decimal pl-6 pr-2">
                  <li className="pb-2 link link-hover underline-offset-4">
                    <Link href="/events-in-event/election-campaign">
                      選挙運動
                    </Link>
                  </li>
                  <li className="pb-2">開票イラスト（準備中）</li>
                  <li className="pb-2 link link-hover underline-offset-4">
                    <Link href="/events-in-event/novels-on-themes">
                      お題小説
                    </Link>
                  </li>
                  <li className="pb-2">推し台詞（準備中）</li>
                  <li className="pb-2 link link-hover underline-offset-4">
                    <Link href="/events-in-event/op-cl-illustrations">
                      オープニングイラスト・クロージングイラスト
                    </Link>
                  </li>
                  <li className="pb-2">ボーナス票（準備中）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kikaku
