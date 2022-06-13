import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const DetailsFileName: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">募集詳細 - ファイル名</h2>
      <div className="text-base text-left pb-4">
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">
            <span className="font-bold">キャラ名_作者様のお名前.拡張子</span>
          </li>
        </ul>
        <p className="py-2">※日本語のファイル名で構いません。</p>
        <p className="pb-2">
          ※スマートフォンから送る場合等、ファイル名変更が難しい方はそのままで大丈夫です。
        </p>
      </div>
    </>
  )
}
