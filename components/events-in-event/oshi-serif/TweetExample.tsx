import type { NextPage } from 'next'
import Image from 'next/image'
// import useTranslation from 'next-translate/useTranslation'

export const TweetExample: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">ツイート例</h2>
      <div className="pb-4">
        <Image
          src="/images/oshi_serif_sample.png"
          alt="推し台詞ツイート例"
          width={1170}
          height={540}
        />
      </div>
    </>
  )
}
