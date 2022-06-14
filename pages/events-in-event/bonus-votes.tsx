import type { NextPage } from 'next'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import { NavBar } from '@/components/common/NavBar'
import { SiteFooter } from '@/components/common/SiteFooter'

import { WhatIsBonusVotes } from '@/components/events-in-event/bonus-votes/WhatIsBonusVotes'
import { CountedDivisions } from '@/components/events-in-event/bonus-votes/CountedDivisions'
import { CountedConditions } from '@/components/events-in-event/bonus-votes/CountedConditions'
import { Examples } from '@/components/events-in-event/bonus-votes/Examples'

const BonusVotes: NextPage = () => {
  const commonTranslation = useTranslation('common')

  return (
    <div className="bg-white text-black">
      <title>{`${commonTranslation.t('ボーナス票')} - ${commonTranslation.t(
        '幻水総選挙2022'
      )}`}</title>
      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <main id="page-wrap">
        <NavBar />

        <div className="text-base bg-gray-700 text-white breadcrumbs pl-6 pb-2 sticky top-16 z-50">
          <ul>
            <li>
              <Link href="/" passHref>
                {commonTranslation.t('ホーム')}
              </Link>
            </li>
            <li>
              <Link href="/events-in-event" passHref>
                {commonTranslation.t('総選挙内企画')}
              </Link>
            </li>
            <li>{commonTranslation.t('ボーナス票')}</li>
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
