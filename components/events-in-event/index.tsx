import type { NextPage } from 'next'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export const EventsInEventIndex: NextPage = () => {
  const commonTranslation = useTranslation('common')
  const { t } = useTranslation('events_in_event')

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-4 underline font-zen-old-mincho">
              {commonTranslation.t('総選挙内企画')}
            </h1>

            <div>
              <p className="pb-4 text-left">
                {t(
                  '今年も下記の企画を準備中です。詳細は各項目のリンク先に記載があります。'
                )}
              </p>
              <div className="text-base text-left pb-4">
                <ul className="list-decimal pl-6 pr-2">
                  <li className="pb-4">
                    <Link href="/events-in-event/election-campaign" passHref>
                      <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                        {commonTranslation.t('選挙運動')}
                      </span>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link
                      href="/events-in-event/illustrations-with-results"
                      passHref
                    >
                      <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                        {commonTranslation.t('開票イラスト')}
                      </span>
                    </Link>
                    <div className="pt-4 text-base">
                      <ul className="list-disc pl-6">
                        <li className="pb-2">
                          <Link href="/events-in-event/sosenkyo-book" passHref>
                            <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                              {commonTranslation.t('幻水総選挙本')}
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="pb-4">
                    <Link href="/events-in-event/novels-on-themes" passHref>
                      <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                        {commonTranslation.t('お題小説')}
                      </span>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link href="/events-in-event/oshi-serif" passHref>
                      <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                        {commonTranslation.t('推し台詞教えて！')}
                      </span>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link href="/events-in-event/op-cl-illustrations" passHref>
                      <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                        {commonTranslation.t(
                          'オープニングイラスト・クロージングイラスト'
                        )}
                      </span>
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link href="/events-in-event/bonus-votes" passHref>
                      <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                        {commonTranslation.t('ボーナス票')}
                      </span>
                    </Link>
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
