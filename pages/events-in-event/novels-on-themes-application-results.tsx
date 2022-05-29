import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import HumbergerNavigation from '../../components/HumbergerMenu/HumbergerNavigation'
import NavBar from '../../components/NavBar'
import SiteFooter from '../../components/SiteFooter'

import { useLocale } from '../../hooks/useLocale'

const NovelsOnThemesApplicationResults: NextPage = () => {
  const { t, locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`「お題」募集結果 - ${t.WEBSITE_TITLE}`}</title>
      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <main id="page-wrap">
        <NavBar />

        <div className="text-base bg-gray-700 text-white breadcrumbs pl-6 pb-2 sticky top-16 z-50">
          <ul>
            <li>
              <Link href="/" passHref>
                {t.PAGE_TITLE_HOME}
              </Link>
            </li>
            <li>
              <Link href="/events-in-event" passHref>
                {t.PAGE_TITLE_PROJECTS}
              </Link>
            </li>
            <li>
              <Link href="/events-in-event/novels-on-themes" passHref>
                {t.PAGE_TITLE_NOVELS_ON_THEME}
              </Link>
            </li>
            <li>「お題」募集結果</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
                「お題」募集結果
              </h1>

              <h2 className="text-xl font-bold pb-4">募集結果</h2>
              <div className="text-base text-left pb-0">
                <div className="text-base text-left pb-4">
                  「お題」募集でご応募いただきましたお題の一覧です。
                  ご応募ありがとうございました！
                </div>

                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">特訓</li>
                  <li className="pb-2">買い物</li>
                  <li className="pb-2">ひみつだよ</li>
                  <li className="pb-2">大好き</li>
                  <li className="pb-2">信じてる</li>
                  <li className="pb-2">家</li>
                  <li className="pb-2">思い出</li>
                  <li className="pb-2">願い</li>
                  <li className="pb-2">昔話</li>
                  <li className="pb-2">紋章</li>
                  <li className="pb-2">「そういえば」</li>
                  <li className="pb-2">記念（総選挙十周年記念にちなんで）</li>
                  <li className="pb-2">
                    あつい（暑い、熱い、厚い、「あ、つい」などなんでも）
                  </li>
                  <li className="pb-2">水</li>
                  <li className="pb-2">応援</li>
                  <li className="pb-2">夜空</li>
                  <li className="pb-2">湖</li>
                  <li className="pb-2">釣り</li>
                  <li className="pb-2">チンチロリン</li>
                  <li className="pb-2">休息</li>
                  <li className="pb-2">決意</li>
                  <li className="pb-2">友</li>
                  <li className="pb-2">始まり</li>
                  <li className="pb-2">終わり</li>
                  <li className="pb-2">料理勝負</li>
                  <li className="pb-2">スイーツ</li>
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

export default NovelsOnThemesApplicationResults
