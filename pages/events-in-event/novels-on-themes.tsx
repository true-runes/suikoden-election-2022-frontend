import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import { NavBar } from '@/components/common/NavBar'
import SiteFooter from '@/components/common/SiteFooter'

import { useLocale } from '@/hooks/useLocale'

import { WhatIsNovelsOnThemes } from '@/components/events-in-event/novels-on-themes/WhatIsNovelsOnThemes'
import { Themes } from '@/components/events-in-event/novels-on-themes/Themes'
import { NumberOfWords } from '@/components/events-in-event/novels-on-themes/NumberOfWords'
import { ApplicationLimitation } from '@/components/events-in-event/novels-on-themes/ApplicationLimitation'
import { Deadline } from '@/components/events-in-event/novels-on-themes/Deadline'
import { HowToTweet } from '@/components/events-in-event/novels-on-themes/HowToTweet'
import { TweetExample } from '@/components/events-in-event/novels-on-themes/TweetExample'
import { Acceptance } from '@/components/events-in-event/novels-on-themes/Acceptance'
import { HowToCreate } from '@/components/events-in-event/novels-on-themes/HowToCreate'
import { Attention } from '@/components/events-in-event/novels-on-themes/Attention'
import { IntroductionToAll } from '@/components/events-in-event/novels-on-themes/IntroductionToAll'
import { ForPrivateAccount } from '@/components/events-in-event/novels-on-themes/ForPrivateAccount'

const NovelsOnThemes: NextPage = () => {
  const { t } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`${t.PAGE_TITLE_NOVELS_ON_THEME} - ${t.WEBSITE_TITLE}`}</title>
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
            <li>{t.PAGE_TITLE_NOVELS_ON_THEME}</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
                {t.PAGE_TITLE_NOVELS_ON_THEME}
              </h1>

              <WhatIsNovelsOnThemes />
              <div className="divider" />

              <Themes />
              <div className="divider" />

              <NumberOfWords />
              <div className="divider" />

              <ApplicationLimitation />
              <div className="divider" />

              <Deadline />
              <div className="divider" />

              <HowToTweet />
              <div className="divider" />

              <TweetExample />
              <div className="divider" />

              <Acceptance />
              <div className="divider" />

              <HowToCreate />
              <div className="divider" />

              <Attention />
              <div className="divider" />

              <IntroductionToAll />
              <div className="divider" />

              <ForPrivateAccount />
            </div>
          </div>
        </div>

        <div className="divider" />
        <SiteFooter />
      </main>
    </div>
  )
}

export default NovelsOnThemes
