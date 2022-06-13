import type { NextPage } from 'next'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export const LastYearExamples: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">昨年の開票イラストの例</h2>
      <TwitterTweetEmbed
        tweetId="1406295785411551235"
        options={{ id: 'gensosenkyo', lang: 'ja' }}
      />
    </>
  )
}
