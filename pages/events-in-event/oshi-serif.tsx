import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import NavBar from '@/components/common/NavBar'
import SiteFooter from '@/components/common/SiteFooter'

import { useLocale } from '@/hooks/useLocale'
import { WhatIsOshiSerif } from '@/components/events-in-event/oshi-serif/WhatIsNovelsOnThemes'
import { Details } from '@/components/events-in-event/oshi-serif/Details'
import { Deadline } from '@/components/events-in-event/oshi-serif/Deadline'
import { HowToTweet } from '@/components/events-in-event/oshi-serif/HowToTweet'
import { TweetExample } from '@/components/events-in-event/oshi-serif/TweetExample'
import { Acceptance } from '@/components/events-in-event/oshi-serif/Acceptance'
import { ForPrivateAccount } from '@/components/events-in-event/oshi-serif/ForPrivateAccount'

const OshiSerif: NextPage = () => {
  const { t } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`${t.PAGE_TITLE_OSHI_SERIF} - ${t.WEBSITE_TITLE}`}</title>
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
            <li>{t.PAGE_TITLE_OSHI_SERIF}</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
                {t.PAGE_TITLE_OSHI_SERIF}
              </h1>

              <WhatIsOshiSerif />
              <div className="divider" />

              <Details />
              <div className="divider" />

              <Deadline />
              <div className="divider" />

              <HowToTweet />
              <div className="divider" />

              <TweetExample />
              <div className="divider" />

              <Acceptance />
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

export default OshiSerif
