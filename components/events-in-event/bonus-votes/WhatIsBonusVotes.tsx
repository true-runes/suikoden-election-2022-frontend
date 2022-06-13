import type { NextPage } from 'next'
import { useLocale } from '@/hooks/useLocale'

export const WhatIsBonusVotes: NextPage = () => {
  const { locale } = useLocale()

  return (
    <>
      <h2 className="text-xl font-bold pb-4">
        {locale === 'ja' ? 'ボーナス票とは？' : 'What is bonus votes?'}
      </h2>
      <div className="text-base text-left pb-4">
        下記の条件をクリアしたキャラには「ボーナス票」が入ります。
        <br />
        通常投票とボーナス票の合計が、最終結果となります。
        <br />
        ボーナス票は
        <span className="text-red-500">1キャラにつき最大5票</span>
        入ります。
        <br />
        ※お一人様の持ち票（3票）は変わりません。
      </div>
    </>
  )
}
