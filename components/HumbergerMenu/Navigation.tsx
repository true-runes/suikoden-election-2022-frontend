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
        <div className="text-lg">
          <Link href="/how-to-vote">📝 投票方法</Link>
        </div>
        <div className="text-lg">
          <Link href="/kikaku">💡 企画</Link>
        </div>
        <div className="text-lg">
          <Link href="/faq">❓ よくある質問</Link>
        </div>
        <PreviousWebsites />
      </Menu>
    </div>
  )
}

export default Navigation
