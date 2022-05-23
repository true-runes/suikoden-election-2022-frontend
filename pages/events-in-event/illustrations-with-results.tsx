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
      <title>{`${t.PAGE_TITLE_NOVELS_ON_THEME} - ${t.WEBSITE_TITLE}`}</title>
      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <main id="page-wrap">
        <NavBar />

        <div className="text-base bg-gray-700 text-white breadcrumbs pl-6 pb-2">
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
              <h1 className="text-2xl font-bold pb-4 underline font-zen-old-mincho">
                {t.PAGE_TITLE_ILLUSTRATIONS_WITH_RESULTS}
              </h1>

              <h2 className="text-xl font-bold pb-4">
                {locale === 'ja'
                  ? '開票イラストとは？'
                  : 'What is voting illustrations?'}
              </h2>

              <div className="text-base text-left pb-4">
                開票当日、キャラの順位発表ツイートに掲載するイラストを募集します。お好きなキャラを描いてお送り下さい。
              </div>

              <h2 className="text-xl font-bold pb-4">〆切</h2>
              <div className="text-base text-left pb-4">
                <p>一次〆切：6月19日（日）23:59</p>
                <p>最終〆切：6月26日（日）23:59</p>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">昨年の開票イラストの例</h2>
              <TwitterTweetEmbed
                tweetId="1406295785411551235"
                options={{ id: 'gensosenkyo', lang: 'ja' }}
              />

              <h2 className="text-xl font-bold pb-4">参加要項</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    お一人様で何枚でも応募できます。
                    <br />
                    （ただし、同じキャラに2枚以上の応募はできません）
                  </li>
                  <li className="pb-2">
                    1キャラの募集枚数に上限はありません。ご応募頂いたイラストは全て掲載します。
                  </li>
                  <li className="pb-2">
                    ご寄稿いただきましたイラストは、ご自身のSNSや同人誌への掲載などご自由にして頂いて構いません。
                    <br />
                    ※可能であれば総選挙終了後の公開でお願いします。
                  </li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">イラスト内容</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    応募したいキャラ単体のイラストを推奨します。
                  </li>
                  <li className="pb-2">
                    カラー/モノクロ、デジタル/アナログは自由です。
                  </li>
                  <li className="pb-2">
                    イラストにお名前（サイン）とTwitter IDを記載して下さい。
                    <br />
                    （作者様の確認及び、無断利用防止のため）
                  </li>
                  <li className="pb-2">
                    お名前のみ、IDのみの記載でも構いませんが、なるべく両方の記載を推奨します。
                  </li>
                </ul>
              </div>

              <h2 className="text-xl font-bold pb-4">サイズ</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    規定なし（投稿時にTwitter側で自動調整されます）
                    <br />
                    ※印刷に耐えるほどの高解像度な画像は、悪用されるケースがあります。適切なサイズに調整していただくことをおすすめいたします。
                  </li>
                </ul>
              </div>

              <h2 className="text-xl font-bold pb-4">ファイル名</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    キャラ名_作者様のお名前.(拡張子)
                    <br />
                    ※日本語のファイル名で構いません
                  </li>
                  <li className="pb-2">例: ムクムク_作者太郎.psd</li>
                </ul>
              </div>

              <h2 className="text-xl font-bold pb-4">【送付方法】</h2>
              <div className="text-base text-left pb-4">
                <p className="pb-4">
                  次のいずれかで送信してください（詳しくは後述）。
                </p>
                <ul className="list-decimal pl-6 pr-2">
                  <li className="pb-2">フォームで送信</li>
                  <li className="pb-2">主催宛DMで送信</li>
                  <li className="pb-2">ファイル転送サービスを利用</li>
                </ul>
              </div>

              <h2 className="text-xl font-bold pb-4">【送付方法詳細】</h2>

              <div>
                <h3>①フォームで送信 【開票イラスト送信フォーム】（Dropbox）</h3>
                https://www.dropbox.com/request/FQ1a3d6T8pSdISItXfeo
                <ul className="list-decimal pl-6 pr-2">
                  <li className="pb-2">アカウント登録は不要です。</li>
                  <li className="pb-2">
                    フォームの仕様上、メールアドレス入力が必須です。主催側にアドレスは伝わりませんのでご安心ください。
                  </li>
                  <li className="pb-2">
                    入力したアドレスに送信完了のお知らせが届きます。
                  </li>
                  <li className="pb-2">
                    ご自身のアドレスを入力したくない方は、幻水総選挙のアドレスを入力して下さい。
                    <br />
                    幻水総選挙メールアドレス: gensosenkyo2015@gmail.com
                  </li>
                  <li className="pb-2">
                    送信後は大変お手数ですが、主催宛DMでキャラ名のご連絡をお願いします。
                  </li>
                </ul>
                <h3>②主催宛DMで送信</h3>
                <ul className="list-decimal pl-6 pr-2">
                  <li className="pb-2">
                    Twitterの仕様につき、画像が劣化する場合がありますのでご注意ください。
                  </li>
                </ul>
                <h3>③ファイル転送サービスを利用</h3>
                <ul className="list-decimal pl-6 pr-2">
                  <li className="pb-2">
                    ギガファイル便、データ便などを使ってデータをアップロードし、URLを主催宛DMに送信してください。
                  </li>
                </ul>
                <h2 className="text-xl font-bold pb-4">Q&A</h2>
                Q&A Q：他のキャラを一緒に描いてもいいですか？
                A：応募キャラ単体のイラスト推奨ですが、他のキャラを入れても構いません。
                他のキャラを一緒に描く場合は応募キャラがメインとなるようにお願いいたします。
                ＜過去の例＞ ・他のキャラを小さく描く ・他のキャラを背景に描く
                ・他のキャラを後ろ姿で描く
                ・他のキャラの一部分（手など）を入れる　など
                ※複数作品に登場するキャラを両方描く、同じキャラを衣装違いで並べる、などは是非どうぞ。
                ※「これは大丈夫？」と迷ったらご質問下さい。
                <div>
                  <Link href="/events-in-event/illustrations-book">
                    {locale === 'ja'
                      ? '開票イラスト本'
                      : 'Voting illustrations Book'}
                  </Link>
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
