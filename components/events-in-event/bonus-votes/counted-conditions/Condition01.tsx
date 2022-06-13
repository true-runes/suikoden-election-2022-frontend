import type { NextPage } from 'next'
import Link from 'next/link'

export const Condition01: NextPage = () => {
  return (
    <>
      <div className="pb-4">
        <h3 className="text-lg text-center">
          <div className="pb-4">
            <p className="pb-2">【条件①】</p>
            <span className="text-red-500">開票イラスト</span>
            応募があるキャラ
          </div>
        </h3>
        <div className="text-base text-left pb-4">
          <ul className="list-disc pl-6 pr-2">
            <li className="pb-2">
              ボーナス票「<span className="text-red-500">+1票</span>」
            </li>
            <li className="pb-2">
              開票イラストの詳細は{' '}
              <Link href="/events-in-event/illustrations-with-results" passHref>
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
