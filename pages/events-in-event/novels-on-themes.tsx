import type { NextPage } from 'next'
import Link from 'next/link'

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
              <div className="text-base text-center pb-4">
                <p className="pb-2">準備中です（募集は終了しました）。</p>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">投稿方法</h2>
              <div className="text-base text-center pb-4">
                <p className="pb-2">準備中です。</p>
                {/* <div>
                  ・応募キャラ（1名） ・お題 ・ハッシュタグ 「
                  #幻水総選挙お題小説 」 を記載し、主催宛（ @gensosenkyo
                  ）ツイートで小説を投稿して下さい。
                </div> */}
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">ツイート例</h2>
              <div className="text-base text-center pb-4">
                <p className="pb-2">準備中です。</p>
                {/* <div>
                  ・応募キャラ（1名） ・お題 ・ハッシュタグ 「
                  #幻水総選挙お題小説 」 を記載し、主催宛（ @gensosenkyo
                  ）ツイートで小説を投稿して下さい。
                </div> */}
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">小説の掲載方法</h2>
              <div className="text-base text-center pb-4">
                <p className="pb-2">準備中です。</p>
                {/* <div>
                  ①画像で掲載
                  文庫ページメーカー、新書ページメーカーなどに本文を流し込んで画像にして下さい。
                  （リンク参照） https://sscard.monokakitools.net/index.html
                  ②外部リンクを掲載
                  pixiv、Privatter（ぷらいべったー）などに小説を投稿し、ツイートにURLを載せて下さい。
                  ※作品の公開範囲は「全体公開」でお願いします。
                  （ぷらいべったーは「ログイン限定公開」でも可）
                  ③ツイートに直接書く
                  リプライ（返信）やスレッドでツイートを繋げて書いて下さい。
                </div> */}
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">注意点</h2>
              <div className="text-base text-center pb-4">
                <p className="pb-2">準備中です。</p>
                {/* <div>
                  ・1ツイートに収まらない場合は、リプライ（返信）やスレッドで繋げて下さい。
                  一番最初のツイートにハッシュタグを付けて下さい。
                  ・応募キャラ以外が登場しても構いません。
                  ・主人公はお好きな名前をどうぞ。
                  ・恋愛描写は公式の設定、表現を基準にお願いします。
                  ※カップリング要素を含む作品は、応募ツイートに必ず明記して下さい。
                  ※掲載方法は ①画像 ②外部リンク のどちらか
                  ※作者様のIDとお名前をご紹介します（ID希望しない方はお名前のみご紹介）
                </div> */}
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">
                非公開アカウントの方の作品掲載
              </h2>
              <div className="text-base text-center pb-4">
                <p className="pb-2">準備中です。</p>
                {/* <div>
                  非公開アカウントの方は、作品を主催宛DMでお送り頂きますと、幻水総選挙のサブアカウントからツイートでご紹介します。
                  これにより、作品がボーナス票の対象となります。
                </div> */}
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">作品のご紹介について</h2>
              <div className="text-base text-center pb-4">
                <p className="pb-2">準備中です。</p>
                {/* <div>
                  開票の翌日以降、順位発表のツイートにリプで繋げる形で、作品をご紹介させていただきます。
                  ※繋げてほしくない方は、「開票時の紹介不要」と記載してください。
                </div> */}
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">（参考）昨年のお題</h2>
              <div className="text-base text-left pb-4">
                <div className="pb-4">昨年のお題は下記の3つでした。</div>

                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">「祭」</li>
                  <li className="pb-2">「どれにする？」</li>
                  <li className="pb-2">（フリー）</li>
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

export default NovelsOnThemes
