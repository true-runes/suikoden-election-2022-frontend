import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import NavBar from '@/components/common/NavBar'
import SiteFooter from '@/components/common/SiteFooter'

import { useLocale } from '@/hooks/useLocale'

import { WhatIsIllustrationsWithResults } from '@/components/events-in-event/illustrations-with-results/WhatIsIllustrationsWithResults'
import { Deadline } from '@/components/events-in-event/illustrations-with-results/Deadline'
import { LastYearExamples } from '@/components/events-in-event/illustrations-with-results/LastYearExamples'
import { Summary } from '@/components/events-in-event/illustrations-with-results/Summary'
import { DetailsContents } from '@/components/events-in-event/illustrations-with-results/DetailsContents'
import { DetailsSize } from '@/components/events-in-event/illustrations-with-results/DetailsSize'
import { DetailsFileName } from '@/components/events-in-event/illustrations-with-results/DetailsFileName'
import { DetailsHowToSendFileSummary } from '@/components/events-in-event/illustrations-with-results/DetailsHowToSendFileSummary'
import { DetailsHowToSendFileByMethods } from '@/components/events-in-event/illustrations-with-results/DetailsHowToSendFileByMethods'
import { Faq } from '@/components/events-in-event/illustrations-with-results/Faq'
import { Others } from '@/components/events-in-event/illustrations-with-results/Others'

const IllustrationsWithResults: NextPage = () => {
  const { t } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`${t.PAGE_TITLE_ILLUSTRATIONS_WITH_RESULTS} - ${t.WEBSITE_TITLE}`}</title>
      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <main id="page-wrap">
        <NavBar />
        <div className="text-base bg-gray-700 text-white breadcrumbs pl-6 pb-2 sticky top-16 z-50">
          <ul>
            <li>
              <Link href="/">{t.PAGE_TITLE_HOME}</Link>
            </li>
            <li>
              <Link href="/events-in-event">{t.PAGE_TITLE_PROJECTS}</Link>
            </li>
            <li>{t.PAGE_TITLE_ILLUSTRATIONS_WITH_RESULTS}</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
                {t.PAGE_TITLE_ILLUSTRATIONS_WITH_RESULTS}
              </h1>

              <WhatIsIllustrationsWithResults />
              <div className="divider" />

              <Deadline />
              <div className="divider" />

              <LastYearExamples />
              <div className="divider" />

              <Summary />
              <div className="divider" />

              <DetailsContents />
              <div className="divider" />

              <DetailsSize />
              <div className="divider" />

              <DetailsFileName />
              <div className="divider" />

              <DetailsHowToSendFileSummary />
              <div className="divider" />

              <DetailsHowToSendFileByMethods />
              <div className="divider" />

              <Faq />
              <div className="divider" />

              <Others />
            </div>
          </div>
        </div>

        <div className="divider" />
        <SiteFooter />
      </main>
    </div>
  )
}

export default IllustrationsWithResults
