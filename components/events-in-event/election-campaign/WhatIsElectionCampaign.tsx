import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

export const WhatIsElectionCampaign: NextPage = () => {
  const { t, lang } = useTranslation(
    'election_campaign_what_is_election_campaign'
  )

  return (
    <>
      <h2 className="text-xl font-bold pb-4">{t('選挙運動とは？')}</h2>
      <div className="text-base text-left">
        <div className="pb-4">
          {lang === 'ja' ? (
            <>
              ハッシュタグ「{' '}
              <a
                href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%99%E9%81%8B%E5%8B%95&src=typed_query&f=live"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
              >
                #幻水総選挙運動
              </a>{' '}
              」をつけたツイートで、選挙運動をしませんか？
              推しを応援するも良し。魅力や好きなシーンを語って布教するも良し。総選挙を盛り上げるも良し。ご自由にお使いください。
            </>
          ) : (
            <>
              Why not campaign by tweeting with the hashtag{' '}
              <a
                href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%99%E9%81%8B%E5%8B%95&src=typed_query&f=live"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
              >
                #幻水総選挙運動
              </a>
              ? You can support your favorites. You can go on about things like
              their charms and your favorite scenes with them. You can liven up
              the General Election. Please use this for whatever you want.
            </>
          )}
        </div>
        <ul className="list-disc pl-6 pr-2">
          <li className="py-1">
            {t('応援するキャラ名を本文中に記載していただけますと嬉しいです。')}
          </li>
          <li className="py-1">{t('ご自身の作品を添付してもOKです！')}</li>
          {t('（恋愛描写を含む作品は、原作程度の表現でお願いします）')}
          <li className="py-1">{t('文字のみのツイートも大歓迎です！')}</li>
          <li className="py-1">
            {lang === 'ja' ? (
              <>
                「{' '}
                <a
                  href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%992022&src=typed_query&f=live"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
                >
                  #幻水総選挙2022
                </a>{' '}
                」タグの使用は任意です。
              </>
            ) : (
              <>
                Using the{' '}
                <a
                  href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%992022&src=typed_query&f=live"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
                >
                  #幻水総選挙2022
                </a>{' '}
                hashtag is optional.
              </>
            )}
          </li>
        </ul>
      </div>
    </>
  )
}
