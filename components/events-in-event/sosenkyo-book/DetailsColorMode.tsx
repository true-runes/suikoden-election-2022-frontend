import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const DetailsColorMode: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">募集詳細 - カラーモード</h2>
      <div className="text-base text-left pb-4">
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">CMYK</li>
          <ul className="list-disc pl-6 pr-2 pt-2">
            <li className="pb-2">
              作者様でRGBからCMYKの変換が難しい場合は、主催側で変換いたします。
            </li>
          </ul>
        </ul>
      </div>
    </>
  )
}
