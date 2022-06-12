import { push as Menu } from 'react-burger-menu'
import Link from 'next/link'
import PreviousWebsites from './PreviousWebsites'

const Navigation = () => {
  return (
    <div id="outer-container">
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
        <p className="text-2xl">
          <Link href="/" passHref>
            幻水総選挙2022
          </Link>
        </p>
        <div className="divide-neutral-50">
          <div className="divider"></div>
        </div>
        <Link href="/events-in-event" passHref>
          イベント内企画
        </Link>
        <PreviousWebsites />
      </Menu>
    </div>
  )
}

export default Navigation
