import type { NextPage } from 'next'
import Link from 'next/link'

export const AboutCheckVoteCard: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center w-full">
          <div className="pb-0 w-full">
            <div className="card bg-white shadow-2xl">
              <div className="items-center card-body bg-white text-black">
                <h2 className="card-title text-2xl">投票チェック</h2>

                <div className="my-1" />

                <div>
                  <span>
                    <Link
                      href="/events-in-event/result-illustration-applications"
                      passHref
                    >
                      <span className="mx-1 link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                        投票チェックはこちら
                      </span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
