import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { useLocale } from '@/hooks/useLocale'
import Link from 'next/link'

import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

export const Divisions: NextPage = () => {
  dayjs.locale(ja)
  dayjs.extend(isSameOrAfter)

  const { locale } = useLocale()

  const [isDuringVoteTerm, setIsDuringVoteTerm] = useState(false)

  useEffect(() => {
    const dayjsCurrentDateTime = dayjs(
      new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
    )
    const dayjsVoteStartDateTime = dayjs('2022-06-24 21:00:00')

    setIsDuringVoteTerm(
      dayjsCurrentDateTime.isSameOrAfter(dayjsVoteStartDateTime)
    )
  }, [])

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
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
                  <li className="pb-2">
                    <a
                      href="https://note.com/gensosenkyo/n/nc07265ea4511"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
                    >
                      「コンビ部門」の再検討について (2022/06/13)
                    </a>
                  </li>
                </ul>
              </div>

              <div className="py-4" />

              <div id="all-characters-division" className="pb-4 -mt-32 pt-32">
                <h2 className="text-xl font-bold pb-4 underline underline-offset-4">
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
                  <h3 className="text-lg font-bold pb-2">
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
                  <h3 className="text-lg font-bold pb-2">
                    {locale === 'ja'
                      ? '投票用ハッシュタグ'
                      : 'Hashtag to use for voting'}
                  </h3>
                  <p className="text-lg">
                    <a
                      href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%992022&src=typed_query&f=live"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
                    >
                      #幻水総選挙2022
                    </a>
                  </p>
                </div>
              </div>

              <div className="py-4" />

              <h2
                id="unite-attacks-division"
                className="text-xl font-bold pb-4 -mt-32 pt-32 underline underline-offset-4"
              >
                ②協力攻撃部門
              </h2>

              {isDuringVoteTerm && (
                <>
                  <div className="alert shadow-lg bg-white text-black text-xl">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-info flex-shrink-0 w-6 h-6 mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>

                      <span>
                        <Link href="/vote-to-unite-attacks" passHref>
                          <span className="px-1 link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                            投票ページはこちら
                          </span>
                        </Link>
                      </span>
                    </div>
                  </div>

                  <div className="my-4" />
                </>
              )}

              <div className="alert shadow-lg bg-white text-black text-xl">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info flex-shrink-0 w-6 h-6 mt-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <span>
                    <Link href="/unite-attacks-list" passHref>
                      <span className="px-1 link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                        「協力攻撃」一覧はこちら
                      </span>
                    </Link>
                  </span>
                </div>
              </div>

              <div className="my-6" />

              <div>
                <div className="text-base text-center pb-4">
                  <ul className="list-disc text-left pl-6 pr-2">
                    <li className="pb-2">
                      お好きな「協力攻撃」を選んで投票する部門です。
                    </li>
                    <li className="pb-2">
                      幻水シリーズ全ての協力攻撃が対象です。
                    </li>
                  </ul>
                </div>
                <div className="pb-4">
                  <div className="pb-2">
                    <h3 className="text-lg font-bold pb-2"></h3>
                    <p className="text-lg pb-4">
                      お一人様 <span className="text-red-500">1票</span>
                    </p>
                  </div>

                  <div className="pb-2">
                    <h3 className="text-lg font-bold pb-2">投票数</h3>
                    <p className="text-lg pb-4">
                      お一人様 <span className="text-red-500">1票</span>
                    </p>
                  </div>

                  <div className="pb-2">
                    <h3 className="text-lg font-bold pb-2">
                      投票用ハッシュタグ
                    </h3>
                    <p className="text-lg pb-4">
                      <a
                        href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%992022%E5%8D%94%E5%8A%9B%E6%94%BB%E6%92%83&src=typed_query&f=live"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
                      >
                        #幻水総選挙2022協力攻撃
                      </a>
                    </p>
                  </div>

                  <div className="pb-2">
                    <h3 className="text-lg font-bold pb-2">補足</h3>
                    <ul className="list-disc text-left pl-6 pr-2">
                      <li className="pb-2">
                        投票方法は{' '}
                        <a
                          href="https://twitter.com/gensosenkyo/status/1538137055167148032"
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
                        >
                          こちらのツイート
                        </a>{' '}
                        をご参照下さい。
                      </li>

                      <li className="pb-2">ボーナス票は付きません。</li>
                      <li className="pb-2">
                        お時間がないこともあり、開票イラスト、お題小説、推し台詞の募集はいたしません。申し訳ございません。
                      </li>
                      <li className="pb-2">
                        選挙運動や投票時、後夜祭などで当部門の作品を掲載していただくことは構いませんので、ぜひどうぞ。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
