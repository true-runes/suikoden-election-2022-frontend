import type { NextPage } from 'next'
import Link from 'next/link'

export const Themes: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">お題</h2>
      <div className="text-base text-left pb-4">
        <div className="pb-4">
          ① と ② は事前に募集したお題の中から選ばせていただきました。
          <br />
          事前募集で頂いたお題は{' '}
          <Link
            href="/events-in-event/novels-on-themes-application-results"
            passHref
          >
            <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900">
              こちら
            </span>
          </Link>
        </div>

        <ul className="list-none pl-0 pr-2">
          <li className="pb-0">
            <span className="font-bold text-red-500">① 「記念」</span>
          </li>
          <li className="pb-0">
            <span className="font-bold text-red-500">② 「そういえば」</span>
          </li>
          <li className="pb-0">
            <span className="font-bold text-red-500">③ フリー（内容自由）</span>
          </li>
        </ul>
      </div>
    </>
  )
}
