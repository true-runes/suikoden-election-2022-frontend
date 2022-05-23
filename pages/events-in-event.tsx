import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '../components/HumbergerMenu/HumbergerNavigation'
import NavBar from '../components/NavBar'
import SiteFooter from '../components/SiteFooter'
import Kikaku from '../components/Kikaku'

import { useLocale } from '../hooks/useLocale'

const EventsInEvent: NextPage = () => {
  const { t, locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`${t.PAGE_TITLE_PROJECTS} - ${t.WEBSITE_TITLE}`}</title>
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
            <li>{t.PAGE_TITLE_PROJECTS}</li>
          </ul>
        </div>

        <Kikaku />

        <div className="divider" />
        <SiteFooter />
      </main>
    </div>
  )
}

export default EventsInEvent
