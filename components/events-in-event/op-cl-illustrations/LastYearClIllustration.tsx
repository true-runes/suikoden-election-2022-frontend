import type { NextPage } from 'next'
import { TwitterTweetEmbed } from 'react-twitter-embed'
// import useTranslation from 'next-translate/useTranslation'

export const LastYearClIllustration: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">昨年のCLイラスト</h2>
      <div className="text-base">
        <TwitterTweetEmbed
          tweetId="1406308364481548293"
          options={{ id: 'gensosenkyo', lang: 'ja' }}
        />
      </div>
    </>
  )
}
