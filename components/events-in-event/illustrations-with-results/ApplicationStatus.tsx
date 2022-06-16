import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid } from 'gridjs-react'

export const ApplicationStatus: NextPage = () => {
  const [nowLoading, setNowLoading] = useState(true)
  const [_apiResponse, setApiResponse] = useState([])
  const [sortedApiResponse, setSortedApiResponse] = useState([])
  const [sortedGridJsItems, setSortedGridJsItems] = useState([])

  console.log(process.env.NEXT_PUBLIC_ILLUSTRATIONS_APPLICATION_STATUS_API_URL)
  const apiUrl =
    process.env.NEXT_PUBLIC_ILLUSTRATIONS_APPLICATION_STATUS_API_URL ||
    'localhost'
  const apiKey =
    process.env.NEXT_PUBLIC_ILLUSTRATIONS_APPLICATION_STATUS_API_KEY || ''

  useEffect(() => {
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

        // https://gridjs.io/docs/config/data
        const forGridJsItems: any = sortedByCharacterName.map((item: any) => {
          return [item.characterName]
        })
        // 二段階の変換処理が冗長な気がするのでうまくリファクタしたいところ
        setSortedGridJsItems(forGridJsItems)

        setNowLoading(false)
      })
  }, [apiKey, apiUrl])

  return (
    <>
      <div className="bg-white text-black">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-8 underline font-zen-old-mincho">
                開票イラスト応募状況
              </h1>

              {/* Loading... も訳が必要 */}
              {/* // Grid.js https://gridjs.io/docs/integrations/react/ */}
              {nowLoading ? (
                <p>読み込み中…</p>
              ) : (
                <div>
                  <h2 className="text-lg pb-4">2022/06/XX 12:00:00 現在</h2>

                  <Grid
                    // data={[['スタリオン'], ['アルベルト']]}
                    data={sortedGridJsItems}
                    columns={[
                      {
                        name: 'キャラ名',
                      },
                    ]}
                    sort={false}
                    search={false}
                    pagination={{ enabled: false }}
                    style={{
                      th: { textAlign: 'center' },
                      td: { textAlign: 'center' },
                    }}
                    // https://github.com/grid-js/gridjs/blob/master/src/i18n/en_US.ts
                    language={{
                      search: { placeholder: 'キャラ名を検索' },
                      sort: {
                        sortAsc: '昇順で並び替える',
                        sortDesc: '降順で並び替える',
                      },
                      loading: '読み込み中…',
                      // noRecordsFound: 'レコードが見つかりませんでした',
                      error: 'エラーが発生しました',
                    }}
                  />
                </div>
              )}

              {/* <div className="overflow-x-auto w-full">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
