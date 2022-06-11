import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import HumbergerNavigation from '../../components/HumbergerMenu/HumbergerNavigation'
import NavBar from '../../components/NavBar'
import SiteFooter from '../../components/SiteFooter'

import { useLocale } from '../../hooks/useLocale'

const BonusVotes: NextPage = () => {
  const { t, locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`ボーナス票 - ${t.WEBSITE_TITLE}`}</title>
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
            <li>ボーナス票</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
                ボーナス票
              </h1>

              <h2 className="text-xl font-bold pb-4">
                {locale === 'ja' ? 'ボーナス票とは？' : 'What is bonus votes?'}
              </h2>
              <div className="text-base text-left pb-4">
                下記の条件をクリアしたキャラには「ボーナス票」が入ります。
                <br />
                通常投票とボーナス票の合計が、最終結果となります。
                <br />
                ボーナス票は
                <span className="text-red-500">1キャラにつき最大5票</span>
                入ります。
                <br />
                ※お一人様の持ち票（3票）は変わりません。
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">ボーナス票が入る部門</h2>
              <div className="text-base text-center pb-0">
                <div className="pb-0">
                  <div className="text-base text-center pb-4">
                    ボーナス票は
                    <span className="text-red-500">
                      「オールキャラ部門」の票数
                    </span>
                    に反映されます。
                  </div>
                </div>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">ボーナス票が入る条件</h2>
              <div className="text-base text-left pb-4">
                <div className="pb-4">
                  <h3 className="text-lg text-center">
                    <div className="pb-4">
                      <p className="pb-2">【条件①】</p>
                      <span className="text-red-500">開票イラスト</span>
                      応募があるキャラ
                    </div>
                  </h3>
                  <div className="text-base text-left pb-4">
                    <ul className="list-disc pl-6 pr-2">
                      <li className="pb-2">
                        ボーナス票「<span className="text-red-500">+1票</span>」
                      </li>
                      <li className="pb-2">
                        開票イラストの詳細は{' '}
                        <Link
                          href="/events-in-event/illustrations-with-results"
                          passHref
                        >
                          <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900 pr-1">
                            こちら
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg text-center">
                    <div className="pb-4">
                      <p className="pb-2">【条件②】</p>
                      <span className="text-red-500">お題小説</span>
                      応募があるキャラ
                    </div>
                  </h3>
                  <div className="text-base text-left pb-4">
                    <ul className="list-disc pl-6 pr-2">
                      <li className="pb-2">
                        ボーナス票「<span className="text-red-500">+1票</span>」
                      </li>
                      <li className="pb-2">お題の種類は関係ありません。</li>
                      <li className="pb-2">
                        集計時に公開されているツイートが対象です。
                      </li>
                      <li className="pb-2">
                        お題小説の詳細は{' '}
                        <Link href="/events-in-event/novels-on-themes" passHref>
                          <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900 pr-1">
                            こちら
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg text-center">
                    <div className="pb-4">
                      <p className="pb-2">【条件③】</p>
                      <span className="text-red-500">推し台詞</span>
                      応募があるキャラ
                    </div>
                  </h3>
                  <div className="text-base text-left pb-4">
                    <ul className="list-disc pl-6 pr-2">
                      <li className="pb-2">
                        ボーナス票「<span className="text-red-500">+1票</span>」
                      </li>
                      <li className="pb-2">
                        集計時に公開されているツイートが対象です。
                      </li>
                      <li className="pb-2">
                        推し台詞の詳細は{' '}
                        <Link href="/events-in-event/oshi-serif" passHref>
                          <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900 pr-1">
                            こちら
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pb-0">
                  <h3 className="text-lg text-center">
                    <div className="pb-4">
                      <p className="pb-2">【条件④】</p> 「{' '}
                      <span className="text-red-500">#幻水総選挙運動</span>{' '}
                      」のツイートがあるキャラ
                    </div>
                  </h3>

                  <div className="text-base text-left pb-0">
                    <ul className="list-disc pl-6 pr-2">
                      <li className="pb-2">
                        ボーナス票「<span className="text-red-500">+2票</span>」
                      </li>
                      <li className="pb-2">
                        6/26（日）23:59までのツイートがボーナス票に反映されます。
                      </li>
                      <li className="pb-2">
                        集計時に公開されているツイートが対象です。
                      </li>
                      <li className="pb-2">
                        キャラ名が判別できるツイートに限ります。
                      </li>
                      <li className="pb-2">
                        #幻水総選挙運動の詳細は{' '}
                        <Link
                          href="/events-in-event/election-campaign"
                          passHref
                        >
                          <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900 pr-1">
                            こちら
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">ボーナス票の例</h2>
              <div className="text-base text-center pb-0">
                <div className="pb-4">
                  <h3 className="text-lg text-center">
                    <div className="underline underline-offset-4 pb-4">例①</div>
                  </h3>
                  <div className="text-base text-center pb-4">
                    「坊ちゃん」の開票イラスト1枚、お題小説1作、推し台詞1つ
                    <br />
                    →坊ちゃんに「+3票」
                  </div>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg text-center">
                    <div className="underline underline-offset-4 pb-4">例②</div>
                  </h3>
                  <div className="text-base text-center pb-4">
                    「2主」の開票イラストが10枚
                    <br />
                    →2主に「+1票」
                  </div>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg text-center">
                    <div className="underline underline-offset-4 pb-4">例③</div>
                  </h3>
                  <div className="text-base text-center pb-4">
                    「テッド」の総選挙運動ツイートが1件
                    <br />
                    →「テッド」に「+2票」
                  </div>
                </div>

                <div className="text-base text-left">
                  ※誰が応募したか、応募が何件あるか…は関係なく、
                  <span className="text-red-500">
                    参加者様全体の「応募（ツイート）の有無」
                  </span>
                  で集計されます。
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

export default BonusVotes
