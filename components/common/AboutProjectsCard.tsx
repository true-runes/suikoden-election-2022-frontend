import type { NextPage } from 'next'
import Link from 'next/link'

export const AboutProjectsCard: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center w-full">
          <div className="pb-0 w-full">
            <div className="card bg-white shadow-2xl">
              <div className="items-center card-body bg-white text-black">
                <h2 className="card-title text-2xl">総選挙内企画</h2>

                <div className="my-1" />

                <div>
                  <ul>
                    <li>
                      <Link href="/events-in-event" passHref>
                        <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                          選挙運動・作品募集など
                        </span>
                      </Link>
                    </li>
                    <div className="my-2" />
                    <li>
                      <Link
                        href="/events-in-event/result-illustration-applications"
                        passHref
                      >
                        <span className="mx-1 link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
                          開票イラスト応募状況
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
