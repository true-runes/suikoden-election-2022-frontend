import type { NextPage } from 'next'
import { useLocale } from '@/hooks/useLocale'

const WhatIsGensosenkyo: NextPage = () => {
  const { locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
              {locale === 'ja'
                ? '幻水総選挙って何？'
                : 'What is the "Gensosenkyo" ?'}
            </h1>

            <div>
              <div className="text-base text-left">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    {locale === 'ja'
                      ? '好きな幻水キャラに投票する、非公式のTwitterイベントです。'
                      : "It's an unofficial event held on Twitter where you vote for your favorite Suikoden characters."}
                  </li>
                  <li className="pb-2">
                    {locale === 'ja'
                      ? '有志によるファン企画であり、既存の企業様、関係者様等とは一切関係ありません。'
                      : 'This is a volunteer fan-run project and is in no way affiliated with any existing companies.'}
                  </li>
                  <li className="pb-2">
                    {locale === 'ja'
                      ? '幻水総選挙が「幻水が好き！」「推しが好き！」という思いを発信する場のひとつになりましたら幸いです。'
                      : 'We hope the Suikoden General Election is one of the places where you can express thoughts of "I love Suikoden!" and "I love my fave!"'}
                  </li>
                  <li className="pb-2">
                    {locale === 'ja'
                      ? '幻水ファンが盛り上がれるお祭りのようなイベントを目指して頑張りますので、どうぞよろしくお願い致します。'
                      : 'We will work hard to make this an exciting festive event for Suikoden fans, and we look forward to working with you.'}
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

export default WhatIsGensosenkyo
