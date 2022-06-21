import type { NextPage } from 'next'
import Link from 'next/link'

export const DeadLineList: NextPage = () => {
  return (
    <>
      <div>
        <div className="pb-4">
          <h2 className="text-xl font-bold pb-4">締切一覧</h2>
          <div className="text-center">
            <div>
              <p className="underline underline-offset-4">開票イラスト</p>
              <div className="my-2" />
              <p>2022/06/26（日）まで</p>
            </div>

            <div className="my-6" />

            <div>
              <p className="underline underline-offset-4">お題小説</p>
              <div className="my-2" />
              <p>2022/06/26（日）まで</p>
            </div>

            <div className="my-6" />

            <div>
              <p className="underline underline-offset-4">推し台詞</p>
              <div className="my-2" />
              <p>2022/06/26（日）まで</p>
            </div>

            <div className="my-6" />

            <div>
              <p className="underline underline-offset-4">ボーナス票</p>
              <div className="my-2" />
              <p>
                <Link href="/events-in-event/bonus-votes" passHref>
                  <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                    ボーナス票のページを参照
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <div className="my-6" />

          <div>
            <p className="underline underline-offset-4">選挙運動</p>
            <div className="my-2" />
            <p>
              <Link href="/events-in-event/bonus-votes" passHref>
                <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                  ボーナス票のページ（条件④）を参照
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
