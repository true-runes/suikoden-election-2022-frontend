import type { NextPage } from 'next'
import { TwitterTweetEmbed } from 'react-twitter-embed'
// import useTranslation from 'next-translate/useTranslation'

export const LastYearOpIllustration: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">昨年のOPイラスト</h2>
      <div className="text-base">
        <TwitterTweetEmbed
          tweetId="1403321117125775360"
          options={{ id: 'gensosenkyo', lang: 'ja' }}
        />
      </div>
    </>
  )
}
