import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const DetailsHowToSendFileSummary: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">募集詳細 - 送信方法</h2>
      <div className="text-base text-left pb-4">
        <p className="pb-4">
          次のいずれかの方法で送信してください。詳細は後述します。
        </p>
        <ul className="list-none pl-0 pr-2">
          <li className="pb-2">① フォームで送信</li>
          <li className="pb-2">② 主催宛DMで送信</li>
          <li className="pb-2">③ ファイル転送サービスを利用して送信</li>
        </ul>
      </div>
    </>
  )
}
