import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import axios from 'axios'

const ResultIllustrationsStatus: NextPage = () => {
  const [_apiResponse, setApiResponse] = useState([])
  const [sortedApiResponse, setSortedApiResponse] = useState([])
  const [nowLoading, setNowLoading] = useState(false)

  const apiUrl =
    process.env.NEXT_PUBLIC_RESULT_ILLUSTRATIONS_STATUS_API_URL || 'localhost'
  const apiKey =
    process.env.NEXT_PUBLIC_RESULT_ILLUSTRATIONS_STATUS_API_KEY || ''

  useEffect(() => {
    setNowLoading(true)

    axios
      .get(apiUrl, {
        headers: {
          // GET のみなので API-KEY は露出して問題ない
          'X-MICROCMS-API-KEY': apiKey,
        },
      })
      .then((response) => {
        setApiResponse(response.data.contents)

        const sortedByCharacterName = response.data.contents.sort(
          (a: any, b: any) => {
            return a.characterName < b.characterName ? -1 : 1
          }
        )
        setSortedApiResponse(sortedByCharacterName)

        setNowLoading(false)
      })
  }, [apiKey, apiUrl])

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
              開票イラスト応募状況
            </h1>

            <div className="overflow-x-auto w-full">
              <table className="table table-normal shadow w-full text-center">
                <thead>
                  <tr>
                    <th className="bg-white text-black">キャラ名</th>
                  </tr>
                </thead>
                <tbody>
                  {nowLoading ? (
                    <tr>
                      <td></td>
                    </tr>
                  ) : (
                    sortedApiResponse.map((item: any) => {
                      return (
                        <tr key={item.id}>
                          <td className="bg-white text-black">
                            {item.characterName}
                          </td>
                        </tr>
                      )
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultIllustrationsStatus
