import type { NextPage } from 'next'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export const LastYearOpIllustration: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">昨年のOPイラスト</h2>
      <div className="text-base">
        <TwitterTweetEmbed
          placeholder={'読み込み中…'}
          tweetId="1403321117125775360"
          options={{ id: 'gensosenkyo', lang: 'ja' }}
        />
      </div>
    </>
  )
}
