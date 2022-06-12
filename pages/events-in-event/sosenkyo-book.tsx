import type { NextPage } from 'next'
import Link from 'next/link'
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import NavBar from '@/components/NavBar'
import SiteFooter from '@/components/SiteFooter'

import Contacts from '@/components/events-in-event/sosenkyo-book/Contacts'

import { useLocale } from '@/hooks/useLocale'

const SosenkyoBook: NextPage = () => {
  const { t, locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`${t.PAGE_TITLE_SOSENKYO_BOOK} - ${t.WEBSITE_TITLE}`}</title>
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
            <li>{t.PAGE_TITLE_SOSENKYO_BOOK}</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
                {t.PAGE_TITLE_SOSENKYO_BOOK}
              </h1>
              <h2 className="text-xl font-bold pb-4">
                {locale === 'ja'
                  ? '幻水総選挙本とは？'
                  : 'What is Sosenkyo book?'}
              </h2>
              <div className="text-base text-left pb-4">
                <div className="pb-4">
                  幻水総選挙10年目の記念として制作する、開票イラストなどをまとめた本のことです。
                </div>
              </div>
              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">
                開票イラストの掲載について
              </h2>
              <div className="text-base text-left pb-4">
                <div className="pb-4">
                  お送りいただいた開票イラストのうち、
                  <span className="text-red-500">
                    掲載許可をくださった方の作品
                  </span>
                  を収録させていただきます。
                </div>
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    お送りいただいた全ての方にお声がけいたしますが、本への掲載を強要するものではありません。
                  </li>
                  <li className="pb-2">
                    規定に沿っていればどの開票イラストでも掲載可能です。
                  </li>
                  <li className="pb-2">
                    1ページあたり 2～4枚 程度の掲載を想定しています。
                  </li>
                  <li className="pb-2">
                    参加者様には、完成した本を一冊進呈いたします。
                  </li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">本について</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">仕様：B5 / フルカラー本</li>
                  <li className="pb-2">頒布価格：未定</li>
                  <li className="pb-2">
                    発行日：2022年9月予定（幻想水滸伝オンリー同人誌即売会「三都物語95」）
                  </li>
                  <li className="pb-2">イベントでの頒布及び通販</li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">募集概要</h2>
              <div className="text-base text-left pb-4">
                <div className="pb-4">
                  幻水総選挙本への掲載をご希望の方は、
                  <Link
                    href="/events-in-event/illustrations-with-results"
                    passHref
                  >
                    <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900 pr-1">
                      通常の開票イラストの応募
                    </span>
                  </Link>
                  に加え、
                  <span className="text-red-500">以下の2点の送信</span>{' '}
                  をお願い致します。詳細は後述します。
                </div>
                <ul className="list-none pl-0 pr-2">
                  <li className="pb-2">① 印刷用データファイルを作成して送信</li>
                  <li className="pb-2">② 参加表明フォームを送信</li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">
                募集詳細 - 印刷用データのサイズ
              </h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    <div className="pb-2">
                      印刷用データのサイズの規定は下記の通りです。
                    </div>
                    <ul className="list-disc pl-6 pr-2">
                      <li className="pb-2">
                        <div className="pb-2">縦長の場合</div>
                        <ul className="list-none pl-0 pr-2">
                          <li className="pb-2">
                            <div>幅 1100px × 高さ 1500px 以上</div>
                            <div>幅 2508px × 高さ 3541px 以下</div>
                          </li>
                        </ul>
                      </li>
                      <li className="pb-2">
                        <div className="pb-2">横長の場合</div>
                        <ul className="list-none pl-0 pr-2">
                          <li className="pb-2">
                            <div>幅 1500px × 高さ 1100px 以上</div>
                            <div>幅 3541px × 高さ 2508px 以下</div>
                          </li>
                        </ul>
                      </li>
                      <li className="pb-2">
                        <div className="pb-2">正方形の場合</div>
                        <ul className="list-none pl-0 pr-2">
                          <li className="pb-2">
                            <div>幅 1300px × 高さ 1300px 以上</div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="pb-2">
                    サイズに迷う方は「B7（350dpi）」か「ハガキ・ポストカード（350dpi）」サイズで描かれることをおすすめします。
                  </li>
                  <li className="pb-2">
                    アナログイラストは可能であれば、スキャナーで取り込んだデータをお送りください（カラー、解像度300～350dpi）。
                  </li>
                  <li className="pb-2">
                    アナログイラストをカメラで撮影する方は、規定サイズを超えても構いませんので、
                    <span className="text-red-500">出来る限り高画質の画像</span>
                    をお送りください。
                  </li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">
                募集詳細 - 印刷用データの解像度
              </h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">350dpi（推奨）</li>
                  <ul className="list-disc pl-6 pr-2 pt-2">
                    <li className="pb-2">
                      幅と高さが規定通りであれば、異なる解像度でもお受けいたします。
                    </li>
                  </ul>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">
                募集詳細 - カラーモード
              </h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">CMYK</li>
                  <ul className="list-disc pl-6 pr-2 pt-2">
                    <li className="pb-2">
                      作者様でRGBからCMYKの変換が難しい場合は、主催側で変換いたします。
                    </li>
                  </ul>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">募集詳細 - 保存形式</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">psd</li>
                  <ul className="list-disc pl-6 pr-2 pt-2">
                    <li className="pb-2">レイヤーは全て統合してください。</li>
                    <li className="pb-2">
                      写真データの場合は jpg でも構いません。
                    </li>
                  </ul>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">募集詳細 - ファイル名</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    <span className="font-bold">
                      i_キャラ名_作者様のお名前.拡張子
                    </span>
                    <ul className="list-disc pl-6 pr-2 pt-2">
                      <li className="pb-2">
                        先頭に「<span className="font-bold">i_</span>
                        」を付けてください
                      </li>
                      <li className="pb-2">日本語のファイル名で構いません</li>
                      <li className="pb-2">
                        スマートフォンから送る場合等、ファイル名変更が難しい方はそのままで大丈夫です
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">〆切</h2>
              <div className="text-base text-center pb-4">
                <div className="pb-2">
                  <div>印刷用データ〆切</div>
                  <div className="text-red-500 pl-1 pr-1">
                    2022年7月31日（日）
                  </div>
                </div>
                <div className="pb-2">
                  <div>参加表明フォーム送信〆切</div>
                  <div className="text-red-500 pl-1 pr-1">
                    2022年7月31日（日）
                  </div>
                </div>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">送信方法詳細</h2>
              <div className="pb-4 text-base">
                以下の ① と ② の作業をお願いします。
              </div>
              <div className="pb-4">
                <h3 className="text-lg text-center">
                  <div className="underline underline-offset-4 pb-4">
                    ① 印刷用データファイルを作成して送信
                  </div>
                  <div className="text-base text-left pb-4">
                    <ul className="list-disc pl-6 pr-2">
                      <li className="pb-2">
                        「
                        <a
                          href="https://www.dropbox.com/request/OlqEwtVSahDfH0FhIQSg"
                          target="_blank"
                          rel="noreferrer"
                          className="link link-hover underline-offset-4"
                        >
                          <span className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                            印刷用データ送信フォーム
                          </span>
                        </a>
                        」よりお送りいただくか、ギガファイル便などのファイル転送サービスをお使いください。
                      </li>
                      <li className="pb-2">
                        DMで画像ファイルを直接お受けすることはできません（劣化の原因となるため）。
                      </li>
                    </ul>
                  </div>
                </h3>
              </div>
              <div className="pb-4">
                <h3 className="text-lg text-center pb-4">
                  <span className="underline underline-offset-4">
                    ② 参加表明フォームを送信
                  </span>
                </h3>
                <div className="text-left">
                  <ul className="list-disc pl-6 pr-2">
                    <li className="pb-2">
                      <a
                        href="https://ssl.form-mailer.jp/fms/7d721d31746603"
                        target="_blank"
                        rel="noreferrer"
                        className="link link-hover underline-offset-4"
                      >
                        <span className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                          こちらのフォーム
                        </span>
                      </a>
                      より参加表明をお願いします。
                    </li>
                    <li className="pb-2">
                      イラストを複数回に分けて送る場合、参加表明は1回のみで大丈夫です。
                    </li>
                  </ul>
                </div>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">参加の流れ</h2>
              <div className="pb-4">
                <div className="text-base text-left pb-4">
                  <ul className="list-none pl-0 pr-2">
                    <li className="pb-2">① WEB用データ、印刷用データを送信</li>
                    <li className="pb-2">② 「参加表明フォーム」に入力、送信</li>
                    <li className="pb-2">③ 主催宛DMで送信のご報告</li>
                    <li className="pb-2">④ 主催よりデータ受領のご連絡</li>
                  </ul>
                </div>
                <div className="text-base text-left">
                  <ul className="list-none pl-0 pr-2">
                    <li className="pb-2">
                      ※印刷用に加筆修正をされたい場合、最初にWEB用データのみご提出いただき、印刷用データを後日お送りいただいても大丈夫です。
                    </li>
                    <li className="pb-2">
                      ※一週間経っても受領連絡がない場合は、DMが届いていない可能性がございます。お手数ですが再度DMをお送り下さい。
                    </li>
                  </ul>
                </div>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">注意</h2>
              <div className="pb-4 text-left">
                <ul className="list-disc pl-6 pr-2 pt-2">
                  <li className="pb-2">
                    掲載にあたり、イラスト原寸より縮小させていただく場合がございます（拡大はしません）。総選挙本ご参加の方はこれにご同意いただけたものとみなします。
                  </li>
                  <li className="pb-2">
                    万が一、盗作などによって損害が発生した場合の賠償責任は、主催ではなく作者が負うものといたします。
                  </li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">過去の作品掲載について</h2>
              <div className="pb-4 text-left">
                <ul className="list-disc pl-6 pr-2 pt-2">
                  <li className="pb-2">
                    過去の幻水総選挙でご応募された開票イラストも掲載可能です。
                  </li>
                  <li className="pb-2">
                    ファイル名の末尾に開催年（「_2021」など）を付けてお送り下さい。WEB用データは不要です。
                  </li>
                  <li className="pb-2">
                    加筆・修正をしていただいても構いません。
                  </li>
                  <li className="pb-2">過去作品のみの掲載も歓迎いたします。</li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">Q & A</h2>
              <div className="text-base text-left">
                <ul className="list-none pl-0 pr-2">
                  <div className="py-2">
                    <li className="pb-2">
                      <div className="pb-2">
                        Q. サイズを規定より小さく描いてしまったのですが…。
                      </div>
                      <div className="pb-2">
                        A.
                        規定のサイズは目安のため、多少の違いは大丈夫です。大きく違う場合は印刷の見た目に影響が出る可能性がありますので、事前にご相談ください。
                      </div>
                    </li>
                  </div>
                  <div className="py-2">
                    <li className="pb-2">
                      <div className="pb-2">
                        Q. 使用するソフトで CMYKカラー や psd保存 ができません。
                      </div>
                      <div className="pb-2">
                        <div className="pb-1">
                          A. データによっては jpg や png
                          でもお受けしますのでご相談ください。カラーモードについては主催側での変換も承ります。
                        </div>
                        <div className="pb-1">
                          ただし、CMYKへの変換を行なうと、色の見た目が変わることがありますのでご注意ください（一般的には、鮮やかな色がくすんだ色に変わります）。
                        </div>
                      </div>
                    </li>
                  </div>
                  <li className="pb-2">
                    <div className="pb-2">
                      Q.
                      Web用データと印刷用データは同時に出さないといけませんか？
                    </div>
                    <div className="pb-2">
                      A. 期限内に両方を提出頂ければ、同時でなくても大丈夫です。
                    </div>
                  </li>
                  <li className="pb-2">
                    <div className="pb-2">
                      Q.
                      提出した印刷用データを同人誌に再録したり、Webで公開してもいいですか？
                    </div>
                    <div className="pb-2">
                      A.
                      通常の開票イラストと同様に、ご自身の作品は、SNSへの投稿や同人誌への掲載などをご自由にして頂いて構いません。
                    </div>
                  </li>
                </ul>
              </div>

              <div className="divider" />
              <Contacts />
            </div>
          </div>
        </div>

        <div className="divider" />
        <SiteFooter />
      </main>
    </div>
  )
}

export default SosenkyoBook
