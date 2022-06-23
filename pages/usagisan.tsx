import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import { NavBar } from '@/components/common/NavBar'
import { SiteFooter } from '@/components/common/SiteFooter'

type CharacterDetails = {
  nickname: string
  character: string
  products: string[]
}

const Usagisan: NextPage = () => {
  // const [isInitialState, setIsInitialState] = useState(true)
  const [nickname, setNickname] = useState('')
  const [characterDetails, setCharacterDetails] = useState<CharacterDetails>(
    {} as CharacterDetails
  )
  const [characterDetailProducts, setCharacterDetailProducts] = useState([])
  const [nowLoading, setNowLoading] = useState(false)

  const changeNickname = (e: any) => {
    setNickname(e.target.value)
  }

  const clickCheckButton = () => {
    const baseUrl = 'https://gss2022-stg.herokuapp.com/characters'
    const apiUrl = `${baseUrl}?nickname=${nickname}`

    setNowLoading(true)

    axios
      .get(apiUrl)
      .then((response) => {
        setCharacterDetails(response.data)
        setCharacterDetailProducts(response.data.products)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setNowLoading(false)
        // setIsInitialState(false)
      })
  }

  return (
    <div className="bg-white text-black">
      <title>うさぎさんチーム - 幻水総選挙2022</title>
      <div className={'right'}>
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
            <li>うさぎさんチーム</li>
          </ul>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white text-black">
            <div className="hero">
              <div className="hero-content text-center w-full">
                <div className="pb-0 w-full">
                  <div className="max-w-md">
                    <h1 className="text-2xl font-bold pt-8 pb-8 underline font-zen-old-mincho">
                      うさぎさんチーム
                    </h1>

                    <>
                      <div className="pb-8">
                        <div className="text-base">
                          <input
                            id="screen_name"
                            type="text"
                            onChange={changeNickname}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                clickCheckButton()
                              }
                            }}
                            placeholder="2主とか軍曹とか"
                            className="input input-bordered input-accent w-full max-w-full bg-white text-black"
                            value={nickname}
                          />

                          <button
                            id="check_button"
                            type="submit"
                            onClick={clickCheckButton}
                            className="mt-4 w-full btn btn-active btn-accent"
                            disabled={nowLoading}
                          >
                            キャラ情報を確認する
                          </button>
                        </div>
                      </div>

                      <div className="pb-0">
                        {false ? null : (
                          <>
                            {nowLoading ? (
                              <Image
                                src="/images/spinner.gif"
                                alt="幻水総選挙スピナー"
                                width="47"
                                height="47"
                              />
                            ) : (
                              <>
                                <h2 className="text-xl font-bold pb-2">
                                  ニックネーム
                                </h2>
                                <p>{characterDetails.nickname}</p>
                                <div className="my-8" />

                                <h2 className="text-xl font-bold pb-2">
                                  キャラ名
                                </h2>
                                <p>{characterDetails.character}</p>
                                <div className="my-8" />

                                <h2 className="text-xl font-bold pb-2">
                                  作品名
                                </h2>
                                {characterDetailProducts.map((product) => (
                                  <p className="my-2" key={product}>
                                    {product}
                                  </p>
                                ))}
                              </>
                            )}
                          </>
                        )}
                      </div>
                    </>
                  </div>
                </div>
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

export default Usagisan
