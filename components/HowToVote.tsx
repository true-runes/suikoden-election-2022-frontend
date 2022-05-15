import type { NextPage } from 'next'

const HowToVote: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-4">投票方法</h1>
            <p className="text-base text-left pb-4">
              以下の2つのうち、いずれかの方法での投票をお願いします。
            </p>
            <h1 className="text-xl font-bold pb-4">方法1: ツイート投票</h1>
            <div className="text-base text-left pb-4">
              <ul className="list-disc pl-6 pr-2">
                <li className="pb-2">
                  指定のハッシュタグをつけて、ツイートで投票して下さい。
                </li>
                <li className="pb-2">
                  タグ名や具体的なツイート内容は各部門の説明をご参照下さい。
                </li>
              </ul>
            </div>
            <h1 className="text-xl font-bold pb-4">方法2: DM投票</h1>
            <div className="text-base text-left pb-4">
              <ul className="list-disc pl-6 pr-2">
                <li className="pb-2">
                  非公開アカウント（鍵付き）の方や、鍵を開けたり閉めたりする方は、主催宛DMで投票して下さい。
                </li>
                <li className="pb-2">公開アカウントの方もDM投票が可能です。</li>
              </ul>
            </div>
            <h1 className="text-lg font-bold pb-4">
              ※注: 投票時だけ公開アカウントにしたい場合
            </h1>
            <p className="text-left pb-4">
              「普段は非公開だけど、投票の時だけ公開アカウントにして投票したい」という方は、下記の手順で投票をお願いします。
            </p>
            <div className="text-base text-left pb-4">
              <ul className="list-decimal pl-6 pr-2">
                <li className="pb-2">投票前にアカウントを公開状態にする。</li>
                <li className="pb-2">
                  ツイート投票後、専用ページで「投票チェック」をする（チェック方法は後日ご案内します）。
                </li>
                <li className="pb-2">
                  2022/7/3（日）23:59まで公開アカウントのままにする。
                </li>
              </ul>
            </div>
            <p className="text-base text-left">
              ※集計漏れを防ぐため、途中で鍵をかける可能性がある方はDM投票を推奨します。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToVote
