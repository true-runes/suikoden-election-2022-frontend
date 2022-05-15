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
          <div className="py-4">
            <PreviousWebsites />
          </div>
          {/* <div className="text-base py-4">
            <div>
              <svg
                className="w-5 h-5 text-blue-300 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{
                  display: 'inline-block',
                  verticalAlign: 'text-bottom',
                }}
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <span className="pl-1">@gensosenkyo</span>
            </div>
          </div> */}
        </div>
      </Menu>
    </div>
  )
}

export default Navigation
