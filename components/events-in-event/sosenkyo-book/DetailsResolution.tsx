import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const DetailsResolution: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">
        募集詳細 - 印刷用データの解像度
      </h2>
      <div className="text-base text-left pb-4">
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">350dpi（推奨）</li>
          <ul className="list-disc pl-6 pr-2 pt-2">
            <li className="pb-2">
              幅と高さが規定通りであれば、異なる解像度でもお受けいたします。
            </li>
          </ul>
        </ul>
      </div>
    </>
  )
}
