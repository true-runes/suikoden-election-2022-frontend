import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

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

  // 一つ一つ register しないと Error: "category" is not a registered scale. みたいなエラーになる
  ChartJS.register(ArcElement, Tooltip, Legend)

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

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
                    <Doughnut data={data} />
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
