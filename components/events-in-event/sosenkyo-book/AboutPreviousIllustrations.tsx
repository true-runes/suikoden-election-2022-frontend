import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const AboutPreviousIllustrations: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">過去の作品掲載について</h2>
      <div className="pb-4 text-left">
        <ul className="list-disc pl-6 pr-2 pt-2">
          <li className="pb-2">
            過去の幻水総選挙でご応募された開票イラストも掲載可能です。
          </li>
          <li className="pb-2">
            ファイル名の末尾に開催年（「_2021」など）を付けてお送り下さい。WEB用データは不要です。
          </li>
          <li className="pb-2">加筆・修正をしていただいても構いません。</li>
          <li className="pb-2">過去作品のみの掲載も歓迎いたします。</li>
        </ul>
      </div>
    </>
  )
}
