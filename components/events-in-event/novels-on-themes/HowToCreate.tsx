import type { NextPage } from 'next'

export const HowToCreate: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">小説の作成方法</h2>
      <div className="text-base text-center pb-4">
        <div className="pb-4">
          <h3 className="text-lg text-center">
            <div className="underline underline-offset-4 pb-4">
              ① 画像で作成
            </div>
            <div className="text-base text-left pb-4">
              <ul className="list-disc pl-6 pr-2">
                <li className="pb-2">
                  「文庫ページメーカー」、「新書ページメーカー」などに本文を流し込んで画像にしてください
                </li>
                <li className="pb-2">
                  詳しくは
                  <a
                    href="https://sscard.monokakitools.net/index.html"
                    target="_blank"
                    rel="noreferrer"
                    className="link link-hover underline-offset-4"
                  >
                    <span className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                      こちら
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </h3>
        </div>

        <div className="pb-4">
          <h3 className="text-lg text-center pb-4">
            <span className="underline underline-offset-4">
              ② 外部リンクを掲載
            </span>
          </h3>
          <div className="text-left">
            <ul className="list-disc pl-6 pr-2">
              <li className="pb-2">
                「pixiv」、「Privatter（ぷらいべったー）」などに小説を投稿し、ツイートに
                URL を載せて下さい。
              </li>
              <li className="pb-2">
                作品の公開範囲は「
                <span className="text-red-500">全体公開</span>
                」でお願いします。
              </li>
              <li className="pb-2">
                ぷらいべったーは「
                <span className="text-red-500">ログイン限定公開</span>
                」でも可能です。
              </li>
            </ul>
          </div>
        </div>

        <div className="pb-4">
          <h3 className="text-lg text-center pb-4">
            <span className="underline underline-offset-4">
              ③ ツイートに直接書く
            </span>
          </h3>
          <div className="text-left">
            <ul className="list-disc pl-6 pr-2">
              <li className="pb-2">ツイートに本文を直接お書きください。</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
