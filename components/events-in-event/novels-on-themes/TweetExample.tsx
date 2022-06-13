import type { NextPage } from 'next'
import Image from 'next/image'
// import useTranslation from 'next-translate/useTranslation'

export const TweetExample: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">ツイート例</h2>
      <div className="text-base text-center pb-4">
        <Image
          src="/images/novels_on_theme_tweet_sample.png"
          alt="お題小説ツイート例"
          width={1168}
          height={1318}
        />
      </div>
    </>
  )
}
