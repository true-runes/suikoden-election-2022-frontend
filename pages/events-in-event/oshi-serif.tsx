import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import HumbergerNavigation from '../../components/HumbergerMenu/HumbergerNavigation'
import NavBar from '../../components/NavBar'
import SiteFooter from '../../components/SiteFooter'

import { useLocale } from '../../hooks/useLocale'

const OshiSerif: NextPage = () => {
  const { t, locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`${t.PAGE_TITLE_OSHI_SERIF} - ${t.WEBSITE_TITLE}`}</title>
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
            <li>{t.PAGE_TITLE_OSHI_SERIF}</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
                {t.PAGE_TITLE_OSHI_SERIF}
              </h1>

              <h2 className="text-xl font-bold pb-4">
                {locale === 'ja'
                  ? '推し台詞教えて！とは？'
                  : 'What is fave quote?'}
              </h2>
              <div className="text-base text-left pb-4">
                幻水に登場する、あなたの好きな台詞（推し台詞）を教えてもらえませんか？
                ご投稿頂きました台詞は開票ツイートに掲載いたします。
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">詳細</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2"> お一人様いくつでも投稿できます。</li>
                  <li className="pb-2">
                    公式小説や公式コミックスなど、
                    <span className="text-red-500">
                      ゲーム本編以外に登場する台詞でもOK
                    </span>
                    です。 （小説版や漫画版は出典を書いて下さい）
                  </li>
                  <li className="pb-2">
                    昨年と同じ台詞をご投稿頂いても構いません。
                  </li>
                  <li className="pb-2">
                    1キャラに対して複数の台詞を頂きました場合、掲載する台詞は主催側で選ばせて頂きます。
                  </li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">募集締切</h2>
              <div className="text-base text-center pb-4">
                <span className="text-red-500">2022年6月26日（日）23:59</span>
              </div>

              <div className="divider" />

              <h3 className="text-xl font-bold pb-4">投稿方法</h3>
              <div className="text-base text-left pb-4">
                <div className="pb-2">
                  ・キャラ名 <br />
                  ・台詞
                  <br /> ・ハッシュタグ「
                  <span className="font-bold">#幻水総選挙推し台詞</span>」<br />
                </div>
                を記載し、主催（@gensosenkyo）宛ツイートで投稿して下さい。
                よろしければ選んだ理由なども語って下さい。
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">ツイート例</h2>
              <div className="pb-4">
                <Image
                  src="/oshi_serif_sample.png"
                  alt="推し台詞ツイート例"
                  width={1176}
                  height={490}
                />
              </div>

              <div className="divider" />

              <h3 className="text-xl font-bold pb-4">補足</h3>
              <div className="text-base text-left pb-4">
                非公開アカウントの方は、主催宛DMでお送り下さい。幻水総選挙サブアカウントから、キャラと推し台詞をツイートでご紹介します。
                <br />
                これにより、台詞がボーナス票の対象となります。
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

export default OshiSerif
