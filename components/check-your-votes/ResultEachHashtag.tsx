import type { NextPage } from 'next'
import { TwitterTweetEmbed } from 'react-twitter-embed'

interface Props {
  tweetIds: string[]
  title: string
}

export const ResultEachHashtag: NextPage<Props> = ({ tweetIds, title }) => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">{title}</h2>

      {tweetIds.length < 1 ? (
        <>
          <p>ツイートが見つかりませんでした。</p>
        </>
      ) : (
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
      )}
    </>
  )
}
