import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ResultIllustrationApplications: NextPage = () => {
  const [apiResponse, setApiResponse] = useState([])
  const [nowLoading, setNowLoading] = useState(true)

  const apiUrl =
    'https://headquarters.suikoden.info/result_illustration_applications'

  useEffect(() => {
    setNowLoading(true)

    axios
      .get(apiUrl)
      .then((response) => {
        setApiResponse(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setNowLoading(false)
      })
  }, [])

  return (
    <>
      <div className="bg-white text-black">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-8 underline font-zen-old-mincho">
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
                      apiResponse.map((characterName: string) => {
                        return (
                          <tr key={characterName}>
                            <td className="bg-white text-black">
                              {characterName}
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
    </>
  )
}

export default ResultIllustrationApplications
