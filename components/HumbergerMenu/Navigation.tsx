import { push as Menu } from 'react-burger-menu'
import Link from 'next/link'
import PreviousWebsites from './PreviousWebsites'

const Navigation = () => {
  return (
    <div id="outer-container">
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
        <p className="text-2xl">
          <Link href="/">幻水総選挙2022</Link>
        </p>
        <div className="divide-neutral-50">
          <div className="divider"></div>
        </div>
        <PreviousWebsites />
      </Menu>
    </div>
  )
}

export default Navigation
