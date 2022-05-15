import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '../components/HumbergerMenu/HumbergerNavigation'
import NavBar from '../components/NavBar'

const EventsInEvent: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <title>総選挙内企画 - 幻水総選挙2022</title>
      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <main id="page-wrap">
        <NavBar />

        <div className="text-base bg-gray-700 text-white breadcrumbs pl-6 pb-2">
          <ul>
            <li>
              <Link href="/">ホーム</Link>
            </li>
            <li>総選挙内企画</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-4">① 選挙運動</h1>
              <div className="text-base text-left">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    ハッシュタグ「 #幻水総選挙運動
                    」をつけて、選挙運動をしませんか？
                    推しを応援するも良し。魅力や好きなシーンを語って布教するも良し。総選挙を盛り上げるも良し。ご自由にお使い下さい。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-4">① 開票イラスト</h1>
              <div className="text-base text-left">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    ハッシュタグ「 #幻水総選挙運動
                    」をつけて、選挙運動をしませんか？
                    推しを応援するも良し。魅力や好きなシーンを語って布教するも良し。総選挙を盛り上げるも良し。ご自由にお使い下さい。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p>総選挙内企画①　選挙運動 【選挙運動とは？】</p>
        <p>開票イラスト</p>
        <p>お題小説</p>
        <p>推し台詞</p>
        <p>オープニングイラスト・クロージングイラスト</p>
        <p>ボーナス票</p>
      </main>
    </div>
  )
}

export default EventsInEvent
