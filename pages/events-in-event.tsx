import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '../components/HumbergerMenu/HumbergerNavigation'
import NavBar from '../components/NavBar'
import SiteFooter from '../components/SiteFooter'
import Kikaku from '../components/Kikaku'

const EventsInEvent: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <title>総選挙内企画 - 幻水総選挙2022</title>
      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <main id="page-wrap">
        <NavBar />

        <div className="text-base bg-gray-700 text-white breadcrumbs pl-6 pb-2">
          <ul>
            <li>
              <Link href="/">ホーム</Link>
            </li>
            <li>総選挙内企画</li>
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
