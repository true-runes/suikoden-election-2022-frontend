import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

export const EventSummary: NextPage = () => {
  const { t, lang } = useTranslation('common_event_summary')

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-8 underline font-zen-old-mincho">
              {t('開催概要')}
            </h1>

            <div>
              <div className="pb-8">
                <h2 className="text-xl font-bold pb-4">{t('投票期間')}</h2>

                <p className="text-2xl text-red-500 mb-4">
                  投票期間は終了しました。
                </p>

                <div className="text-base">
                  <p>{t('2022年6月24日（金）21:00 から')}</p>
                  {lang === 'en' && <p>to</p>}
                  <p>{t('2022年6月26日（日）23:59 まで')}</p>
                </div>
              </div>

              <h2 className="text-xl font-bold pb-4">{t('開票日')}</h2>
              <div className="text-base">
                <div className="pb-4">
                  <p className="font-bold pb-2">{t('第一部')}</p>
                  <p>{t('2022年7月9日（土）19:00～（予定）')}</p>
                </div>

                <div className="pb-4">
                  <p className="font-bold pb-2">{t('第二部')}</p>
                  <p>{t('2022年7月16日（土）19:00～（予定）')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
