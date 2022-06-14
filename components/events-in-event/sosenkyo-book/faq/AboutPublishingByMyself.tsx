import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const AboutPublishingByMyself: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <div className="py-2">
        <li className="pb-2">
          <div className="pb-2">
            Q.
            提出した印刷用データを同人誌に再録したり、Webで公開してもいいですか？
          </div>
          <div className="pb-2">
            A.
            通常の開票イラストと同様に、ご自身の作品は、SNSへの投稿や同人誌への掲載などをご自由にして頂いて構いません。
          </div>
        </li>
      </div>
    </>
  )
}
