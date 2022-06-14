import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

export const WhatIsSosenkyoBook: NextPage = () => {
  const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">{t('幻水総選挙本とは？')}</h2>
      <div className="text-base text-left pb-4">
        <div className="pb-4">
          幻水総選挙10年目の記念として制作する、開票イラストなどをまとめた本のことです。
        </div>
      </div>
    </>
  )
}
