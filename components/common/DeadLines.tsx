import type { NextPage } from 'next'
import Link from 'next/link'

export const DeadLines: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-4 underline font-zen-old-mincho">
              締切一覧
            </h1>

            <div>
              <div className="pb-4">
                <div className="card w-96 bg-white shadow-xl">
                  <div className="items-center card-body bg-white text-black">
                    <h2 className="card-title">投票</h2>

                    <div className="my-1" />

                    <div className="text-left">
                      <p>①オールキャラ部門</p>
                      <div className="mb-1" />
                      <p>②協力攻撃部門</p>
                    </div>

                    <div className="my-1" />

                    <div className="text-base">
                      <p>2022年6月24日（金）21:00 から</p>
                      <p>2022年6月26日（日）23:59 まで</p>
                    </div>
                  </div>
                </div>

                <div className="my-6" />

                <div className="card w-96 bg-white shadow-xl">
                  <div className="items-center card-body bg-white text-black">
                    <h2 className="card-title">総選挙内企画</h2>

                    <div className="my-1" />

                    <div className="text-center">
                      <div>
                        <p className="underline underline-offset-4">
                          開票イラスト
                        </p>
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
                        <p className="underline underline-offset-4">
                          ボーナス票
                        </p>
                        <div className="my-2" />
                        <p>
                          <Link href="/events-in-event/bonus-votes" passHref>
                            <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                              ボーナス票のページを参照
                            </span>
                          </Link>
                        </p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
