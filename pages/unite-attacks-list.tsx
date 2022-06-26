import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import { NavBar } from '@/components/common/NavBar'
import { SiteFooter } from '@/components/common/SiteFooter'

import { AttacksList } from '@/components/unite-attacks-list/AttacksList'

type Attack = {
  id: number
  name: string
  name_en: string
  character_names: string
  page_annotation: string
}

type ApiResponse = {
  [key: string]: Attack[]
}

const UniteAttacksList: NextPage = () => {
  const [nowLoading, setNowLoading] = useState(true)
  const [apiResponse, setApiResponse] = useState<ApiResponse>({})

  // TODO: 開発サーバが動的に使えるように環境変数で定義する
  const apiUrl = 'https://headquarters.suikoden.info/unite_attacks?title=all'

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
    <div className="bg-white text-black">
      <title>協力攻撃一覧 - 幻水総選挙2022</title>
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
            <li>協力攻撃一覧</li>
          </ul>
        </div>

        <>
          <div className="bg-white text-black">
            <div className="hero">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-2xl font-bold pt-4 pb-10 underline underline-offset-4 font-zen-old-mincho">
                    「協力攻撃」一覧
                  </h1>

                  {nowLoading ? (
                    <Image
                      src="/images/spinner.gif"
                      alt="幻水総選挙スピナー"
                      width="47"
                      height="47"
                    />
                  ) : (
                    <>
                      {/* <div className="bg-white text-black text-xl text-center">
                        <div>
                          <span>
                            <Link href="/vote-to-unite-attacks" passHref>
                              <span className="px-1 link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                                「協力攻撃部門」投票ページはこちら
                              </span>
                            </Link>
                          </span>
                        </div>
                      </div>

                      <div className="my-8" />
                      <div className="divider" />
                      <div className="my-8" /> */}

                      <AttacksList apiResponse={apiResponse} />
                    </>
                  )}

                  <div className="divider" />
                  <SiteFooter />
                </div>
              </div>
            </div>
          </div>
        </>
      </main>
    </div>
  )
}

export default UniteAttacksList
