import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import { NavBar } from '@/components/common/NavBar'
import SiteFooter from '@/components/common/SiteFooter'

import { useLocale } from '@/hooks/useLocale'

import { WhatIsOpClIllustrations } from '@/components/events-in-event/op-cl-illustrations/WhatIsOpClIllustrations'
import { Details } from '@/components/events-in-event/op-cl-illustrations/Details'
import { Thanks } from '@/components/events-in-event/op-cl-illustrations/Thanks'
import { Deadline } from '@/components/events-in-event/op-cl-illustrations/Deadline'
import { LastYearOpIllustration } from '@/components/events-in-event/op-cl-illustrations/LastYearOpIllustration'
import { LastYearClIllustration } from '@/components/events-in-event/op-cl-illustrations/LastYearClIllustration'

const OpClIllustrations: NextPage = () => {
  const { t } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`${t.PAGE_TITLE_OP_CL_ILLUSTS} - ${t.WEBSITE_TITLE}`}</title>
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
            <li>{t.PAGE_TITLE_OP_CL_ILLUSTS}</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-4 underline font-zen-old-mincho">
                {t.PAGE_TITLE_OP_CL_ILLUSTS}
              </h1>

              <div className="pt-2 pb-6">
                <span className="text-xl font-bold text-red-500">
                  ※募集は終了しました
                </span>
              </div>

              <WhatIsOpClIllustrations />
              <div className="divider" />

              <Details />
              <div className="divider" />

              <Thanks />
              <div className="divider" />

              <Deadline />
              <div className="divider" />

              <LastYearOpIllustration />
              <div className="divider" />

              <LastYearClIllustration />
            </div>
          </div>
        </div>

        <div className="divider" />
        <SiteFooter />
      </main>
    </div>
  )
}

export default OpClIllustrations
