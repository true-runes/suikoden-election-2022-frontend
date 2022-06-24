import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

export const HowToVote: NextPage = () => {
  const { t } = useTranslation('votes_how_to_vote')

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
              {t('投票方法')}
            </h1>

            <div>
              <p className="text-base text-left pb-4">
                {t('以下の2つのうち、いずれかの方法での投票をお願いします。')}
              </p>

              <h2 className="text-xl font-bold pb-4">
                {t('方法1: ツイート投票')}
              </h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    {t(
                      '指定のハッシュタグをつけて、ツイートで投票してください。'
                    )}
                  </li>
                  <li className="pb-2">
                    {t(
                      'タグ名や具体的なツイート内容は各部門の説明をご参照ください。'
                    )}
                  </li>
                </ul>
              </div>

              <h2 className="text-xl font-bold pb-4">{t('方法2: DM投票')}</h2>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    {t(
                      '非公開アカウント（鍵付き）の方や、鍵を開けたり閉めたりする方は、主催宛DMで投票してください。'
                    )}
                  </li>
                  <li className="pb-2">
                    {t('公開アカウントの方もDM投票が可能です。')}
                  </li>
                </ul>
              </div>
              <h1 className="text-lg font-bold pb-4">
                {t('※注_投票時だけ公開アカウントにしたい場合')}
              </h1>
              <p className="text-left pb-4">
                {t(
                  '「普段は非公開だけど、投票の時だけ公開アカウントにして投票したい」という方は、下記の手順で投票をお願いします。'
                )}
              </p>
              <div className="text-base text-left pb-4">
                <ul className="list-decimal pl-6 pr-2">
                  <li className="pb-2">
                    {t('投票前にアカウントを公開状態にする。')}
                  </li>
                  <li className="pb-2">
                    {t(
                      'ツイート投票後、専用ページで「投票チェック」をする（チェック方法は後日ご案内します）。'
                    )}
                  </li>
                  <li className="pb-2">
                    {t('2022/7/3（日）23:59まで公開アカウントのままにする。')}
                  </li>
                </ul>
              </div>
              <p className="text-base text-left">
                {t(
                  '※集計漏れを防ぐため、途中で鍵をかける可能性がある方はDM投票を推奨します。'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
