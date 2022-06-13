import type { NextPage } from 'next'
import Link from 'next/link'

export const ForPrivateAccount: NextPage = () => {
  return (
    <>
      <h3 className="text-xl font-bold pb-4">非公開アカウントの方へ</h3>
      <div className="text-base text-left pb-4">
        非公開アカウントの方は、主催宛DMでお送り下さい。
        <br />
        幻水総選挙のサブアカウント（@sub_gensosenkyo）から、キャラ名と推し台詞をツイートします。
        <br />
        これにより、応募した台詞が{' '}
        <Link href="/events-in-event/bonus-votes" passHref>
          <span className="link link-hover underline underline-offset-4 text-blue-500 hover:text-blue-900 pr-1">
            ボーナス票
          </span>
        </Link>
        の対象となります。
      </div>
    </>
  )
}
