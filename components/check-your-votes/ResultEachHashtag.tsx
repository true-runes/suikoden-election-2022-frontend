import type { NextPage } from 'next'
import { TwitterTweetEmbed } from 'react-twitter-embed'

interface Props {
  tweetIds: string[]
}

export const ResultEachHashtag: NextPage<Props> = ({ tweetIds }) => {
  return (
    <>
      {tweetIds.map((item: string) => (
        <div key={item}>
          <TwitterTweetEmbed
            tweetId={item}
            options={{ id: 'gensosenkyo', lang: 'ja' }}
          />
        </div>
      ))}
    </>
  )
}
