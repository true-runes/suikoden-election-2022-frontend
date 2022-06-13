import type { NextPage } from 'next'
import Link from 'next/link'
// import useTranslation from 'next-translate/useTranslation'

export const Condition04: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <div className="pb-0">
        <h3 className="text-lg text-center">
          <div className="pb-4">
            <p className="pb-2">【条件④】</p> 「{' '}
            <span className="text-red-500">#幻水総選挙運動</span>{' '}
            」のツイートがあるキャラ
          </div>
        </h3>

        <div className="text-base text-left pb-0">
          <ul className="list-disc pl-6 pr-2">
            <li className="pb-2">
              ボーナス票「<span className="text-red-500">+2票</span>」
            </li>
            <li className="pb-2">
              6/26（日）23:59までのツイートがボーナス票に反映されます。
            </li>
            <li className="pb-2">集計時に公開されているツイートが対象です。</li>
            <li className="pb-2">キャラ名が判別できるツイートに限ります。</li>
            <li className="pb-2">
              #幻水総選挙運動の詳細は{' '}
              <Link href="/events-in-event/election-campaign" passHref>
                <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900 pr-1">
                  こちら
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
