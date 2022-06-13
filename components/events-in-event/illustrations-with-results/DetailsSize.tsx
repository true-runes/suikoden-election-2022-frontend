import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const DetailsSize: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">募集詳細 - サイズ</h2>
      <div className="text-base text-left pb-4">
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">
            規定なし（投稿時にTwitter側で自動調整されます）
          </li>
        </ul>
        <div className="py-2">
          ※印刷に耐えるほどの高解像度な画像が悪用されるケースがありますのでご注意ください。
        </div>
      </div>
    </>
  )
}
