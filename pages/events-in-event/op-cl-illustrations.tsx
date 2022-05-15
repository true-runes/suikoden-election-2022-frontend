import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '../../components/HumbergerMenu/HumbergerNavigation'
import NavBar from '../../components/NavBar'
import SiteFooter from '../../components/SiteFooter'

const OpClIllustrations: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <title>OPイラスト・CLイラスト - 幻水総選挙2022</title>
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
            <li>
              <Link href="/events-in-event">総選挙内企画</Link>
            </li>
            <li>OPイラスト・CLイラスト</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-4">
                OPイラスト・CLイラスト
              </h1>
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

        <div className="divider" />
        <SiteFooter />
      </main>
    </div>
  )
}

export default OpClIllustrations
