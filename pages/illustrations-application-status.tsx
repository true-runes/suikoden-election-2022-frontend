import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import { NavBar } from '@/components/common/NavBar'
import { SiteFooter } from '@/components/common/SiteFooter'
import { EventsInEventIndex } from '@/components/events-in-event/index'

import { ApplicationStatus } from '@/components/events-in-event/illustrations-with-results/ApplicationStatus'

const IllustrationsApplicationStatus: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <title>開票イラスト応募状況 - 幻水総選挙2022</title>
      <div className="right">
        <HumbergerNavigation />
      </div>

      <main id="page-wrap">
        <NavBar />

        <div className="text-base bg-gray-700 text-white breadcrumbs pl-6 pb-2 sticky top-16 z-50">
          <ul>
            <li>
              <Link href="/" passHref>
                ホーム
              </Link>
            </li>
            <li>開票イラスト応募状況</li>
          </ul>
        </div>

        <ApplicationStatus />

        <div className="divider" />
        <SiteFooter />
      </main>
    </div>
  )
}

export default IllustrationsApplicationStatus
