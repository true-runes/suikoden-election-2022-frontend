import type { NextPage } from 'next'
import Link from 'next/link'
import { useLocale } from '../hooks/useLocale'

const Kikaku: NextPage = () => {
  const { locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-4 underline font-zen-old-mincho">
              {locale === 'ja' ? '総選挙内企画' : 'Projects'}
            </h1>

            <div>
              <p className="pb-4 text-left">
                {locale === 'ja'
                  ? '今年も下記の企画を準備中です。詳細は各項目のリンク先に記載があります。'
                  : 'The following projects are being prepared for this year. Details for each item can be found in the links below.'}
              </p>
              <div className="text-base text-left pb-4">
                <ul className="list-decimal pl-6 pr-2">
                  <li className="pb-4">
                    <Link href="/events-in-event/election-campaign" passHref>
                      <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                        {locale === 'ja' ? '選挙運動' : 'Campaigning'}
                      </span>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link
                      href="/events-in-event/illustrations-with-results"
                      passHref
                    >
                      <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                        {locale === 'ja'
                          ? '開票イラスト'
                          : 'Voting illustrations'}
                      </span>
                    </Link>
                    <div className="pt-4 text-base">
                      <ul className="list-disc pl-6">
                        <li className="pb-2">
                          <Link href="/events-in-event/sosenkyo-book" passHref>
                            <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                              {locale === 'ja'
                                ? '幻水総選挙本'
                                : 'Sosenkyo Book'}
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="pb-4">
                    <Link href="/events-in-event/novels-on-themes" passHref>
                      <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                        {locale === 'ja' ? 'お題小説' : 'Themed short stories'}
                      </span>
                    </Link>
                  </li>
                  <li className="pb-4">
                    {locale === 'ja'
                      ? '推し台詞（準備中）'
                      : 'Fave quote (in progress)'}
                  </li>
                  <li className="pb-4">
                    <Link href="/events-in-event/op-cl-illustrations" passHref>
                      <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                        {locale === 'ja'
                          ? 'オープニングイラスト・クロージングイラスト'
                          : 'Opening illustration / Closing illustration'}
                      </span>
                    </Link>
                  </li>
                  <li className="pb-2">
                    {locale === 'ja'
                      ? 'ボーナス票（準備中）'
                      : 'Bonus votes (in progress)'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kikaku
