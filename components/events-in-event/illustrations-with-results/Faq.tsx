import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const Faq: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl text-center font-bold pb-4">Q & A</h2>
      <div className="text-base text-left pb-0">
        <ul className="list-none pl-0 pr-2">
          <div className="py-2">
            <li className="pb-2">
              <p className="pb-2">Q. 他のキャラを一緒に描いてもいいですか？</p>
              <p className="pb-2">
                A.
                応募キャラ単体のイラスト推奨ですが、他のキャラを入れても構いません。
                他のキャラを一緒に描く場合は
                <span className="text-red-500">応募キャラがメイン</span>
                となるようにお願いいたします。
              </p>
              <p>
                また恋愛（カップリング）描写を含む場合は、原作程度の表現でお願いします。
              </p>
            </li>
          </div>
          <div className="py-2">
            <li className="pb-2">
              <p className="pb-2">
                Q. 他のキャラを一緒に描く場合の具体例はありますか？
              </p>
              <div className="pb-2">
                A.
                以下のような過去の例がありますが、これ以外の描き方でも構いません。
                <ul className="list-disc pl-6 pr-2 pt-2">
                  <li className="pb-2">他のキャラを小さく描く</li>
                  <li className="pb-2">他のキャラを背景に描く</li>
                  <li className="pb-2">他のキャラを後ろ姿で描く</li>
                  <li className="pb-2">他のキャラの一部分（手など）を入れる</li>
                </ul>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </>
  )
}
