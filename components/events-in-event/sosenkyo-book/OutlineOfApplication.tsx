import type { NextPage } from 'next'
import Link from 'next/link'
// import useTranslation from 'next-translate/useTranslation'

export const OutlineOfApplication: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">募集概要</h2>
      <div className="text-base text-left pb-4">
        <div className="pb-4">
          幻水総選挙本への掲載をご希望の方は、
          <Link href="/events-in-event/illustrations-with-results" passHref>
            <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900 pr-1">
              通常の開票イラストの応募
            </span>
          </Link>
          に加え、
          <span className="text-red-500">以下の2点の送信</span>{' '}
          をお願い致します。詳細は後述します。
        </div>
        <ul className="list-none pl-0 pr-2">
          <li className="pb-2">① 印刷用データファイルを作成して送信</li>
          <li className="pb-2">② 参加表明フォームを送信</li>
        </ul>
      </div>
    </>
  )
}
