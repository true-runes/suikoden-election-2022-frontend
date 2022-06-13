import type { NextPage } from 'next'
import Link from 'next/link'

export const ForPrivateAccount: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">非公開アカウントの方へ</h2>
      <div className="text-base text-center pb-0">
        <div className="text-left">
          <ul className="list-disc pl-6 pr-2">
            <li className="pb-2">
              非公開アカウントの方は、作品を主催宛DMでお送り頂きますと、幻水総選挙のサブアカウント
              (@sub_gensosenkyo) からツイートでご紹介します。
              <br />
              これにより、作品が{' '}
              <Link href="/events-in-event/bonus-votes" passHref>
                <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900 pr-1">
                  ボーナス票
                </span>
              </Link>
              の対象となります。
            </li>
            <li>小説の作成方法は ①画像で作成 ②外部リンクを掲載 のどちらか</li>
            <li>
              作者様のIDとお名前をツイートに掲載します（お名前のみでも可）
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
