import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const HowToTweet: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h3 className="text-xl font-bold pb-4">投稿方法</h3>
      <div className="text-base text-left pb-4">
        <div className="pb-2">
          <ul className="list-disc pl-6 pr-2">
            <li className="pb-2">応募キャラ（1名）</li>
            <li className="pb-2">お題</li>
            <li className="pb-2">
              ハッシュタグ「
              <a
                href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%99%E3%81%8A%E9%A1%8C%E5%B0%8F%E8%AA%AC&src=typed_query&f=live"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 text-blue-500 hover:text-blue-900"
              >
                #幻水総選挙お題小説
              </a>
              」
            </li>
          </ul>
        </div>
        を記載し、「 <span className="font-bold">@gensosenkyo</span>{' '}
        」を付けたツイートで投稿して下さい。
      </div>
    </>
  )
}
