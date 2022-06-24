import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '@/components/humberger-menu/HumbergerNavigation'
import { NavBar } from '@/components/common/NavBar'
import { SiteFooter } from '@/components/common/SiteFooter'

import { Main } from '@/components/vote-to-unite-attacks/Main'

const VoteToUniteAttacks: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <title>「協力攻撃部門」投票ページ - 幻水総選挙2022</title>
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
            <li>「協力攻撃部門」投票ページ</li>
          </ul>
        </div>

        <Main />

        <div className="divider" />
        <SiteFooter />
      </main>
    </div>
  )
}

export default VoteToUniteAttacks
