import type { NextPage } from 'next'
import Link from 'next/link'
import { useLocale } from '@/hooks/useLocale'
// import useTranslation from 'next-translate/useTranslation'

export const Others: NextPage = () => {
  const { locale } = useLocale()
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl text-center font-bold pb-4">その他</h2>
      <div className="text-base text-left pb-0">
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">
            複数作品に登場するキャラを両方描く、同じキャラを衣装違いで並べる、などは是非どうぞ。
          </li>
          <li className="pb-2">
            <p className="pb-2">
              「これで大丈夫？」と迷ってしまった場合は
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
              宛DM にてご質問ください。
            </p>
          </li>
          <li className="pb-2">
            「幻水総選挙本」への掲載をご希望の方は
            <Link href="/events-in-event/sosenkyo-book">
              <a className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                {locale === 'ja' ? '幻水総選挙本' : 'Sosenkyo book'}
              </a>
            </Link>
            のページをご覧ください。
          </li>
          <li className="pb-2">
            応募状況は
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
          </li>
        </ul>
      </div>
    </>
  )
}
