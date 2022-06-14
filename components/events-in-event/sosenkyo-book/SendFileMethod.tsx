import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const SendFileMethod: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">送信方法詳細</h2>
      <div className="pb-4 text-base">以下の ① と ② の作業をお願いします。</div>
      <div className="pb-4">
        <h3 className="text-lg text-center">
          <div className="underline underline-offset-4 pb-4">
            ① 印刷用データファイルを作成して送信
          </div>
          <div className="text-base text-left pb-4">
            <ul className="list-disc pl-6 pr-2">
              <li className="pb-2">
                「
                <a
                  href="https://www.dropbox.com/request/OlqEwtVSahDfH0FhIQSg"
                  target="_blank"
                  rel="noreferrer"
                  className="link link-hover underline-offset-4"
                >
                  <span className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                    印刷用データ送信フォーム
                  </span>
                </a>
                」よりお送りいただくか、ギガファイル便などのファイル転送サービスをお使いください。
              </li>
              <li className="pb-2">
                DMで画像ファイルを直接お受けすることはできません（劣化の原因となるため）。
              </li>
            </ul>
          </div>
        </h3>
      </div>
      <div className="pb-4">
        <h3 className="text-lg text-center pb-4">
          <span className="underline underline-offset-4">
            ② 参加表明フォームを送信
          </span>
        </h3>
        <div className="text-left">
          <ul className="list-disc pl-6 pr-2">
            <li className="pb-2">
              <a
                href="https://ssl.form-mailer.jp/fms/7d721d31746603"
                target="_blank"
                rel="noreferrer"
                className="link link-hover underline-offset-4"
              >
                <span className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                  こちらのフォーム
                </span>
              </a>
              より参加表明をお願いします。
            </li>
            <li className="pb-2">
              イラストを複数回に分けて送る場合、参加表明は1回のみで大丈夫です。
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
