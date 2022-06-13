import type { NextPage } from 'next'

export const IntroductionToAll: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">作品のご紹介について</h2>
      <div className="text-base text-center pb-4">
        <div className="text-left">
          <ul className="list-disc pl-6 pr-2">
            <li className="pb-2">
              開票の翌日以降、開票ツイートに繋げる形で、小説の投稿ツイートをご紹介させていただきます。
            </li>
            <li className="pb-2">ご応募受理済みの公開ツイートが対象です。</li>
            <li className="pb-2">
              繋げてほしくない方は、投稿時に「開票後の紹介不要」と記載してください。
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
