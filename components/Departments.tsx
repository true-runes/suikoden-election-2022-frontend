import type { NextPage } from 'next'
import { useLocale } from '../hooks/useLocale'

const Departments: NextPage = () => {
  const { locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-4 underline font-zen-old-mincho">
              {locale === 'ja' ? '部門' : 'Divisions'}
            </h1>

            <div>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    {locale === 'ja'
                      ? '幻水総選挙2022では2つの部門があります。'
                      : 'The 2022 Suikoden General Election has 2 divisions.'}
                  </li>
                  <li className="pb-2">
                    {locale === 'ja'
                      ? '各部門でお一人様1回ずつ投票できます（どちらか一方の部門のみへの投票でも構いません）。'
                      : 'You can vote 1 time in each division (you can also vote just in one division only if you wish).'}
                  </li>
                </ul>
              </div>

              <div className="pb-4">
                <h2 className="text-xl font-bold pb-4">
                  {locale === 'ja'
                    ? '①オールキャラ部門'
                    : '(1) All characters division'}
                </h2>
                <p className="text-base text-center pb-4">
                  {locale === 'ja'
                    ? '好きなキャラに投票する部門です。'
                    : 'In this division, vote for your favorite characters.'}
                </p>
                <div className="pb-4">
                  <h3 className="text-lg font-bold">
                    {locale === 'ja' ? '投票数' : 'Number of votes'}
                  </h3>
                  {locale === 'ja' ? (
                    <p className="text-lg pb-4">
                      お一人様 <span className="text-red-500">3票</span> まで
                    </p>
                  ) : (
                    <p className="text-lg pb-4">
                      1 person has up to{' '}
                      <span className="text-red-500">3 votes</span>
                    </p>
                  )}
                  <div className="text-base text-left pb-4">
                    <ul className="list-disc pl-6 pr-2">
                      {locale === 'ja' ? (
                        <li className="pb-2">
                          <span className="text-red-500">
                            1キャラにつき1票まで
                          </span>
                          投票可（
                          <span className="text-red-500">
                            同じキャラへの複数投票はできません
                          </span>
                          ）。
                        </li>
                      ) : (
                        <li className="pb-2">
                          You are allowed to{' '}
                          <span className="text-red-500">
                            give 1 vote per character
                          </span>{' '}
                          (you{' '}
                          <span className="text-red-500">
                            cannot give multiple votes for the same character
                          </span>
                          ).
                        </li>
                      )}
                      <li className="pb-2">
                        {locale === 'ja'
                          ? '3票を使い切らず、1票だけ、2票だけの投票も可。'
                          : 'You can also vote for just 1 character or just 2 characters instead of using all 3 votes.'}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pb-4">
                  <h3 className="text-lg font-bold">
                    {locale === 'ja'
                      ? '投票用ハッシュタグ'
                      : 'Hashtag to use for voting'}
                  </h3>
                  <p className="text-lg">#幻水総選挙2022</p>
                </div>
              </div>

              <h2 className="text-xl font-bold pb-4">
                {locale === 'ja'
                  ? '②？？？部門（近日発表！）'
                  : '(2) ??? division (Reveal soon!)'}
              </h2>
              <p className="text-base text-center pb-4">
                {locale === 'ja' ? '？？？' : '???'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Departments
