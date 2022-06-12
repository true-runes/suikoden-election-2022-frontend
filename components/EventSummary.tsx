import type { NextPage } from 'next'
import { useLocale } from '@/hooks/useLocale'

const EventSummary: NextPage = () => {
  const { locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-8 underline font-zen-old-mincho">
              {locale === 'ja' ? '開催概要' : 'Event overview'}
            </h1>

            <div>
              <div className="pb-8">
                <h2 className="text-xl font-bold pb-4">
                  {locale === 'ja' ? '投票期間' : 'Voting period'}
                </h2>
                {locale === 'ja' ? (
                  <div className="text-base">
                    <p>2022年6月24日（金）21:00 から</p>
                    <p>2022年6月26日（日）23:59 まで</p>
                  </div>
                ) : (
                  <div className="text-base">
                    <p>2022 June 24 (Fri) 21:00 (JST)</p>
                    <p>to</p>
                    <p>2022 June 26 (Sun) 23:59 (JST)</p>
                  </div>
                )}
              </div>

              <h2 className="text-xl font-bold pb-4">
                {locale === 'ja' ? '開票日' : 'Voting results reveal days'}
              </h2>
              {locale === 'ja' ? (
                <div className="text-base">
                  <div className="pb-4">
                    <p className="font-bold pb-2">第一部</p>
                    <p>2022年7月9日（土）19:00～（予定）</p>
                  </div>

                  <div className="pb-4">
                    <p className="font-bold pb-2">第二部</p>
                    <p>2022年7月16日（土）19:00～（予定）</p>
                  </div>
                </div>
              ) : (
                <div className="text-base">
                  <div className="pb-4">
                    <p className="font-bold pb-2">First part</p>
                    <p>
                      2022 July 9 (Sat) from 19:00 JST (expected start time)
                    </p>
                  </div>

                  <div className="pb-4">
                    <p className="font-bold pb-2">Second part</p>
                    <p>
                      2022 July 16 (Sat) from 19:00 JST (expected start time)
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventSummary
