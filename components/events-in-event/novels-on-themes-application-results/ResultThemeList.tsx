import type { NextPage } from 'next'

export const ResultThemeList: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">募集結果</h2>
      <div className="text-base text-left pb-0">
        <div className="text-base text-left pb-4">
          「お題」募集でご応募いただきましたお題の一覧です。
          <br />
          ご応募ありがとうございました！
        </div>

        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">特訓</li>
          <li className="pb-2">買い物</li>
          <li className="pb-2">ひみつだよ</li>
          <li className="pb-2">大好き</li>
          <li className="pb-2">信じてる</li>
          <li className="pb-2">家</li>
          <li className="pb-2">思い出</li>
          <li className="pb-2">願い</li>
          <li className="pb-2">昔話</li>
          <li className="pb-2">紋章</li>
          <li className="pb-2">「そういえば」</li>
          <li className="pb-2">記念（総選挙十周年記念にちなんで）</li>
          <li className="pb-2">
            あつい（暑い、熱い、厚い、「あ、つい」などなんでも）
          </li>
          <li className="pb-2">水</li>
          <li className="pb-2">応援</li>
          <li className="pb-2">夜空</li>
          <li className="pb-2">湖</li>
          <li className="pb-2">釣り</li>
          <li className="pb-2">チンチロリン</li>
          <li className="pb-2">休息</li>
          <li className="pb-2">決意</li>
          <li className="pb-2">友</li>
          <li className="pb-2">始まり</li>
          <li className="pb-2">終わり</li>
          <li className="pb-2">料理勝負</li>
          <li className="pb-2">スイーツ</li>
        </ul>
      </div>
    </>
  )
}
