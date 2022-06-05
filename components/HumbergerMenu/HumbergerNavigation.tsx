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
            <Link href="/" passHref>
              {t.WEBSITE_TITLE}
            </Link>
          </div>
          <div className="text-lg">
            <div className="collapse collapse-arrow">
              <input type="checkbox" className="peer" />
              <div className="collapse-title pl-0">
                <div>{locale === 'ja' ? '総選挙内企画' : 'Projects'}</div>
              </div>
              <div className="collapse-content">
                <div className="py-2">
                  <Link href="/events-in-event" passHref>
                    <span className="link link-hover underline-offset-4">
                      {locale === 'ja'
                        ? '総選挙内企画について'
                        : 'About Projects'}
                    </span>
                  </Link>
                </div>
                <div>
                  <ul className="list-decimal pl-8">
                    <li className="py-2">
                      <div className="text-base">
                        <Link
                          href="/events-in-event/election-campaign"
                          passHref
                        >
                          <span className="link link-hover underline-offset-4">
                            {locale === 'ja' ? '選挙運動' : 'Campaigning'}
                          </span>
                        </Link>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="text-base">
                        <Link
                          href="/events-in-event/illustrations-with-results"
                          passHref
                        >
                          <span className="link link-hover underline-offset-4">
                            {locale === 'ja'
                              ? '開票イラスト'
                              : 'Voting illustrations'}
                          </span>
                        </Link>
                      </div>
                      <div className="text-base">
                        <ul className="list-disc pl-6">
                          <li className="pt-4">
                            <Link
                              href="/events-in-event/sosenkyo-book"
                              passHref
                            >
                              <span className="link link-hover underline-offset-4">
                                {locale === 'ja'
                                  ? '幻水総選挙本'
                                  : 'Sosenkyo Book'}
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="text-base">
                        <Link href="/events-in-event/novels-on-themes" passHref>
                          <span className="link link-hover underline-offset-4">
                            {locale === 'ja'
                              ? 'お題小説'
                              : 'Themed short stories'}
                          </span>
                        </Link>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="text-base">
                        <Link href="/events-in-event/oshi-serif" passHref>
                          <span className="link link-hover underline-offset-4">
                            {locale === 'ja'
                              ? '推し台詞教えて！'
                              : 'Fave quote'}
                          </span>
                        </Link>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="text-base">
                        <Link
                          href="/events-in-event/op-cl-illustrations"
                          passHref
                        >
                          <span className="link link-hover underline-offset-4">
                            {locale === 'ja'
                              ? 'OP&CLイラスト'
                              : 'Opening illustration / Closing illustration'}
                          </span>
                        </Link>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="text-base">
                        <Link href="/events-in-event/bonus-votes" passHref>
                          <span className="link link-hover underline-offset-4">
                            {locale === 'ja' ? 'ボーナス票' : 'Bonus votes'}
                          </span>
                        </Link>
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
