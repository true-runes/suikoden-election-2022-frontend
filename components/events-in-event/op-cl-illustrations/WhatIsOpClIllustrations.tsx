import type { NextPage } from 'next'
import { useLocale } from '@/hooks/useLocale'
// import useTranslation from 'next-translate/useTranslation'

export const WhatIsOpClIllustrations: NextPage = () => {
  const { locale } = useLocale()
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">
        {locale === 'ja'
          ? 'OP＆CLイラストとは？'
          : 'What is OP illust. & CL illust.?'}
      </h2>
      <div className="text-base text-left pb-4">
        <p className="pb-2">
          「オープニングイラスト（OPイラスト）」と「クロージングイラスト（CLイラスト）」を募集します。
        </p>
        <p className="pb-2">
          それぞれ「投票開始」、「企画終了」のツイート時に掲載させていただくイラストです。
        </p>
        <p>ご協力頂ける方はDMでご連絡ください。</p>
      </div>
    </>
  )
}
