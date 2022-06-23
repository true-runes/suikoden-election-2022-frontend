import type { NextPage } from 'next'

type Props = {
  screenName: string
}

export const ResultDescription: NextPage<Props> = ({ screenName }) => {
  // 文言は https://github.com/true-runes/suikoden-election-2020-frontend/blob/development/src/components/parts/CheckYourVote/NoticeMessageForResults.vue などを参考に。

  return (
    <>
      <div className="pb-0">
        <h2 className="text-xl font-bold pb-4">
          {screenName} さん の ツイートの検索結果
        </h2>
        <div className="text-base">
          <ul className="text-left list-disc pl-6 pr-2">
            <li className="pb-2">
              <span className="text-red-500 pl-1 pr-1">
                DM による投票はこのページでチェックすることはできません。
              </span>
              主催からお送りする投票受付確認の DM をお待ち下さい。
            </li>
            <li className="pb-2">
              ツイートを削除したりアカウントに鍵を付けたりした場合には、チェック結果へ反映されない場合があります。
            </li>
            <li className="pb-2">
              投票のやり直しなど、同内容と思われる投票ツイートがあった際には、集計が重複しないように主催側で対応させて頂きます。
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
