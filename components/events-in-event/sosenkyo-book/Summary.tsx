import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const Summary: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">本について</h2>
      <div className="text-base text-left pb-4">
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">仕様：B5 / フルカラー本</li>
          <li className="pb-2">頒布価格：未定</li>
          <li className="pb-2">
            発行日：2022年9月予定（幻想水滸伝オンリー同人誌即売会「三都物語95」）
          </li>
          <li className="pb-2">イベントでの頒布及び通販</li>
        </ul>
      </div>
    </>
  )
}
