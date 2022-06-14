import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const Attention: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">注意</h2>
      <div className="pb-4 text-left">
        <ul className="list-disc pl-6 pr-2 pt-2">
          <li className="pb-2">
            掲載にあたり、イラスト原寸より縮小させていただく場合がございます（拡大はしません）。総選挙本ご参加の方はこれにご同意いただけたものとみなします。
          </li>
          <li className="pb-2">
            万が一、盗作などによって損害が発生した場合の賠償責任は、主催ではなく作者が負うものといたします。
          </li>
        </ul>
      </div>
    </>
  )
}
