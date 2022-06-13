import type { NextPage } from 'next'
import Link from 'next/link'

export const Condition03: NextPage = () => {
  return (
    <>
      <div className="pb-4">
        <h3 className="text-lg text-center">
          <div className="pb-4">
            <p className="pb-2">【条件③】</p>
            <span className="text-red-500">推し台詞</span>
            応募があるキャラ
          </div>
        </h3>
        <div className="text-base text-left pb-4">
          <ul className="list-disc pl-6 pr-2">
            <li className="pb-2">
              ボーナス票「<span className="text-red-500">+1票</span>」
            </li>
            <li className="pb-2">集計時に公開されているツイートが対象です。</li>
            <li className="pb-2">
              推し台詞の詳細は{' '}
              <Link href="/events-in-event/oshi-serif" passHref>
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
