import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const DetailsSaveFormat: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">募集詳細 - 保存形式</h2>
      <div className="text-base text-left pb-4">
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">psd</li>
          <ul className="list-disc pl-6 pr-2 pt-2">
            <li className="pb-2">レイヤーは全て統合してください。</li>
            <li className="pb-2">写真データの場合は jpg でも構いません。</li>
          </ul>
        </ul>
      </div>
    </>
  )
}
