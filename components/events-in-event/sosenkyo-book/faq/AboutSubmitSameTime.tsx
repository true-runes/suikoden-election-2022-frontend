import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const AboutSubmitSameTime: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <div className="py-2">
        <li className="pb-2">
          <div className="pb-2">
            Q. Web用データと印刷用データは同時に出さないといけませんか？
          </div>
          <div className="pb-2">
            A. 期限内に両方を提出頂ければ、同時でなくても大丈夫です。
          </div>
        </li>
      </div>
    </>
  )
}
