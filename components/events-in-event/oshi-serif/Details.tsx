import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const Details: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">詳細</h2>
      <div className="text-base text-left pb-4">
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">お一人様でいくつでも投稿できます。</li>
          <li className="pb-2">
            公式小説や公式コミックスなど、
            <span className="text-red-500">
              ゲーム本編以外に登場する台詞でもOK
            </span>
            です。 （小説版や漫画版は出典を書いて下さい）
          </li>
          <li className="pb-2">
            過去の総選挙で使用した台詞と同じものでも構いません。
          </li>
          <li className="pb-2">
            1キャラに対して複数の台詞を頂きました場合、掲載する台詞は主催側で選ばせて頂きます。
          </li>
        </ul>
      </div>
    </>
  )
}
