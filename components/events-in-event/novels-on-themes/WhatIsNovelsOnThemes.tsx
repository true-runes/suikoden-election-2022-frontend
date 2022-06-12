import type { NextPage } from 'next'
import { useLocale } from '@/hooks/useLocale'

export const WhatIsNovelsOnThemes: NextPage = () => {
  const { locale } = useLocale()

  return (
    <>
      <h2 className="text-xl font-bold pb-4">
        {locale === 'ja' ? 'お題小説とは？' : 'What is themed short stories?'}
      </h2>
      <div className="text-base text-left pb-4">
        キャラとお題（テーマ）を選んで小説を書いていただき、ハッシュタグを付けてツイートする企画です。
        <br />
        イラストだけでなく文字書きの方も参加できる企画があれば…と思い、昨年より開始いたしました。
      </div>
    </>
  )
}
