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
