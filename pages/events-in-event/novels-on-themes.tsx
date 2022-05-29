import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

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
              <Link href="/" passHref>
                {t.PAGE_TITLE_HOME}
              </Link>
            </li>
            <li>
              <Link href="/events-in-event" passHref>
                {t.PAGE_TITLE_PROJECTS}
              </Link>
            </li>
            <li>{t.PAGE_TITLE_NOVELS_ON_THEME}</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
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

              <h2 className="text-xl font-bold pb-4">お題</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-none pl-0 pr-2">
                  <li className="pb-0">① 「記念」</li>
                  <li className="pb-0">② 「そういえば」</li>
                  <li className="pb-0">③ フリー（内容自由）</li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">文字数</h2>
              <div className="text-base text-center pb-4">
                <p className="pb-2">140字前後 ～ 上限なし</p>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">お一人様の応募可能数</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    <span className="text-red-500">
                      1キャラにつき、各お題1作品まで
                    </span>
                  </li>
                  <li className="pb-2">
                    違うキャラの作品を複数ご応募いただくのは大歓迎です
                  </li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">締切</h2>
              <div className="text-base text-center pb-4">
                <span className="text-red-500">2022年6月26日（日）23:59</span>
              </div>

              <div className="divider" />

              <h3 className="text-xl font-bold pb-4">投稿方法</h3>
              <div className="text-base text-left pb-4">
                <div className="pb-2">
                  <ul className="list-disc pl-6 pr-2">
                    <li className="pb-2">応募キャラ（1名）</li>
                    <li className="pb-2">お題</li>
                    <li className="pb-2">
                      ハッシュタグ「
                      <a
                        href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%99%E3%81%8A%E9%A1%8C%E5%B0%8F%E8%AA%AC&src=typed_query&f=live"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 text-blue-500 hover:text-blue-900"
                      >
                        #幻水総選挙お題小説
                      </a>
                      」
                    </li>
                  </ul>
                </div>
                を記載し、主催（@gensosenkyo）宛ツイートで小説を投稿して下さい。
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">ツイート例</h2>
              <div className="text-base text-center pb-4">
                <Image
                  src="/novels_on_theme_tweet_sample.png"
                  alt="お題小説ツイート例"
                  width={1162}
                  height={1264}
                />
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">小説の作成方法</h2>
              <div className="text-base text-center pb-4">
                <div className="pb-4">
                  <h3 className="text-lg text-center">
                    <div className="underline underline-offset-4 pb-4">
                      ① 画像で作成
                    </div>
                    <div className="text-base text-left pb-4">
                      <ul className="list-disc pl-6 pr-2">
                        <li className="pb-2">
                          「文庫ページメーカー」、「新書ページメーカー」などに本文を流し込んで画像にしてください
                        </li>
                        <li className="pb-2">
                          詳しくは
                          <a
                            href="https://sscard.monokakitools.net/index.html"
                            target="_blank"
                            rel="noreferrer"
                            className="link link-hover underline-offset-4"
                          >
                            <span className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                              こちら
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </h3>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg text-center pb-4">
                    <span className="underline underline-offset-4">
                      ② 外部リンクを掲載
                    </span>
                  </h3>
                  <div className="text-left">
                    <ul className="list-disc pl-6 pr-2">
                      <li className="pb-2">
                        「pixiv」、「Privatter（ぷらいべったー）」などに小説を投稿し、ツイートに
                        URL を載せて下さい。
                      </li>
                      <li className="pb-2">
                        作品の公開範囲は「
                        <span className="text-red-500">全体公開</span>
                        」でお願いします。
                      </li>
                      <li className="pb-2">
                        ぷらいべったーは「
                        <span className="text-red-500">ログイン限定公開</span>
                        」でも可能です。
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg text-center pb-4">
                    <span className="underline underline-offset-4">
                      ③ ツイートに直接書く
                    </span>
                  </h3>
                  <div className="text-left">
                    <ul className="list-disc pl-6 pr-2">
                      <li className="pb-2">
                        ツイートに本文を直接お書きください。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">注意点</h2>
              <div className="text-base text-center pb-4">
                <div className="text-left">
                  <ul className="list-disc pl-6 pr-2">
                    <li className="pb-2">
                      1ツイートに収まらない場合は、リプライ（返信）やスレッドで繋げて下さい。
                    </li>
                    <li className="pb-2">
                      一番最初のツイートには指定のハッシュタグを付けて下さい。
                    </li>
                    <li className="pb-2">
                      応募キャラ以外が登場しても構いません。
                    </li>
                    <li className="pb-2">主人公はお好きな名前をどうぞ。</li>
                    <li className="pb-2">
                      恋愛（カップリング）描写を含む場合は、
                      <span className="text-red-500">原作程度</span>
                      の表現でお願いします。応募ツイートに必ず明記してください。
                    </li>
                  </ul>
                </div>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">
                小説作品のご紹介について
              </h2>
              <div className="text-base text-center pb-4">
                <div className="text-left">
                  <ul className="list-disc pl-6 pr-2">
                    <li className="pb-2">
                      開票の翌日以降、開票ツイートに繋げる形で、お題小説をご紹介させていただきます。
                    </li>
                    <li className="pb-2">
                      繋げてほしくない方は、投稿時に「開票後の紹介不要」と記載してください。
                    </li>
                  </ul>
                </div>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">非公開アカウントの方へ</h2>
              <div className="text-base text-center pb-0">
                <div className="text-left">
                  <ul className="list-disc pl-6 pr-2">
                    <li className="pb-2">
                      非公開アカウントの方は、作品を主催宛DMでお送り頂きますと、幻水総選挙のサブアカウントからツイートでご紹介します。
                    </li>
                  </ul>
                </div>
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
