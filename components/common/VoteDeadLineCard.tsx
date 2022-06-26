import type { NextPage } from 'next'

export const VoteDeadLineCard: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center w-full">
          <div className="pb-0 w-full">
            <div className="card bg-white shadow-2xl">
              <div className="items-center card-body bg-white text-black">
                <h2 className="card-title text-2xl">投票</h2>

                <div className="my-1" />

                <div className="text-left">
                  <p>
                    <a
                      href="#all-characters-division"
                      className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
                    >
                      ①オールキャラ部門
                    </a>
                  </p>
                  <div className="mb-1" />
                  <p>
                    <a
                      href="#unite-attacks-division"
                      className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
                    >
                      ②協力攻撃部門
                    </a>
                  </p>
                </div>

                <div className="my-1" />

                <p className="text-2xl text-red-500 mb-4">
                  投票期間は終了しました。
                </p>

                <div className="text-base">
                  <p className="text-black">2022年6月24日（金）21:00 から</p>
                  <p className="text-black">2022年6月26日（日）23:59 まで</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
