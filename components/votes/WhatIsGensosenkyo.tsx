import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

export const WhatIsGensosenkyo: NextPage = () => {
  const { t } = useTranslation('votes_what_is_gensosenkyo')

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
              {t('幻水総選挙って何？')}
            </h1>

            <div>
              <div className="text-base text-left">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    {t(
                      '好きな幻水キャラに投票する、非公式のTwitterイベントです。'
                    )}
                  </li>
                  <li className="pb-2">
                    {t(
                      '有志によるファン企画であり、既存の企業様、関係者様等とは一切関係ありません。'
                    )}
                  </li>
                  <li className="pb-2">
                    {t(
                      '幻水総選挙が「幻水が好き！」「推しが好き！」という思いを発信する場のひとつになりましたら幸いです。'
                    )}
                  </li>
                  <li className="pb-2">
                    {t(
                      '幻水ファンが盛り上がれるお祭りのようなイベントを目指して頑張りますので、どうぞよろしくお願い致します。'
                    )}
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
