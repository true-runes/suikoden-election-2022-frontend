import { push as Menu } from 'react-burger-menu'
import Link from 'next/link'
import PreviousWebsites from './PreviousWebsites'
import { useLocale } from '../../hooks/useLocale'

const Navigation = () => {
  const { t, locale } = useLocale()

  return (
    <div id="outer-container">
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
        <div className="grid grid-cols-1 divide-y divide-current font-zen-old-mincho">
          <div className="text-2xl py-4">
            <Link href="/">{t.WEBSITE_TITLE}</Link>
          </div>
          <div className="text-lg">
            <div className="collapse collapse-arrow">
              <input type="checkbox" className="peer" />
              <div className="collapse-title pl-0">
                <div>{locale === 'ja' ? '総選挙内企画' : 'Projects'}</div>
              </div>
              <div className="collapse-content">
                <div className="py-2 link link-hover underline-offset-4">
                  <Link href="/events-in-event">
                    {locale === 'ja'
                      ? '総選挙内企画について'
                      : 'About Projects'}
                  </Link>
                </div>
                <div>
                  <ul className="list-decimal pl-8">
                    <li className="py-2">
                      <div className="text-base link link-hover underline-offset-4">
                        <Link href="/events-in-event/election-campaign">
                          {locale === 'ja' ? '選挙運動' : 'Campaigning'}
                        </Link>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="text-base">
                        {locale === 'ja'
                          ? '開票イラスト（準備中）'
                          : 'Voting illustrations (in progress)'}
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="text-base link link-hover underline-offset-4">
                        <Link href="/events-in-event/novels-on-themes">
                          {locale === 'ja'
                            ? 'お題小説'
                            : 'Themed short stories'}
                        </Link>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="text-base">
                        {locale === 'ja'
                          ? '推し台詞（準備中）'
                          : 'Fave quote (in progress)'}
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="text-base link link-hover underline-offset-4">
                        <Link href="/events-in-event/op-cl-illustrations">
                          {locale === 'ja'
                            ? 'OP&CLイラスト'
                            : 'Opening illustration / Closing illustration'}
                        </Link>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="text-base">
                        {locale === 'ja'
                          ? 'ボーナス票（準備中）'
                          : 'Bonus votes (in progress)'}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-lg">
            <PreviousWebsites />
          </div>
          <div className="py-4">
            <div className="text-lg">
              <Link href="/" locale={false} passHref>
                <span className="link link-hover underline-offset-4">
                  日本語
                </span>
              </Link>{' '}
              /{' '}
              <Link href="/en" locale={false} passHref>
                <span className="link link-hover underline-offset-4">
                  English
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Menu>
    </div>
  )
}

export default Navigation
