import type { NextPage } from 'next'
import Link from 'next/link'

export const ByForm: NextPage = () => {
  return (
    <>
      <div className="pb-10">
        <h3 className="text-lg text-center pb-4">
          <span className="underline underline-offset-4">① フォームで送信</span>
        </h3>
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">
            <Link
              href="https://www.dropbox.com/request/FQ1a3d6T8pSdISItXfeo"
              passHref
            >
              <a
                className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pr-1"
                target="_blank"
              >
                幻水総選挙2022 開票イラスト送信フォーム
              </a>
            </Link>
            を利用して送信してください。
          </li>
          <li className="pb-2">アカウント登録は不要です。</li>
          <li className="pb-2">
            フォームの仕様上、メールアドレス入力が必須となっておりますが、主催側にアドレスは伝わりません。
          </li>
          <li className="pb-2">
            入力したアドレスには送信完了のお知らせメールが届きます。
          </li>
          <li className="pb-2">
            ご自身のアドレスを入力したくない方は、幻水総選挙のアドレス (
            <span className="font-bold">gensosenkyo2015@gmail.com</span>)
            をご入力ください
          </li>
          <li className="pb-2">
            大変お手数ですが、
            <span className="text-red-500">
              フォーム送信後に
              <a
                href="https://twitter.com/gensosenkyo"
                target="_blank"
                rel="noreferrer"
                className="link link-hover underline-offset-4"
              >
                <span className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                  主催
                </span>
              </a>
              宛DM でキャラ名のご連絡をお願いします。
            </span>
          </li>
        </ul>
      </div>
    </>
  )
}
