import type { NextPage } from 'next'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export const LastYearClIllustration: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">昨年のCLイラスト</h2>
      <div className="text-base">
        <TwitterTweetEmbed
          placeholder={'読み込み中…'}
          tweetId="1406308364481548293"
          options={{ id: 'gensosenkyo', lang: 'ja' }}
        />
      </div>
    </>
  )
}
