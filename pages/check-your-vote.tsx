import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import { NavBar } from '@/components/common/NavBar'
import { SiteFooter } from '@/components/common/SiteFooter'

import { Main } from '@/components/check-your-votes/Main'

const CheckYourVote: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <title>投票チェック - 幻水総選挙2022</title>
      <div className={'right'}>
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
            <li>投票チェック</li>
          </ul>
        </div>

        <div className="max-w-lg mx-auto">
          <Main />
        </div>

        <div className="divider" />
        <SiteFooter />
      </main>
    </div>
  )
}

export default CheckYourVote
