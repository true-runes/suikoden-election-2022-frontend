import type { NextPage } from 'next'
import Image from 'next/image'
import { useLocale } from '../hooks/useLocale'

const VoteExamples: NextPage = () => {
  const { locale } = useLocale()

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
                src="/vote_example_all_chara_01.png"
                alt="オールキャラ部門 投票例 01"
                width={1166}
                height={332}
              />
            </div>

            <div className="text-base text-center pb-6">
              <h2 className="text-xl font-bold pb-4">
                オールキャラ部門 投票例②
              </h2>
              <Image
                src="/vote_example_all_chara_02.png"
                alt="オールキャラ部門 投票例 02"
                width={1168}
                height={494}
              />
            </div>

            <div className="text-base text-center pb-6">
              <h2 className="text-xl font-bold pb-4">コンビ部門 投票例①</h2>
              <Image
                src="/vote_example_combination_01.png"
                alt="コンビ部門 投票例 01"
                width={1170}
                height={332}
              />
            </div>

            <div className="text-base text-center pb-6">
              <h2 className="text-xl font-bold pb-4">コンビ部門 投票例②</h2>
              <Image
                src="/vote_example_combination_02.png"
                alt="コンビ部門 投票例 02"
                width={1170}
                height={384}
              />
            </div>

            <div className="text-base text-left pb-0">
              <div className="text-base text-left pb-4">
                ハッシュタグの前には半角スペースまたは改行が必要です。
                <br />
                キャラやコンビがしっかりと判別できれば、書式は問いません。
              </div>
              <ul className="list-disc pl-6 pr-2">
                <li className="pb-2">
                  オールキャラ部門の投票はなるべく1ツイートに収めてください。
                </li>
                <li className="pb-2">
                  愛称を使わず、キャラクター名で投票して下さい。
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoteExamples
