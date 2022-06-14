import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const AboutSize: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <div className="py-2">
        <li className="pb-2">
          <div className="pb-2">
            Q. サイズを規定より小さく描いてしまったのですが…。
          </div>
          <div className="pb-2">
            A.
            規定のサイズは目安のため、多少の違いは大丈夫です。大きく違う場合は印刷の見た目に影響が出る可能性がありますので、事前にご相談ください。
          </div>
        </li>
      </div>
    </>
  )
}
