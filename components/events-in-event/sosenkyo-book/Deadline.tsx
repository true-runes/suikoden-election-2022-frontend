import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const Deadline: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">〆切</h2>
      <div className="text-base text-center pb-4">
        <div className="pb-2">
          <div>印刷用データ〆切</div>
          <div className="text-red-500 pl-1 pr-1">2022年7月31日（日）</div>
        </div>
        <div className="pb-2">
          <div>参加表明フォーム送信〆切</div>
          <div className="text-red-500 pl-1 pr-1">2022年7月31日（日）</div>
        </div>
      </div>
    </>
  )
}
