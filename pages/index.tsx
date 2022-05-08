import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import type { NextPage } from 'next'
import Image from 'next/image'

import HumbergerMenu from '../components/HumbergerMenu'
import KaishiNichizi from '../components/KaishiNichizi'
import OshiSerif from '../components/OshiSerif'
import SenkyoUndou from '../components/SenkyoUndou'
import KaihyoIllustStatus from '../components/KaihyoIllustStatus'
import TouhyouCheck from '../components/TouhyouCheck'
import SiteFooter from '../components/SiteFooter'

const nowSecond = () => {
  const time = new Date()
  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()

  return second
}

const Home: NextPage = () => {
  // TODO: "now" ではなく、開催日からの差分を出し、減らしていく
  const [now, setNow] = useState(new Date())

  useEffect(
    function () {
      const intervalId = setInterval(function () {
        setNow(new Date())
      }, 1000)

      return function () {
        clearInterval(intervalId)
      }
    },

    [now]
  )

  return (
    // TODO: tailwind の container でくくる
    <div id="outer-container">
      {/* TODO: 環境によってテキストを変える（「開発環境」であることを明示する） */}
      <title>ホーム - 幻水総選挙2022</title>

      <div className={'right'}>
        <HumbergerMenu />
      </div>

      <main id="page-wrap">
        <div className="navbar bg-neutral text-neutral-content">
          <div className="normal-case text-xl" style={{ paddingLeft: '1em' }}>
            <Link href="/">幻水総選挙2022</Link>
          </div>
        </div>

        {/* TODO: 385KB あるので Now Loading を入れた方がいい */}
        <Image
          src="/gss2022_top.jpg"
          alt="幻水総選挙2022"
          width={3180}
          height={2044}
        />

        {/* <div className="hero bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <span className="text-xl">投票開始まであと</span>
              <br />
              <br />
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <StyledNowDate now={now} />
                  </span>
                  日
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <StyledNowHour now={now} />
                  </span>
                  時
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <StyledNowMinute now={now} />
                  </span>
                  分
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <StyledNowSecond now={now} />
                  </span>
                  秒
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="divider" />
        <KaihyoIllustStatus />

        <div className="divider" />
        <KaishiNichizi />

        <div className="divider" />
        <OshiSerif />

        <div className="divider" />
        <SenkyoUndou />

        <div className="divider" />
        <TouhyouCheck />
      </main>

      <SiteFooter />
    </div>
  )
}

export default Home

// const StyledNowSecond = styled.span`
//   --value: ${(props: { now: Date }) => props.now.getSeconds()};
// `

// const StyledNowMinute = styled.span`
//   --value: ${(props: { now: Date }) => props.now.getMinutes()};
// `

// const StyledNowHour = styled.span`
//   --value: ${(props: { now: Date }) => props.now.getHours()};
// `

// const StyledNowDate = styled.span`
//   --value: ${(props: { now: Date }) => props.now.getDate()};
// `
