import type { NextPage } from 'next'

export const LinkToResultIllustrationApplications: NextPage = () => {
  return (
    <>
      <div className="bg-white text-black">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
                開票イラスト応募状況
              </h1>
              <p className="text-base text-left">
                開票イラストの応募状況を
                <a
                  href="/events-in-event/result-illustration-applications"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mx-1 link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                    こちら
                  </span>
                </a>
                で公開しております。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
