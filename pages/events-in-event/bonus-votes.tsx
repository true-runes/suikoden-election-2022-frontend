import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import NavBar from '@/components/common/NavBar'
import SiteFooter from '@/components/common/SiteFooter'

import { useLocale } from '@/hooks/useLocale'

import { WhatIsBonusVotes } from '@/components/events-in-event/bonus-votes/WhatIsBonusVotes'
import { CountedDivisions } from '@/components/events-in-event/bonus-votes/CountedDivisions'
import { CountedConditions } from '@/components/events-in-event/bonus-votes/CountedConditions'
import { Examples } from '@/components/events-in-event/bonus-votes/Examples'

const BonusVotes: NextPage = () => {
  const { t } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`ボーナス票 - ${t.WEBSITE_TITLE}`}</title>
      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <main id="page-wrap">
        <NavBar />

        <div className="text-base bg-gray-700 text-white breadcrumbs pl-6 pb-2 sticky top-16 z-50">
          <ul>
            <li>
              <Link href="/" passHref>
                {t.PAGE_TITLE_HOME}
              </Link>
            </li>
            <li>
              <Link href="/events-in-event" passHref>
                {t.PAGE_TITLE_PROJECTS}
              </Link>
            </li>
            <li>ボーナス票</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
                ボーナス票
              </h1>

              <WhatIsBonusVotes />
              <div className="divider" />
              <CountedDivisions />
              <div className="divider" />
              <CountedConditions />
              <div className="divider" />
              <Examples />
            </div>
          </div>
        </div>

        <div className="divider" />
        <SiteFooter />
      </main>
    </div>
  )
}

export default BonusVotes
