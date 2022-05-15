import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '../../components/HumbergerMenu/HumbergerNavigation'
import NavBar from '../../components/NavBar'
import SiteFooter from '../../components/SiteFooter'

const ElectionCampaign: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <title>選挙運動 - 幻水総選挙2022</title>
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
            <li>選挙運動</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-4 underline font-zen-old-mincho">
                選挙運動
              </h1>
              <h2 className="text-xl font-bold pb-4">選挙運動とは？</h2>
              <div className="text-base text-left">
                <div className="pb-4">
                  ハッシュタグ「{' '}
                  <a
                    href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%99%E9%81%8B%E5%8B%95&src=typed_query&f=live"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 text-blue-500 hover:text-blue-900"
                  >
                    #幻水総選挙運動
                  </a>{' '}
                  」をつけて、選挙運動をしませんか？
                  推しを応援するも良し。魅力や好きなシーンを語って布教するも良し。総選挙を盛り上げるも良し。ご自由にお使い下さい。
                </div>
                <ul className="list-disc pl-6 pr-2">
                  <li className="py-1">
                    応援するキャラ名を本文中に記載していただけますと嬉しいです。
                  </li>
                  <li className="py-1">文字のみのツイートも大歓迎です！</li>
                  <li className="py-1">
                    ご自身の作品を添付していただいても構いません。
                  </li>
                  （恋愛描写を含む作品を添付する場合は、原作程度の表現でお願いします）
                  <li className="py-1">
                    「{' '}
                    <a
                      href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%992022&src=typed_query&f=live"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 text-blue-500 hover:text-blue-900"
                    >
                      #幻水総選挙2022
                    </a>{' '}
                    」タグの使用は任意です。
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

export default ElectionCampaign
