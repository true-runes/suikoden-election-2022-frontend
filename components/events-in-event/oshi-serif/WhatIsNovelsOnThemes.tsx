import type { NextPage } from 'next'
import { useLocale } from '@/hooks/useLocale'

export const WhatIsOshiSerif: NextPage = () => {
  const { locale } = useLocale()

  return (
    <>
      <h2 className="text-xl font-bold pb-4">
        {locale === 'ja' ? '推し台詞教えて！とは？' : 'What is fave quote?'}
      </h2>
      <div className="text-base text-left pb-4">
        幻水に登場する、あなたの好きな台詞（推し台詞）を教えてもらえませんか？
        ご投稿頂きました台詞は開票ツイートに掲載いたします。
      </div>
    </>
  )
}
