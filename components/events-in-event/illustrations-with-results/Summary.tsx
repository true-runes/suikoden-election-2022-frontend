import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const Summary: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">募集概要</h2>
      <div className="text-base text-left pb-4">
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">
            イラストが描かれた画像ファイルをご応募ください。詳細は後述します。
          </li>
          <li className="pb-2">
            お一人様で
            <span className="text-red-500 pl-1 pr-1">何枚でも応募できます</span>
            。ただし、お一人様で同じキャラに2枚以上の応募はできません。
          </li>
          <li className="pb-2">
            1キャラの募集枠に制限はありません。ご応募いただいたイラストは全て掲載いたします。
          </li>
          <li className="pb-2">
            ご応募頂きましたイラストにつきまして、ご自身のSNSへの投稿や同人誌への掲載などをご自由にして頂いて構いません。可能であれば総選挙終了後の公開でお願いします。
          </li>
        </ul>
      </div>
    </>
  )
}
