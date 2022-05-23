import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '../../components/HumbergerMenu/HumbergerNavigation'
import NavBar from '../../components/NavBar'
import SiteFooter from '../../components/SiteFooter'

import { useLocale } from '../../hooks/useLocale'

const ElectionCampaign: NextPage = () => {
  const { t, locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`${t.PAGE_TITLE_CAMPAIGNING} - ${t.WEBSITE_TITLE}`}</title>
      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <main id="page-wrap">
        <NavBar />

        <div className="text-base bg-gray-700 text-white breadcrumbs pl-6 pb-2 sticky top-16 z-50">
          <ul>
            <li>
              <Link href="/">{t.PAGE_TITLE_HOME}</Link>
            </li>
            <li>
              <Link href="/events-in-event">{t.PAGE_TITLE_PROJECTS}</Link>
            </li>
            <li>{t.PAGE_TITLE_CAMPAIGNING}</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-4 underline font-zen-old-mincho">
                {t.PAGE_TITLE_CAMPAIGNING}
              </h1>
              <h2 className="text-xl font-bold pb-4">
                {locale === 'ja' ? '選挙運動とは？' : 'What is Campaigning?'}
              </h2>
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
                  」をつけたツイートで、選挙運動をしませんか？
                  推しを応援するも良し。魅力や好きなシーンを語って布教するも良し。総選挙を盛り上げるも良し。ご自由にお使い下さい。
                </div>
                <ul className="list-disc pl-6 pr-2">
                  <li className="py-1">
                    応援するキャラ名を本文中に記載していただけますと嬉しいです。
                  </li>
                  <li className="py-1">ご自身の作品を添付してもOKです！</li>
                  （恋愛描写を含む作品は、原作程度の表現でお願いします）
                  <li className="py-1">文字のみのツイートも大歓迎です！</li>
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
