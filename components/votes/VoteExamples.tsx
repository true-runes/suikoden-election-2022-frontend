import type { NextPage } from 'next'
import Image from 'next/image'
import { useLocale } from '@/hooks/useLocale'
// import useTranslation from 'next-translate/useTranslation'

const VoteExamples: NextPage = () => {
  const { locale } = useLocale()
  // const { t } = useTranslation('')

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
              {locale === 'ja' ? '投票例' : '投票例'}
            </h1>

            <div className="text-base text-center pb-6">
              <h2 className="text-xl font-bold pb-4">
                オールキャラ部門 投票例①
              </h2>
              <Image
                src="/images/vote_example_all_chara_01.png"
                alt="オールキャラ部門 投票例 01"
                width={1166}
                height={336}
              />
            </div>

            <div className="text-base text-center pb-6">
              <h2 className="text-xl font-bold pb-4">
                オールキャラ部門 投票例②
              </h2>
              <Image
                src="/images/vote_example_all_chara_02.png"
                alt="オールキャラ部門 投票例 02"
                width={1176}
                height={480}
              />
            </div>

            <div className="text-base text-left pb-0">
              <div className="text-base text-left pb-4">
                ハッシュタグの前には半角スペースまたは改行が必要です。
                <br />
                キャラがしっかりと判別できれば、書式は問いません。
              </div>
              <ul className="list-disc pl-6 pr-2">
                <li className="pb-2">
                  愛称を使わずキャラクター名で投票してください。
                  <br />
                  （「様」などはOK）
                </li>
                <li className="pb-2">
                  主人公は愛称で投票しても構いません。
                  <br />
                  （5主人公→王子、TK主人公→団長　など）
                </li>
                <li className="pb-2">
                  宿星外のキャラにも投票できます。幻水に関係するものであればフリーダムにどうぞ。
                </li>
              </ul>
            </div>

            <div className="pb-10" />

            <div className="text-base text-center pb-0">
              <h2 className="text-xl font-bold pb-4">協力攻撃部門 投票例</h2>
              <ul className="list-disc pl-6 pr-2 text-left">
                <li className="pb-2">
                  投票方法は{' '}
                  <a
                    href="https://twitter.com/gensosenkyo/status/1538137055167148032"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
                  >
                    こちらのツイート
                  </a>{' '}
                  をご参照下さい。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoteExamples
