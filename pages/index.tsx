import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import type { NextPage } from 'next'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'

import NavBar from '@/components/common/NavBar'

import EventSummary from '@/components/common/EventSummary'
import HowToVote from '@/components/votes/HowToVote'
import VoteExamples from '@/components/votes/VoteExamples'
import { Divisions } from '@/components/votes/Divisions'
import Dendouiri from '@/components/votes/Dendouiri'
import Onegai from '@/components/votes/Onegai'
import EventsInEventIndex from '@/components/events-in-event/index'

import WhatIsGensosenkyo from '@/components/votes/WhatIsGensosenkyo'
import IllustratedBy from '@/components/common/IllustratedBy'
import SiteFooter from '@/components/common/SiteFooter'

import { useLocale } from '@/hooks/useLocale'

// const nowSecond = () => {
//   const time = new Date()
//   const hour = time.getHours()
//   const minute = time.getMinutes()
//   const second = time.getSeconds()

//   return second
// }

const Home: NextPage = () => {
  // TODO: "now" ではなく、開催日からの差分を出し、減らしていく
  // const [now, setNow] = useState(new Date())

  // TODO: 子コンポーネントへの影響にも注意する（コンポーネント切り出すべき）
  // useEffect(
  //   function () {
  //     const intervalId = setInterval(function () {
  //       setNow(new Date())
  //     }, 1000)

  //     return function () {
  //       clearInterval(intervalId)
  //     }
  //   },

  //   [now]
  // )

  const { t } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`${t.PAGE_TITLE_HOME} - ${t.WEBSITE_TITLE}`}</title>

      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <main id="page-wrap">
        <NavBar />

        <Image
          src="/images/gss2022_top.jpg"
          alt={t.TOP_IMAGE_ALT}
          width={3180}
          height={1788}
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

        <div className="pt-4">
          <WhatIsGensosenkyo />
        </div>

        <div className="divider" />
        <EventSummary />

        <div className="divider" />
        <Divisions />

        <div className="divider" />
        <HowToVote />

        <div className="divider" />
        <VoteExamples />

        <div className="divider" />
        <Dendouiri />

        <div className="divider" />
        <Onegai />

        <div className="divider" />
        <EventsInEventIndex />

        <div className="divider" />
        <IllustratedBy />

        <div className="divider" />
        <SiteFooter />
      </main>
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
