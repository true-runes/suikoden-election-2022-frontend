import type { NextPage } from 'next'
import ExternalLink from '@/components/svg/ExternalLink'

export const RankingTableAndTweetSummary: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center w-full">
          <div className="pb-0 w-full">
            <div className="card bg-white shadow-2xl">
              <div className="items-center card-body bg-white text-black">
                <h2 className="card-title text-2xl">結果</h2>

                <div className="my-1" />

                <div className="text-left">
                  <p className="text-center">
                    <a
                      href="https://drive.google.com/file/d/1zmmWdC69cwNLT3cEDT3D2vdgszhkE1zd/view"
                      className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
                      target="_blank"
                      rel="noreferrer"
                    >
                      順位表 (PDF)
                    </a>
                    <span className="pl-1">
                      <ExternalLink />
                    </span>
                  </p>
                  <div className="mb-4" />
                  <p>
                    <a
                      href="https://min.togetter.com/oMpk1RZ"
                      className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
                      target="_blank"
                      rel="noreferrer"
                    >
                      第一部 開票ツイート まとめ (min.t)
                    </a>
                    <span className="pl-1">
                      <ExternalLink />
                    </span>
                  </p>
                  <div className="mb-2" />
                  <p>
                    <a
                      href="https://min.togetter.com/OG4JD89"
                      className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
                      target="_blank"
                      rel="noreferrer"
                    >
                      第二部 開票ツイート まとめ (min.t)
                    </a>
                    <span className="pl-1">
                      <ExternalLink />
                    </span>
                  </p>
                </div>

                <div className="my-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
