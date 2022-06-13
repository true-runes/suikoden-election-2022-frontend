import type { NextPage } from 'next'
import { useLocale } from '@/hooks/useLocale'
// import useTranslation from 'next-translate/useTranslation'

export const WhatIsIllustrationsWithResults: NextPage = () => {
  const { locale } = useLocale()
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">
        {locale === 'ja'
          ? '開票イラストとは？'
          : 'What is voting illustrations?'}
      </h2>

      <div className="text-base text-left pb-4">
        開票当日、キャラの順位発表ツイートに掲載するイラストを募集します。お好きなキャラを描いてお送りください。
      </div>
    </>
  )
}
