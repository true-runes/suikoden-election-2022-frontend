import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const Examples: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">ボーナス票の例</h2>
      <div className="text-base text-center pb-0">
        <div className="pb-4">
          <h3 className="text-lg text-center">
            <div className="underline underline-offset-4 pb-4">例①</div>
          </h3>
          <div className="text-base text-center pb-4">
            「坊ちゃん」の開票イラスト1枚、お題小説1作、推し台詞1つ
            <br />
            →坊ちゃんに「+3票」
          </div>
        </div>

        <div className="pb-4">
          <h3 className="text-lg text-center">
            <div className="underline underline-offset-4 pb-4">例②</div>
          </h3>
          <div className="text-base text-center pb-4">
            「2主」の開票イラストが10枚
            <br />
            →2主に「+1票」
          </div>
        </div>

        <div className="pb-4">
          <h3 className="text-lg text-center">
            <div className="underline underline-offset-4 pb-4">例③</div>
          </h3>
          <div className="text-base text-center pb-4">
            「テッド」の総選挙運動ツイートが1件
            <br />
            →「テッド」に「+2票」
          </div>
        </div>

        <div className="text-base text-left">
          ※誰が応募したか、応募が何件あるか…は関係なく、
          <span className="text-red-500">
            参加者様全体の「応募（ツイート）の有無」
          </span>
          で集計されます。
        </div>
      </div>
    </>
  )
}
