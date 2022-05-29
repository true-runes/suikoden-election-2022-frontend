import type { NextPage } from 'next'
import { useLocale } from '../hooks/useLocale'

const Dendouiri: NextPage = () => {
  const { locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
              {locale === 'ja'
                ? '「殿堂入り」について'
                : 'About the "Hall of Fame"'}
            </h1>
            <p className="text-base text-left pb-4">
              {locale === 'ja'
                ? '2017年より「殿堂入り」制度を実施しています。殿堂入り制度のルールは次のとおりです。'
                : 'The "Hall of Fame" system has been in place since 2017. The rules for entering the hall of fame are as follows'}
            </p>
            <div className="text-base text-left pb-4">
              <ul className="list-decimal pl-6 pr-2">
                <li className="pb-2">
                  {locale === 'ja'
                    ? '1位を計2回獲得したキャラは「殿堂入り」です。'
                    : 'A character who has won first place a total of two times is a "Hall of Fame inductee".'}
                </li>
                <li className="pb-2">
                  {locale === 'ja'
                    ? '殿堂入りを果たしたキャラは翌年の総選挙のみ、順位が付かなくなります。'
                    : 'The character inducted into the hall of fame will not be ranked in the following year’s General Election only.'}
                </li>
              </ul>
            </div>
            <p className="text-base text-left text-red-500">
              {locale === 'ja'
                ? '今年は幻水総選挙10周年記念、及び、「部門」創設のため、全キャラへの投票を可能とします。'
                : 'This year, to celebrate the 10th anniversary of the Suikoden General Election and because of the creation of “divisions”, votes for all characters will be allowed.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dendouiri
