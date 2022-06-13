import type { NextPage } from 'next'

export const ByFileTransferService: NextPage = () => {
  return (
    <>
      <div className="pb-10">
        <h3 className="text-lg text-center pb-4">
          <span className="underline underline-offset-4">
            ③ ファイル転送サービスで送信
          </span>
        </h3>
        <p className="pb-4">
          ギガファイル便やデータ便などのサービスを用いてデータをアップロードして
          ください。
        </p>
        <p>
          アップロード後に、
          <span className="text-red-500">
            ダウンロード用のURLを
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
            宛DMに送信してください。
          </span>
        </p>
      </div>
    </>
  )
}
