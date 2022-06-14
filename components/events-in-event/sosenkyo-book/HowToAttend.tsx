import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const HowToAttend: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">参加の流れ</h2>
      <div className="pb-4">
        <div className="text-base text-left pb-4">
          <ul className="list-none pl-0 pr-2">
            <li className="pb-2">① WEB用データ、印刷用データを送信</li>
            <li className="pb-2">② 「参加表明フォーム」に入力、送信</li>
            <li className="pb-2">③ 主催宛DMで送信のご報告</li>
            <li className="pb-2">④ 主催よりデータ受領のご連絡</li>
          </ul>
        </div>
        <div className="text-base text-left">
          <ul className="list-none pl-0 pr-2">
            <li className="pb-2">
              ※印刷用に加筆修正をされたい場合、最初にWEB用データのみご提出いただき、印刷用データを後日お送りいただいても大丈夫です。
            </li>
            <li className="pb-2">
              ※一週間経っても受領連絡がない場合は、DMが届いていない可能性がございます。お手数ですが再度DMをお送り下さい。
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
