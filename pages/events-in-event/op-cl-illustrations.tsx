import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '../../components/HumbergerMenu/HumbergerNavigation'
import NavBar from '../../components/NavBar'
import SiteFooter from '../../components/SiteFooter'

const OpClIllustrations: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <title>OPイラスト・CLイラスト - 幻水総選挙2022</title>
      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <main id="page-wrap">
        <NavBar />

        <div className="text-base bg-gray-700 text-white breadcrumbs pl-6 pb-2">
          <ul>
            <li>
              <Link href="/">ホーム</Link>
            </li>
            <li>
              <Link href="/events-in-event">総選挙内企画</Link>
            </li>
            <li>OP&CLイラスト</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-4 underline font-zen-old-mincho">
                OPイラスト・CLイラスト
              </h1>

              <h2 className="text-xl font-bold pb-4">OP＆CLイラストとは？</h2>
              <div className="text-base text-left pb-4">
                オープニングイラスト（OPイラスト）・クロージングイラスト（CLイラスト）は、それぞれ「投票開始」、「企画終了」のツイート時に掲載させて頂くイラストです。
                ご協力頂ける方はDMでご連絡下さい。
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">募集内容の詳細</h2>
              <div className="text-base text-left">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    DMの送り先は{' '}
                    <a
                      href="https://twitter.com/gensosenkyo"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
                    >
                      @gensosenkyo
                    </a>{' '}
                    となります。
                  </li>
                  <li className="pb-2">
                    <p>使用時にお名前とtwitter IDを掲載させて頂きます。</p>
                    <p>（ID掲載を希望されない場合、お名前のみ記載致します）</p>
                  </li>
                  <li className="pb-2">イラストに文字を入れさせて頂きます。</li>
                  <li className="pb-2">
                    キャラや内容に指定はございません。ご自由にお描きください。
                  </li>
                  <li className="pb-2">
                    <p>
                      ご寄稿いただきましたイラストは、ご自身のSNSや同人誌への掲載などご自由にして頂いて構いません。
                    </p>
                    <p>
                      （可能であれば、総選挙終了後の公開としていただけますと幸いです）
                    </p>
                  </li>
                  <li className="pb-2">
                    <p>
                      来年以降の総選挙の宣伝に使わせていただく可能性がございます。
                    </p>
                    <p>（その場合は改めてご連絡します）</p>
                  </li>
                </ul>
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">お礼</h2>
              <div className="text-base text-left">
                OPイラスト・CLイラストの作者様には、お礼として各部門「+1票」の追加投票権を進呈いたします。
              </div>

              <div className="divider" />

              <h2 className="text-xl font-bold pb-4">イラスト送付〆切</h2>
              <div className="text-base text-center">
                <p className="text-red-500 pb-1">2022年6月12日（日）</p>
                <p>（ご相談に応じます）</p>
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

export default OpClIllustrations
