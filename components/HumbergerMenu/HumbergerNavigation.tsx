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
          <div className="text-lg">
            <div className="collapse collapse-arrow">
              <input type="checkbox" className="peer" />
              <div className="collapse-title pl-0">
                <div>総選挙内企画</div>
              </div>
              <div className="collapse-content">
                <div className="py-2 link link-hover underline-offset-4">
                  <Link href="/events-in-event">総選挙内企画について</Link>
                </div>
                <div>
                  <ul className="list-decimal pl-8">
                    <li className="py-2">
                      <div className="text-base link link-hover underline-offset-4">
                        <Link href="/events-in-event/election-campaign">
                          選挙運動
                        </Link>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="text-base">開票イラスト（準備中）</div>
                    </li>
                    <li className="py-2">
                      <div className="text-base link link-hover underline-offset-4">
                        <Link href="/events-in-event/novels-on-themes">
                          お題小説
                        </Link>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="text-base">推し台詞（準備中）</div>
                    </li>
                    <li className="py-2">
                      <div className="text-base link link-hover underline-offset-4">
                        <Link href="/events-in-event/op-cl-illustrations">
                          OP&CLイラスト
                        </Link>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="text-base">ボーナス票（準備中）</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
