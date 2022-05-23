import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '../../components/HumbergerMenu/HumbergerNavigation'
import NavBar from '../../components/NavBar'
import SiteFooter from '../../components/SiteFooter'

import { useLocale } from '../../hooks/useLocale'

const NovelsOnThemes: NextPage = () => {
  const { t, locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`${t.PAGE_TITLE_NOVELS_ON_THEME} - ${t.WEBSITE_TITLE}`}</title>
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
            <li>{t.PAGE_TITLE_NOVELS_ON_THEME}</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-4 underline font-zen-old-mincho">
                {t.PAGE_TITLE_NOVELS_ON_THEME}
              </h1>

              <h2 className="text-xl font-bold pb-4">
                {locale === 'ja'
                  ? 'お題小説とは？'
                  : 'What is themed short stories?'}
              </h2>
              <div className="text-base text-left pb-4">
                キャラとお題（テーマ）を選んで小説を書いていただき、ハッシュタグを付けてツイートする企画です。
                イラストだけでなく文字書きの方も参加できる企画があれば…と思い、昨年より開始いたしました。
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">お題小説の「お題」募集</h2>
              <div className="text-base text-left pb-4">
                <p className="pb-2">
                  企画に使わせていただくお題を募集します。
                  単語やセリフなど、何でもOKです。
                </p>
                <p>
                  お題は全部で3つで、そのうち1つは「フリー（内容自由）」となります。残りの2つを募集します。
                </p>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">昨年のお題</h2>
              <div className="text-base text-left pb-4">
                <div className="pb-4">昨年のお題は下記の3つでした。</div>

                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">「祭」</li>
                  <li className="pb-2">「どれにする？」</li>
                  <li className="pb-2">（フリー）</li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">募集期間</h2>
              <div className="text-base text-center pb-4">
                2022年5月15日（日）～5月21日（土）
              </div>

              <div className="divider" />

              <h3 className="text-xl font-bold pb-4">応募方法</h3>
              <div className="text-base text-left pb-4">
                下記フォームよりお題を送信してください。
                なお、ご送信いただきました内容について、個別のご連絡やご返信は行ないませんのでご了承ください。
              </div>
              <div className="text-base text-center pb-4">
                <a
                  href="https://ws.formzu.net/dist/S669729239/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
                >
                  お題応募用フォーム
                </a>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">お題小説の投稿について</h2>
              <div className="text-base text-left">
                小説作品の投稿方法などについては、後日発表いたします。
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

export default NovelsOnThemes
