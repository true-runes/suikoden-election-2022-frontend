import React from 'react'
import Image from 'next/image'
import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'

import { NavBar } from '@/components/common/NavBar'

import { EventSummary } from '@/components/common/EventSummary'
import { HowToVote } from '@/components/votes/HowToVote'
import { VoteExamples } from '@/components/votes/VoteExamples'
import { Divisions } from '@/components/votes/Divisions'
import { HallOfFame } from '@/components/votes/HallOfFame'
import { Onegai } from '@/components/votes/Onegai'
import { EventsInEventIndex } from '@/components/events-in-event/index'

import { RankingTableAndTweetSummary } from '@/components/common/RankingTableAndTweetSummary'
import { VoteDeadLineCard } from '@/components/common/VoteDeadLineCard'
import { AboutProjectsCard } from '@/components/common/AboutProjectsCard'
import { AboutCheckVoteCard } from '@/components/common/AboutCheckVoteCard'
import { LinkToEnglishTranslationDocument } from '@/components/common/LinkToEnglishTranslationDocument'
import { WhatIsGensosenkyo } from '@/components/votes/WhatIsGensosenkyo'
import { IllustratedBy } from '@/components/common/IllustratedBy'
import { SiteFooter } from '@/components/common/SiteFooter'

import { useLocale } from '@/hooks/useLocale'
import useTranslation from 'next-translate/useTranslation'

const Home: NextPage = () => {
  dayjs.locale(ja)
  dayjs.extend(isSameOrAfter)

  const { t } = useLocale()
  const { lang } = useTranslation()

  const [isDuringVoteTerm, setIsDuringVoteTerm] = useState(false)

  useEffect(() => {
    const dayjsCurrentDateTime = dayjs(
      new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
    )
    const dayjsVoteStartDateTime = dayjs('2022-06-24 21:00:00')

    setIsDuringVoteTerm(
      dayjsCurrentDateTime.isSameOrAfter(dayjsVoteStartDateTime)
    )
  }, [])

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

        <div className="pt-4" />

        {lang === 'en' && (
          <>
            <LinkToEnglishTranslationDocument />
            <div className="divider" />
          </>
        )}

        <div className="max-w-lg mx-auto">
          <div id="ranking-table-and-tweet-summary" className="-mt-32 pt-32">
            <RankingTableAndTweetSummary />
          </div>

          <div id="vote-dead-line-card" className="-mt-32 pt-32">
            <VoteDeadLineCard />
          </div>

          {/* 投票開始とともに開く */}
          {isDuringVoteTerm && (
            <div id="about-check-vote-card" className="-mt-32 pt-32">
              <AboutCheckVoteCard />
            </div>
          )}

          <div id="about-projects-card" className="-mt-32 pt-32">
            <AboutProjectsCard />
          </div>
        </div>

        <div className="divider" />
        <div id="what-is-gensosenkyo" className="-mt-32 pt-32">
          <WhatIsGensosenkyo />
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
