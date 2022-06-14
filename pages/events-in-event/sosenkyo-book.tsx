import type { NextPage } from 'next'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import { NavBar } from '@/components/common/NavBar'
import { SiteFooter } from '@/components/common/SiteFooter'

import { WhatIsSosenkyoBook } from '@/components/events-in-event/sosenkyo-book/WhatIsSosenkyoBook'
import { Publication } from '@/components/events-in-event/sosenkyo-book/Publication'
import { Summary } from '@/components/events-in-event/sosenkyo-book/Summary'
import { OutlineOfApplication } from '@/components/events-in-event/sosenkyo-book/OutlineOfApplication'
import { DetailsDataSize } from '@/components/events-in-event/sosenkyo-book/DetailsDataSize'
import { DetailsResolution } from '@/components/events-in-event/sosenkyo-book/DetailsResolution'
import { DetailsColorMode } from '@/components/events-in-event/sosenkyo-book/DetailsColorMode'
import { DetailsSaveFormat } from '@/components/events-in-event/sosenkyo-book/DetailsSaveFormat'
import { DetailsFileName } from '@/components/events-in-event/sosenkyo-book/DetailsFileName'
import { Deadline } from '@/components/events-in-event/sosenkyo-book/Deadline'
import { SendFileMethod } from '@/components/events-in-event/sosenkyo-book/SendFileMethod'
import { HowToAttend } from '@/components/events-in-event/sosenkyo-book/HowToAttend'
import { Attention } from '@/components/events-in-event/sosenkyo-book/Attention'
import { AboutPreviousIllustrations } from '@/components/events-in-event/sosenkyo-book/AboutPreviousIllustrations'
import { Faq } from '@/components/events-in-event/sosenkyo-book/Faq'
import { Contacts } from '@/components/events-in-event/sosenkyo-book/Contacts'

const SosenkyoBook: NextPage = () => {
  const commonTranslation = useTranslation('common')
  const { t } = useTranslation('sosenkyo_book')

  return (
    <div className="bg-white text-black">
      <title>{`${commonTranslation.t('幻水総選挙本')} - ${commonTranslation.t(
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
              <Link href="/">{commonTranslation.t('幻水総選挙2022')}</Link>
            </li>
            <li>
              <Link href="/events-in-event">
                {commonTranslation.t('総選挙内企画')}
              </Link>
            </li>
            <li>{commonTranslation.t('幻水総選挙本')}</li>
          </ul>
        </div>

        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
                {commonTranslation.t('幻水総選挙本')}
              </h1>

              <WhatIsSosenkyoBook />
              <div className="divider" />

              <Publication />
              <div className="divider" />

              <Summary />
              <div className="divider" />

              <OutlineOfApplication />
              <div className="divider" />

              <DetailsDataSize />
              <div className="divider" />

              <DetailsResolution />
              <div className="divider" />

              <DetailsColorMode />
              <div className="divider" />

              <DetailsSaveFormat />
              <div className="divider" />

              <DetailsFileName />
              <div className="divider" />

              <Deadline />
              <div className="divider" />

              <SendFileMethod />
              <div className="divider" />

              <HowToAttend />
              <div className="divider" />

              <Attention />
              <div className="divider" />

              <AboutPreviousIllustrations />
              <div className="divider" />

              <Faq />
              <div className="divider" />

              <Contacts />
            </div>
          </div>
        </div>

        <div className="divider" />
        <SiteFooter />
      </main>
    </div>
  )
}

export default SosenkyoBook
