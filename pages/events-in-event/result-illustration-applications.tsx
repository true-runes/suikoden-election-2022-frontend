import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid } from 'gridjs-react'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import { NavBar } from '@/components/common/NavBar'
import { SiteFooter } from '@/components/common/SiteFooter'

const ResultIllustrationApplications: NextPage = () => {
  const [gridJsData, setGridJsData] = useState([])
  const [nowLoading, setNowLoading] = useState(true)

  const apiUrl =
    'https://headquarters.suikoden.info/result_illustration_applications'

  useEffect(() => {
    setNowLoading(true)

    axios
      .get(apiUrl)
      .then((response) => {
        // [['スタリオン'], ['アルベルト']] のような形式にする
        const gridJsData = response.data.map((characterName: string) => {
          return [characterName]
        })

        setGridJsData(gridJsData)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setNowLoading(false)
      })
  }, [])

  return (
    <div className="bg-white text-black">
      <title>開票イラスト応募状況 - 幻水総選挙2022</title>
      <div className="right">
        <HumbergerNavigation />
      </div>

      <main id="page-wrap">
        <NavBar />

        <div className="text-base bg-gray-700 text-white breadcrumbs pl-6 pb-2 sticky top-16 z-50">
          <ul>
            <li>
              <Link href="/" passHref>
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/events-in-event" passHref>
                総選挙内企画
              </Link>
            </li>
            <li>
              <Link href="/events-in-event/illustrations-with-results" passHref>
                開票イラスト
              </Link>
            </li>
            <li>開票イラスト応募状況</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pt-6 pb-8 underline font-zen-old-mincho">
                開票イラスト応募状況
              </h1>

              <div className="overflow-x-auto w-full">
                {nowLoading ? (
                  <Image
                    src="/images/spinner.gif"
                    alt="幻水総選挙スピナー"
                    width="47"
                    height="47"
                  />
                ) : (
                  <>
                    <Grid
                      data={gridJsData}
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />
        <SiteFooter />
      </main>
    </div>
  )
}

export default ResultIllustrationApplications
