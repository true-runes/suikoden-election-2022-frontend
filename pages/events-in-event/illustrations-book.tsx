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
              <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
                {t.PAGE_TITLE_ILLUSTRATIONS_BOOK}
              </h1>
              <></>
              <></>
              <></>
              <h2 className="text-xl font-bold pb-4">
                {locale === 'ja'
                  ? '開票イラスト本とは？'
                  : 'What is voting illustrations book?'}
              </h2>
              <></>
              <></>
              <></>
              <div className="text-base text-left pb-4">
                <p className="pb-4">
                  総選挙にお送りいただいた開票イラストのうち、
                  <span className="text-red-500">
                    掲載許可を下さった方の作品
                  </span>
                  をまとめた本のことです。
                </p>
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">掲載を強制するものではございません。</li>
                  <li className="pb-0">
                    規定に沿っていれば、いずれの開票イラストでも掲載可能です。
                  </li>
                </ul>
              </div>

              <div className="divider" />
              <h2 className="text-xl font-bold pb-4">〆切</h2>
              <div className="text-base text-center pb-4">
                <div className="pb-2">
                  <p>参加表明フォーム送信〆切</p>
                  <p className="text-red-500 pl-1 pr-1">2022年7月31日（日）</p>
                </div>
                <div className="pb-2">
                  <p>印刷用データ〆切</p>
                  <p className="text-red-500 pl-1 pr-1">2022年7月31日（日）</p>
                </div>
              </div>
              <></>
              <></>
              <></>
              <div className="divider" />
              <></>
              <></>
              <></>
              <h2 className="text-xl font-bold pb-4">本について</h2>
              <div className="text-base text-left pb-4">
                <p className="pb-4">以下のような内容を想定しております。</p>
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    1ページあたり、イラスト 2～4枚 程度の掲載
                  </li>
                  <li className="pb-2">B5・フルカラー</li>
                  <li className="pb-2">頒布価格 未定</li>
                  <li className="pb-2">2022年9月発行予定</li>
                  <li className="pb-2">
                    幻想水滸伝オンリー同人誌即売会「三都物語95」での頒布、および、通販
                  </li>
                </ul>
              </div>
              <></>
              <></>
              <></>
              <div className="divider" />
              <></>
              <></>
              <></>
              <h2 className="text-xl font-bold pb-4">募集概要</h2>
              <div className="text-base text-left pb-4">
                開票イラスト本への掲載をご希望の方は、通常の開票イラストの応募に加え、以下の2点の送信をお願い致します。詳細は後述します。
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    印刷用データファイルを作成して送信（準備中）
                  </li>
                  <li className="pb-2">参加表明フォームを送信（準備中）</li>
                </ul>
              </div>
              <></>
              <></>
              <></>
              <div className="divider" />
              <></>
              <></>
              <></>
              <h2 className="text-xl font-bold pb-4">
                募集詳細 - 印刷用データのサイズ
              </h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    <p className="pb-2">
                      印刷用データのサイズの規定は下記の通りです。
                    </p>
                    <ul className="list-disc pl-6 pr-2">
                      <li className="pb-2">
                        <p className="pb-2">縦長の場合</p>
                        <ul className="list-none pl-6 pr-2">
                          <li className="pb-2">
                            <p>幅 1100px × 高さ 1500px 以上</p>
                            <p>幅 2508px × 高さ 3541px 以下</p>
                          </li>
                        </ul>
                      </li>
                      <li className="pb-2">
                        <p className="pb-2">横長の場合</p>
                        <ul className="list-none pl-6 pr-2">
                          <li className="pb-2">
                            <p>幅 1500px × 高さ 1100px 以上</p>
                            <p>幅 3541px × 高さ 2508px 以下</p>
                          </li>
                        </ul>
                      </li>
                      <li className="pb-2">
                        <p className="pb-2">正方形の場合</p>
                        <ul className="list-none pl-6 pr-2">
                          <li className="pb-2">
                            <p>幅 1300px × 高さ 1300px 以上</p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="pb-2">
                    「350dpi の B7」か「ハガキサイズ以上 ～
                    B5」程度でお描きいただくと規定内に収まります。
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
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="divider" />
              <h2 className="text-xl font-bold pb-4">
                募集詳細 - 送信方法詳細
              </h2>
              <div className="pb-10">
                <h3 className="text-lg text-center pb-4">
                  <span className="underline underline-offset-4">
                    ① 印刷用データファイルを作成して送信する
                  </span>
                </h3>
                <div>準備中です。</div>
              </div>
              <div className="pb-10">
                <h3 className="text-lg text-center pb-4">
                  <span className="underline underline-offset-4">
                    ② 参加表明フォームを送信
                  </span>
                </h3>
                <div>準備中です。</div>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">Q & A</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-none pl-6 pr-2">
                  <div className="py-2">
                    <li className="pb-2">
                      <p className="pb-2">
                        Q. サイズを規定より小さく描いてしまったのですが…。
                      </p>
                      <p className="pb-2">
                        A.
                        多少の違いは大丈夫ですが、大きく違う場合は印刷の見た目に影響が出る可能性があります。事前にご相談ください。
                      </p>
                    </li>
                  </div>
                  <div className="py-2">
                    <li className="pb-2">
                      <p className="pb-2">
                        Q. 使用するソフトで CMYKカラー や psd保存 ができません。
                      </p>
                      <p className="pb-2">
                        <p className="pb-1">
                          A. データによっては jpg や png
                          でもお受けしますのでご相談ください。カラーモードについては主催側での変換も承ります。
                        </p>
                        <p className="pb-1">
                          ただし、CMYKへの変換を行なうと、色の見た目が変わることがありますのでご注意ください（一般的には、鮮やかな色がくすんだ色に変わります）。
                        </p>
                      </p>
                    </li>
                  </div>
                  <li className="pb-2">
                    <p className="pb-2">
                      Q.
                      Web用データと印刷用データは同時に出さないといけませんか？
                    </p>
                    <p className="pb-2">
                      A. 期限内に両方を提出頂ければ、同時でなくても大丈夫です。
                    </p>
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

export default IllustrationsBook
