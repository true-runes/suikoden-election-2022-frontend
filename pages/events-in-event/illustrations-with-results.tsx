import type { NextPage } from 'next'
import Link from 'next/link'
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'

import HumbergerNavigation from '../../components/HumbergerMenu/HumbergerNavigation'
import NavBar from '../../components/NavBar'
import SiteFooter from '../../components/SiteFooter'

import { useLocale } from '../../hooks/useLocale'

const IllustrationsWithResults: NextPage = () => {
  const { t, locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`${t.PAGE_TITLE_ILLUSTRATIONS_WITH_RESULTS} - ${t.WEBSITE_TITLE}`}</title>
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
            <li>{t.PAGE_TITLE_ILLUSTRATIONS_WITH_RESULTS}</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
                {t.PAGE_TITLE_ILLUSTRATIONS_WITH_RESULTS}
              </h1>

              <h2 className="text-xl font-bold pb-4">
                {locale === 'ja'
                  ? '開票イラストとは？'
                  : 'What is voting illustrations?'}
              </h2>

              <div className="text-base text-left pb-4">
                開票当日、キャラの順位発表ツイートに掲載するイラストを募集します。お好きなキャラを描いてお送りください。
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">〆切</h2>
              <div className="text-base text-center pb-4">
                <div className="pb-2">
                  <p>一次〆切</p>
                  <p className="text-red-500 pl-1 pr-1">
                    2022年6月19日（日）23:59
                  </p>
                </div>
                <div className="pb-2">
                  <p>最終〆切</p>
                  <p className="text-red-500 pl-1 pr-1">
                    2022年6月26日（日）23:59
                  </p>
                </div>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">昨年の開票イラストの例</h2>
              <TwitterTweetEmbed
                tweetId="1406295785411551235"
                options={{ id: 'gensosenkyo', lang: 'ja' }}
              />

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">募集概要</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    イラストが描かれた画像ファイルをご応募ください。詳細は後述します。
                  </li>
                  <li className="pb-2">
                    お一人様で
                    <span className="text-red-500 pl-1 pr-1">
                      何枚でも応募できます
                    </span>
                    。ただし、お一人様で同じキャラに2枚以上の応募はできません。
                  </li>
                  <li className="pb-2">
                    1キャラの募集枠に制限はありません。ご応募いただいたイラストは全て掲載いたします。
                  </li>
                  <li className="pb-2">
                    ご応募頂きましたイラストにつきまして、ご自身のSNSへの投稿や同人誌への掲載などをご自由にして頂いて構いません。可能であれば総選挙終了後の公開でお願いします。
                  </li>
                  <li className="pb-2">
                    複数作品に登場するキャラを両方描く、同じキャラを衣装違いで並べる、などは是非どうぞ。
                  </li>
                  <li className="pb-2">
                    <p className="pb-2">
                      「これで大丈夫？」と迷ってしまった場合は
                      <a
                        href="https://twitter.com/gensosenkyo"
                        target="_blank"
                        rel="noreferrer"
                        className="link link-hover underline-offset-4"
                      >
                        <span className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                          主催
                        </span>
                      </a>
                      宛DM にてご質問ください。
                    </p>
                  </li>
                  <li className="pb-2">
                    「幻水総選挙本」への掲載をご希望の方は
                    <Link href="/events-in-event/sosenkyo-book">
                      <a className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                        {locale === 'ja' ? '幻水総選挙本' : 'Sosenkyo book'}
                      </a>
                    </Link>
                    のページをご覧ください。
                  </li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">
                募集詳細 - イラスト内容
              </h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    応募したいキャラ単体のイラストを推奨します。
                  </li>
                  <li className="pb-2">
                    カラー or モノクロ、デジタル or アナログは自由です。
                  </li>
                  <li className="pb-2">
                    イラストに
                    <span className="text-red-500 pl-1 pr-1">
                      お名前（サイン）とTwitter ID
                    </span>
                    を記載してください。作者様の確認及び、無断利用防止のためです。
                  </li>
                  <li className="pb-2">
                    お名前のみ、IDのみの記載でも構いませんが、なるべく両方の記載を推奨します。
                  </li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">募集詳細 - サイズ</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    規定なし（投稿時にTwitter側で自動調整されます）
                  </li>
                </ul>
                <div className="py-2">
                  ※印刷に耐えるほどの高解像度な画像は、悪用されるケースがあります。適切なサイズに調整していただくことをおすすめいたします。
                </div>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">募集詳細 - ファイル名</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    <span className="font-bold">
                      キャラ名_作者様のお名前.拡張子
                    </span>
                  </li>
                </ul>
                <p className="py-2">※日本語のファイル名で構いません。</p>
                <p className="pb-2">
                  ※スマートフォンから送る場合等、ファイル名変更が難しい方はそのままで大丈夫です。
                </p>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">募集詳細 - 送信方法</h2>
              <div className="text-base text-left pb-4">
                <p className="pb-4">
                  次のいずれかの方法で送信してください。詳細は後述します。
                </p>
                <ul className="list-none pl-6 pr-2">
                  <li className="pb-2">① フォームで送信</li>
                  <li className="pb-2">② 主催宛DMで送信</li>
                  <li className="pb-2">③ ファイル転送サービスを利用して送信</li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">
                募集詳細 - 送信方法詳細
              </h2>
              <div className="text-base text-left pb-4">
                <></>
                <></>
                <></>
                <div className="pb-10">
                  <h3 className="text-lg text-center pb-4">
                    <span className="underline underline-offset-4">
                      ① フォームで送信
                    </span>
                  </h3>
                  <ul className="list-disc pl-6 pr-2">
                    <li className="pb-2">
                      <Link
                        href="https://www.dropbox.com/request/FQ1a3d6T8pSdISItXfeo"
                        passHref
                      >
                        <a
                          className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pr-1"
                          target="_blank"
                        >
                          幻水総選挙2022 開票イラスト送信フォーム
                        </a>
                      </Link>
                      を利用して送信してください。
                    </li>
                    <li className="pb-2">アカウント登録は不要です。</li>
                    <li className="pb-2">
                      フォームの仕様上、メールアドレス入力が必須となっておりますが、主催側にアドレスは伝わりません。
                    </li>
                    <li className="pb-2">
                      入力したアドレスには送信完了のお知らせメールが届きます。
                    </li>
                    <li className="pb-2">
                      ご自身のアドレスを入力したくない方は、幻水総選挙のアドレス
                      (
                      <span className="font-bold">
                        gensosenkyo2015@gmail.com
                      </span>
                      ) をご入力ください
                    </li>
                    <li className="pb-2">
                      大変お手数ですが、
                      <span className="text-red-500">
                        フォーム送信後に
                        <a
                          href="https://twitter.com/gensosenkyo"
                          target="_blank"
                          rel="noreferrer"
                          className="link link-hover underline-offset-4"
                        >
                          <span className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                            主催
                          </span>
                        </a>
                        宛DM でキャラ名のご連絡をお願いします。
                      </span>
                    </li>
                  </ul>
                </div>
                <></>
                <></>
                <></>
                <div className="pb-10">
                  <h3 className="text-lg text-center pb-4">
                    <span className="underline underline-offset-4">
                      ② 主催宛DMで送信
                    </span>
                  </h3>
                  <ul className="list-disc pl-6 pr-2">
                    <li className="pb-2">
                      <a
                        href="https://twitter.com/gensosenkyo"
                        target="_blank"
                        rel="noreferrer"
                        className="link link-hover underline-offset-4"
                      >
                        <span className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                          主催
                        </span>
                      </a>
                      宛DM でファイルの送信をお願いします。
                    </li>
                    <li className="pb-2">
                      Twitterの仕様につき、画像が劣化する場合がありますのでご注意ください。
                    </li>
                  </ul>
                </div>

                <></>
                <></>
                <></>
                <div className="pb-10">
                  <h3 className="text-lg text-center pb-4">
                    <span className="underline underline-offset-4">
                      ③ ファイル転送サービスで送信
                    </span>
                  </h3>
                  <p className="pb-4">
                    ギガファイル便やデータ便などのサービスを用いてデータをアップロードして
                    ください。
                  </p>
                  <p>
                    アップロード後に、
                    <span className="text-red-500">
                      ダウンロード用のURLを
                      <a
                        href="https://twitter.com/gensosenkyo"
                        target="_blank"
                        rel="noreferrer"
                        className="link link-hover underline-offset-4"
                      >
                        <span className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                          主催
                        </span>
                      </a>
                      宛DMに送信してください。
                    </span>
                  </p>
                </div>
                <></>
                <></>
                <></>
                <div className="divider" />
                <></>
                <></>
                <></>
                <h2 className="text-xl text-center font-bold pb-4">Q & A</h2>
                <div className="text-base text-left pb-0">
                  <ul className="list-none pl-6 pr-2">
                    <div className="py-2">
                      <li className="pb-2">
                        <p className="pb-2">
                          Q. 他のキャラを一緒に描いてもいいですか？
                        </p>
                        <p className="pb-2">
                          A.
                          応募キャラ単体のイラスト推奨ですが、他のキャラを入れても構いません。
                          他のキャラを一緒に描く場合は
                          <span className="text-red-500">
                            応募キャラがメイン
                          </span>
                          となるようにお願いいたします。
                        </p>
                        <p>
                          また恋愛描写を含む場合は、原作程度の表現でお願いします。
                        </p>
                      </li>
                    </div>
                    <div className="py-2">
                      <li className="pb-2">
                        <p className="pb-2">
                          Q. 他のキャラを一緒に描く場合の具体例はありますか？
                        </p>
                        <div className="pb-2">
                          A.
                          以下のような過去の例がありますが、これ以外の描き方でも構いません。
                          <ul className="list-disc pl-10 pr-2 pt-2">
                            <li className="pb-2">他のキャラを小さく描く</li>
                            <li className="pb-2">他のキャラを背景に描く</li>
                            <li className="pb-2">他のキャラを後ろ姿で描く</li>
                            <li className="pb-2">
                              他のキャラの一部分（手など）を入れる
                            </li>
                          </ul>
                        </div>
                      </li>
                    </div>
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

export default IllustrationsWithResults
