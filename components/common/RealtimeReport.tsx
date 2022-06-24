import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import axios from 'axios'

type AllCharacters = {
  sum: number
  votes_per_day: {
    [key: string]: number
  }
  votes_per_hour: {
    [key: string]: number
  }
  votes_per_lang: {
    ja: number
    others: number
  }
}

type UniteAttacks = {
  sum: number
  votes_per_day: {
    [key: string]: number
  }
  votes_per_hour: {
    [key: string]: number
  }
  votes_per_lang: {
    ja: number
    others: number
  }
}

export const RealtimeReport: NextPage = () => {
  const [allCharacters, setAllCharacters] = useState<AllCharacters>(
    {} as AllCharacters
  )
  const [uniteAttacks, setUniteAttacks] = useState<UniteAttacks>(
    {} as UniteAttacks
  )
  const [nowLoading, setNowLoading] = useState(false)

  const [dataJune24, setDataJune24] = useState([] as number[])
  const [dataJune25, setDataJune25] = useState([] as number[])
  const [dataJune26, setDataJune26] = useState([] as number[])

  const apiEndpoint =
    process.env.NEXT_PUBLIC_REALTIME_REPORT_API_URL ||
    'https://headquarters.suikoden.info/realtime_report'

  useEffect(() => {
    setNowLoading(true)

    axios
      .get(apiEndpoint)
      .then((response) => {
        setAllCharacters(response.data.all_characters)
        setUniteAttacks(response.data.unite_attacks)

        setDataJune24(response.data.all_characters.votes_per_hour['2020-06-24'])

        setNowLoading(false)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setNowLoading(false)
      })
  }, [apiEndpoint])

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
              リアルタイムレポート
            </h1>

            <div>
              <div className="text-base text-left">
                {nowLoading ? (
                  <p>Now Loading...</p>
                ) : (
                  <>
                    <div>オールキャラ部門ツイート投票数{allCharacters.sum}</div>
                    <div>協力攻撃部門ツイート投票数{uniteAttacks.sum}</div>

                    <div className="mt-10" />

                    <p>{dataJune24['21']}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
