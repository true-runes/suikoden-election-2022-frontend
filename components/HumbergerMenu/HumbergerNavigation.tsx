import { push as Menu } from 'react-burger-menu'
import Link from 'next/link'
import PreviousWebsites from './PreviousWebsites'

const Navigation = () => {
  return (
    <div id="outer-container">
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
        <div className="grid grid-cols-1 divide-y divide-current font-zen-old-mincho">
          <div className="text-2xl py-4">
            <Link href="/">幻水総選挙2022</Link>
          </div>
          <div className="text-lg py-4">開催概要</div>
          <div className="text-lg py-4">総選挙内企画</div>
          <div className="text-lg py-4">よくあるご質問（準備中）</div>
          <div className="text-lg">
            <PreviousWebsites />
          </div>
          <div />
        </div>
      </Menu>
    </div>
  )
}

export default Navigation
