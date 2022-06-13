import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const DetailsContents: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">募集詳細 - イラスト内容</h2>
      <div className="text-base text-left pb-4">
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">応募したいキャラ単体のイラストを推奨します。</li>
          <li className="pb-2">
            カラー or モノクロ、デジタル or アナログは自由です。
          </li>
          <li className="pb-2">
            イラストに
            <span className="text-red-500 pl-1 pr-1">
              お名前（サイン）とTwitter ID
            </span>
            を記載してください。作者様の確認及び、無断利用防止のためです。
          </li>
          <li className="pb-2">
            お名前のみ、IDのみの記載でも構いませんが、なるべく両方の記載を推奨します。
          </li>
        </ul>
      </div>
    </>
  )
}
