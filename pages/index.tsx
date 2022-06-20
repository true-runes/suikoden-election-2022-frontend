import React from 'react'
import Image from 'next/image'
import type { NextPage } from 'next'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'

import { NavBar } from '@/components/common/NavBar'

import { EventSummary } from '@/components/common/EventSummary'
import HowToVote from '@/components/votes/HowToVote'
import VoteExamples from '@/components/votes/VoteExamples'
import { Divisions } from '@/components/votes/Divisions'
import { HallOfFame } from '@/components/votes/HallOfFame'
import Onegai from '@/components/votes/Onegai'
import { EventsInEventIndex } from '@/components/events-in-event/index'

import { LinkToEnglishTranslationDocument } from '@/components/common/LinkToEnglishTranslationDocument'
import { WhatIsGensosenkyo } from '@/components/votes/WhatIsGensosenkyo'
import { IllustratedBy } from '@/components/common/IllustratedBy'
import { SiteFooter } from '@/components/common/SiteFooter'

import { useLocale } from '@/hooks/useLocale'
import useTranslation from 'next-translate/useTranslation'

const Home: NextPage = () => {
  const { t } = useLocale()
  const { lang } = useTranslation()

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

        {lang === 'en' && (
          <div className="pt-4">
            <LinkToEnglishTranslationDocument />
            <div className="divider" />
          </div>
        )}

        <div className="pt-4">
          <div id="what-is-gensosenkyo" className="-mt-32 pt-32">
            <WhatIsGensosenkyo />
          </div>
        </div>

        <div className="divider" />
        <div id="event-summary" className="-mt-32 pt-32">
          <EventSummary />
        </div>

        <div className="divider" />
        <div id="divisions" className="-mt-32 pt-32">
          <Divisions />
        </div>

        <div className="divider" />
        <div id="how-to-vote" className="-mt-32 pt-32">
          <HowToVote />
        </div>

        <div className="divider" />
        <div id="vote-examples" className="-mt-32 pt-32">
          <VoteExamples />
        </div>

        <div className="divider" />
        <div id="hall-of-fame" className="-mt-32 pt-32">
          <HallOfFame />
        </div>

        <div className="divider" />
        <div id="onegai" className="-mt-32 pt-32">
          <Onegai />
        </div>

        <div className="divider" />
        <div id="events-in-event-index" className="-mt-32 pt-32">
          <EventsInEventIndex />
        </div>

        <div className="divider" />
        <div id="illustrated-by" className="-mt-32 pt-32">
          <IllustratedBy />
        </div>

        <div className="divider" />
        <div id="site-footer" className="-mt-32 pt-32">
          <SiteFooter />
        </div>
      </main>
    </div>
  )
}

export default Home
