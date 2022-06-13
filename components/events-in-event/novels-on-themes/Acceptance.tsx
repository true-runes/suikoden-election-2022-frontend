import type { NextPage } from 'next'

export const Acceptance: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">応募の受理</h2>
      <div className="text-base text-left pb-4">
        投稿ツイートには、幻水総選挙のサブアカウント（@sub_gensosenkyo）から
        <span className="text-red-500">「いいね」を付けさせていただきます</span>
        。
        <br />
        これをもってご応募が受理されたものといたします。
        <br />
        ※投稿から一週間経っても「いいね」がない場合は、お手数ですがDMにてお問い合わせ下さい。
      </div>
    </>
  )
}
