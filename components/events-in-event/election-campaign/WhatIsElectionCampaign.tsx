import type { NextPage } from 'next'

import { useLocale } from '@/hooks/useLocale'

export const WhatIsElectionCampaign: NextPage = () => {
  const { locale } = useLocale()

  return (
    <>
      <h2 className="text-xl font-bold pb-4">
        {locale === 'ja' ? '選挙運動とは？' : 'What is Campaigning?'}
      </h2>
      <div className="text-base text-left">
        <div className="pb-4">
          ハッシュタグ「{' '}
          <a
            href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%99%E9%81%8B%E5%8B%95&src=typed_query&f=live"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 text-blue-500 hover:text-blue-900"
          >
            #幻水総選挙運動
          </a>{' '}
          」をつけたツイートで、選挙運動をしませんか？
          推しを応援するも良し。魅力や好きなシーンを語って布教するも良し。総選挙を盛り上げるも良し。ご自由にお使いください。
        </div>
        <ul className="list-disc pl-6 pr-2">
          <li className="py-1">
            応援するキャラ名を本文中に記載していただけますと嬉しいです。
          </li>
          <li className="py-1">ご自身の作品を添付してもOKです！</li>
          （恋愛描写を含む作品は、原作程度の表現でお願いします）
          <li className="py-1">文字のみのツイートも大歓迎です！</li>
          <li className="py-1">
            「{' '}
            <a
              href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%992022&src=typed_query&f=live"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-blue-500 hover:text-blue-900"
            >
              #幻水総選挙2022
            </a>{' '}
            」タグの使用は任意です。
          </li>
        </ul>
      </div>
    </>
  )
}
