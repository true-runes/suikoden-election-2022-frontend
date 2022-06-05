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
                <br />
                イラストだけでなく文字書きの方も参加できる企画があれば…と思い、昨年より開始いたしました。
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">お題</h2>
              <div className="text-base text-left pb-4">
                <div className="pb-4">
                  ① と ② は事前に募集したお題の中から選ばせていただきました。
                  <br />
                  事前募集で頂いたお題は{' '}
                  <Link
                    href="/events-in-event/novels-on-themes-application-results"
                    passHref
                  >
                    <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                      こちら
                    </span>
                  </Link>
                </div>

                <ul className="list-none pl-0 pr-2">
                  <li className="pb-0">
                    <span className="font-bold text-red-500">① 「記念」</span>
                  </li>
                  <li className="pb-0">
                    <span className="font-bold text-red-500">
                      ② 「そういえば」
                    </span>
                  </li>
                  <li className="pb-0">
                    <span className="font-bold text-red-500">
                      ③ フリー（内容自由）
                    </span>
                  </li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">文字数</h2>
              <div className="text-base text-center pb-4">
                <p className="pb-2">140字前後 ～ 上限なし</p>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">応募数</h2>
              <div className="text-base text-left pb-4">
                何作品でもご応募できます。
                <br />
                ただし、お一人様で
                <span className="text-red-500">
                  同じキャラへの応募は各お題1作品まで
                </span>
                です。
                <br />
                <br />
                例：ヒューゴでお題①②③を1作品ずつ書く、ゲドでお題①を書く、クリスでお題②を書く
                <br />
                →可能です
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
                を記載し、「 <span className="font-bold">@gensosenkyo</span>{' '}
                」を付けたツイートで投稿して下さい。
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">ツイート例</h2>
              <div className="text-base text-center pb-4">
                <Image
                  src="/novels_on_theme_tweet_sample.png"
                  alt="お題小説ツイート例"
                  width={1168}
                  height={1318}
                />
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">応募の受理</h2>
              <div className="text-base text-left pb-4">
                投稿ツイートには、幻水総選挙のサブアカウント（@sub_gensosenkyo）から
                <span className="text-red-500">
                  「いいね」を付けさせていただきます
                </span>
                。
                <br />
                これをもってご応募が受理されたものといたします。
                <br />
                ※投稿から一週間経っても「いいね」がない場合は、お手数ですがDMにてお問い合わせ下さい。
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
                      <span className="text-red-500">
                        恋愛（カップリング）描写を含む場合は、 原作程度の表現
                      </span>
                      でお願いします。応募ツイートに必ず明記してください。
                    </li>
                  </ul>
                </div>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">作品のご紹介について</h2>
              <div className="text-base text-center pb-4">
                <div className="text-left">
                  <ul className="list-disc pl-6 pr-2">
                    <li className="pb-2">
                      開票の翌日以降、開票ツイートに繋げる形で、小説の投稿ツイートをご紹介させていただきます。
                    </li>
                    <li className="pb-2">
                      ご応募受理済みの公開ツイートが対象です。
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
                      非公開アカウントの方は、作品を主催宛DMでお送り頂きますと、幻水総選挙のサブアカウント
                      (@sub_gensosenkyo) からツイートでご紹介します。
                      <br />
                      これにより、作品が{' '}
                      <Link href="/events-in-event/bonus-votes" passHref>
                        <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900 pr-1">
                          ボーナス票
                        </span>
                      </Link>
                      の対象となります。
                    </li>
                    <li>
                      小説の作成方法は ①画像で作成 ②外部リンクを掲載 のどちらか
                    </li>
                    <li>
                      作者様のIDとお名前をツイートに掲載します（お名前のみでも可）
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
