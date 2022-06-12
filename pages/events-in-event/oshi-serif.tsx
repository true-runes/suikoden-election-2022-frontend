import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import NavBar from '@/components/NavBar'
import SiteFooter from '@/components/SiteFooter'

import { useLocale } from '@/hooks/useLocale'

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
                  <li className="pb-2">お一人様でいくつでも投稿できます。</li>
                  <li className="pb-2">
                    公式小説や公式コミックスなど、
                    <span className="text-red-500">
                      ゲーム本編以外に登場する台詞でもOK
                    </span>
                    です。 （小説版や漫画版は出典を書いて下さい）
                  </li>
                  <li className="pb-2">
                    過去の総選挙で使用した台詞と同じものでも構いません。
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
                  <ul className="list-disc pl-6 pr-2">
                    <li className="pb-2">キャラ名</li>
                    <li className="pb-2">台詞</li>
                    <li className="pb-2">
                      ハッシュタグ「
                      <a
                        href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%99%E6%8E%A8%E3%81%97%E5%8F%B0%E8%A9%9E&src=typed_query&f=live"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 text-blue-500 hover:text-blue-900"
                      >
                        #幻水総選挙推し台詞
                      </a>
                      」
                    </li>
                  </ul>
                </div>
                を記載し、「 <span className="font-bold">@gensosenkyo</span>{' '}
                」宛ツイートで投稿して下さい。
                よろしければ選んだ理由なども語って下さい。
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">ツイート例</h2>
              <div className="pb-4">
                <Image
                  src="/oshi_serif_sample.png"
                  alt="推し台詞ツイート例"
                  width={1170}
                  height={540}
                />
              </div>

              <div className="divider" />

              <h3 className="text-xl font-bold pb-4">応募の受理</h3>
              <div className="text-base text-left pb-4">
                投稿ツイートには、幻水総選挙のサブアカウント（@sub_gensosenkyo）から
                <span className="text-red-500">
                  「いいね」を付けさせていただきます。
                </span>
                <br />
                これをもってご応募が受理されたものといたします。
                <br />
                ※投稿から一週間経っても「いいね」がない場合は、お手数ですがDMにてお問い合わせ下さい。
              </div>

              <div className="divider" />

              <h3 className="text-xl font-bold pb-4">非公開アカウントの方へ</h3>
              <div className="text-base text-left pb-4">
                非公開アカウントの方は、主催宛DMでお送り下さい。
                <br />
                幻水総選挙のサブアカウント（@sub_gensosenkyo）から、キャラ名と推し台詞をツイートします。
                <br />
                これにより、応募した台詞が{' '}
                <Link href="/events-in-event/bonus-votes" passHref>
                  <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900 pr-1">
                    ボーナス票
                  </span>
                </Link>
                の対象となります。
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
