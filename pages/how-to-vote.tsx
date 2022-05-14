import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '../components/HumbergerMenu/Navigation'
import WhatIsGensosenkyo from '../components/WhatIsGensosenkyo'

const HowToVote: NextPage = () => {
  return (
    <div>
      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <title>投票方法 - 幻水総選挙2022</title>

      <main id="page-wrap">
        <div className="navbar bg-neutral text-neutral-content">
          <div className="normal-case text-xl pl-4">投票方法</div>
        </div>

        <div className="normal-case text-base breadcrumbs pl-6">
          <ul>
            <li>
              <Link href="/">幻水総選挙2022</Link>
            </li>
            <li>幻水総選挙って何？</li>
          </ul>
        </div>

        <WhatIsGensosenkyo />
      </main>
    </div>
  )
}

export default HowToVote
