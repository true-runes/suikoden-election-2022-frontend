import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const ByDm: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <div className="pb-10">
        <h3 className="text-lg text-center pb-4">
          <span className="underline underline-offset-4">② 主催宛DMで送信</span>
        </h3>
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">
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
            宛DM でファイルの送信をお願いします。
          </li>
          <li className="pb-2">
            Twitterの仕様につき、画像が劣化する場合がありますのでご注意ください。
          </li>
        </ul>
      </div>
    </>
  )
}
