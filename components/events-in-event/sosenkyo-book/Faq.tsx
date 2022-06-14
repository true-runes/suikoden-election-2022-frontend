import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

import { AboutSize } from '@/components/events-in-event/sosenkyo-book/faq/AboutSize'
import { AboutColorMode } from '@/components/events-in-event/sosenkyo-book/faq/AboutColorMode'
import { AboutSubmitSameTime } from '@/components/events-in-event/sosenkyo-book/faq/AboutSubmitSameTime'
import { AboutPublishingByMyself } from '@/components/events-in-event/sosenkyo-book/faq/AboutPublishingByMyself'

export const Faq: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">Q & A</h2>
      <div className="text-base text-left">
        <ul className="list-none pl-0 pr-2">
          <AboutSize />
          <AboutColorMode />
          <AboutSubmitSameTime />
          <AboutPublishingByMyself />
        </ul>
      </div>
    </>
  )
}
