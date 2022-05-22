import type { NextPage } from 'next'
import Link from 'next/link'
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'

import HumbergerNavigation from '../../components/HumbergerMenu/HumbergerNavigation'
import NavBar from '../../components/NavBar'
import SiteFooter from '../../components/SiteFooter'

import { useLocale } from '../../hooks/useLocale'

const IllustrationsBook: NextPage = () => {
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
            <li>{t.PAGE_TITLE_ILLUSTRATIONS_BOOK}</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-4 underline font-zen-old-mincho">
                {t.PAGE_TITLE_ILLUSTRATIONS_BOOK}
              </h1>

              <h2 className="text-xl font-bold pb-4">
                {locale === 'ja'
                  ? '開票イラストとは？'
                  : 'What is voting illustrations?'}
              </h2>
              <div className="text-base text-left pb-4">
                開票当日、キャラの順位発表ツイートに掲載するイラストを募集します。お好きなキャラを描いてお送り下さい。
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

              <h2 className="text-xl font-bold pb-4">【イラスト内容】</h2>
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

              <h2 className="text-xl font-bold pb-4">【サイズ】</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    規定なし（投稿時にTwitter側で自動調整されます）
                    <br />
                    ※印刷に耐えるほどの高解像度な画像は、悪用されるケースがあります。適切なサイズに調整していただくことをおすすめいたします。
                  </li>
                </ul>
              </div>

              <h2 className="text-xl font-bold pb-4">【ファイル名】</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    キャラ名_作者様のお名前.(拡張子)
                    <br />
                    ※日本語のファイル名で構いません
                  </li>
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

              <h2 className="text-xl font-bold pb-4">〆切</h2>
              <div className="text-base text-left pb-4">
                <p>一次〆切：6月19日（日）23:59</p>
                <p>最終〆切：6月26日（日）23:59</p>
              </div>

              <h2 className="text-xl font-bold pb-4">【送付方法詳細】</h2>

              <div>
                <h3>①フォームで送信 【開票イラスト送信フォーム】（Dropbox）</h3>
                https://www.dropbox.com/request/FQ1a3d6T8pSdISItXfeo
                ・アカウント登録は不要です。
                ・フォームの仕様上、メールアドレス入力が必須です。主催側にアドレスは伝わりませんのでご安心ください。
                ・入力したアドレスに送信完了のお知らせが届きます。
                ・ご自身のアドレスを入力したくない方は、幻水総選挙のアドレスを入力して下さい。
                幻水総選挙メールアドレス: gensosenkyo2015@gmail.com
                ・ご自分のDropboxにログインした状態ですと、「名前」「メールアドレス」の入力欄は表示されません。
                （そのまま送信して頂いて大丈夫です）
                ・送信後は大変お手数ですが、主催宛DMでキャラ名のご連絡をお願いします。
                <h3>②主催宛DMで送信</h3>
                Twitterの仕様につき、画像が劣化する場合がありますのでご注意ください。
                <h3>③ファイル転送サービスを利用</h3>
                ギガファイル便、データ便などを使ってデータをアップロードし、URLを主催宛DMに送信してください。
                <h2 className="text-xl font-bold pb-4">Q&A</h2>
                Q&A Q：他のキャラを一緒に描いてもいいですか？
                A：応募キャラ単体のイラスト推奨ですが、他のキャラを入れても構いません。
                他のキャラを一緒に描く場合は応募キャラがメインとなるようにお願いいたします。
                ＜過去の例＞ ・他のキャラを小さく描く ・他のキャラを背景に描く
                ・他のキャラを後ろ姿で描く
                ・他のキャラの一部分（手など）を入れる　など
                ※複数作品に登場するキャラを両方描く、同じキャラを衣装違いで並べる、などは是非どうぞ。
                ※「これは大丈夫？」と迷ったらご質問下さい。
                ※イラスト本への掲載を掲載を希望する方は、下記もお読みください。　　　　
                開票イラスト本について 開票イラスト本とは？
                総選挙にお送りいただいた開票イラストのうち、掲載許可をくださった方の作品をまとめて本にいたします。
                ※本への掲載を強要するものではありません。
                ※規定に沿っていればどの開票イラストでも掲載可能です。 本について
                1ページあたりイラスト2～4枚程度の掲載を想定しています。
                ・仕様：B5/フルカラー本 ・頒布価格：未定
                ・発行日：2022年9月予定（幻想水滸伝オンリー同人誌即売会「三都物語95」）
                イベントでの頒布及び通販 参加要項
                イラスト本に掲載ご希望の方は、Web用データと印刷用データを作成してください。
                規定に沿っていれば、2つとも同じデータで構いません。
                Web用データ＝Twitterで掲載させていただくイラストです。詳細はこちら
                →参加要項 印刷用データの規定は下記の通りです。 【サイズ】 ①縦長
                幅1100×高さ1500pixel 以上、 幅2508×高さ3541pixel 以下 ②横長
                幅1500×高さ1100pixel 以上、 幅3541×高さ2508pixel 以下 ③正方形
                各辺1300pixel以上
                ※350dpiのB7かハガキサイズ以上～B5程度でお描きいただくと規定内に収まります。
                ※アナログイラストをカメラで撮影する方は、規定サイズを超えても構いませんので、出来る限り高画質の画像をお送りください。
                可能であれば、スキャナーで取り込んだデータをお送りください。
                （カラー、解像度300～350dpi） 【解像度】 350dpi（推奨）
                ※幅と高さが規定通りであれば、異なる解像度でもお受けいたします。
                【カラーモード】 CMYK
                ※作者様でRGBからCMYKの変換が難しい場合は、主催側で変換いたします。
                【保存形式】 psd ・レイヤーは全て統合してください。
                ・写真データの場合はjpgでも構いません。 【ファイル名】
                i_キャラ名_作者様のお名前.(拡張子) ※先頭に「i_」を付けてください
                ※日本語のファイル名で構いません 送付方法
                Web用データと印刷用データをそれぞれお送り下さい。 ①Web用データ
                送付方法はこちら　→イラスト送付方法（Web用） ②印刷用データ
                「印刷用データ送信フォーム」よりお送りいただくか、ギガファイル便などのファイル転送サービスをお使いください。
                ※DMで画像ファイルを直接お受けすることはできません（劣化の原因となるため）。
                【印刷用データ送信フォーム】 準備中 参加の流れ
                ①「開票イラスト本　参加表明フォーム」に入力、送信
                フォーム送信〆切：2022年7月31日（日）
                ②WEB用データと印刷用データを送信 WEB用データ〆切：こちらを参照
                印刷用データ〆切：2022年7月31日（日）
                ※印刷用データは後日送信でも大丈夫です。
                ※編集作業時の間違いを防ぐため、WEB用データをそのまま印刷に使用する方も、再度データをお送り下さい。
                ③主催宛DMでご連絡
                ④主催よりWEB用データ、印刷用データ受領のご連絡（DM）
                （一週間程度を目安）
                ※以降、イラスト本参加者様共通のご連絡がある場合は、メールにて一斉送信いたします。
                注意
                ・掲載にあたり、イラスト原寸より縮小させていただく場合がございます（拡大はしません）。イラスト本ご参加の方はこれにご同意いただけたものとみなします。
                Q&A Q：サイズを規定より小さく描いてしまったのですが…。
                A：多少の違いは大丈夫ですが、大きく違う場合は印刷の見た目に影響が出る可能性があります。事前にご相談ください。
                Q：使用するソフトでCMYKカラーやpsd保存ができません。
                A：データによってはjpgやpngでもお受けしますのでご相談ください。
                カラーモードは主催側での変更も承ります。
                CMYKへの変換を行なうと、色の見た目が変わることがありますのでご注意ください。
                （一般的には、鮮やかな色がくすんだ色に変わります。）
                Q：先にイラストを送信してから参加表明をしてもいいですか？
                A：期限内であれば大丈夫です。
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

export default IllustrationsBook
