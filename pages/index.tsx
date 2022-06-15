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

import { WhatIsGensosenkyo } from '@/components/votes/WhatIsGensosenkyo'
import { IllustratedBy } from '@/components/common/IllustratedBy'
import { SiteFooter } from '@/components/common/SiteFooter'

import { useLocale } from '@/hooks/useLocale'
import { IllustrationsApplicationStatus } from '@/components/events-in-event/illustrations-with-results/IllustrationsApplicationStatus'

const Home: NextPage = () => {
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
        <EventSummary />

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
