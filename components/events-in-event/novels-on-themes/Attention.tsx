import type { NextPage } from 'next'

export const Attention: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">注意点</h2>
      <div className="text-base text-center pb-4">
        <div className="text-left">
          <ul className="list-disc pl-6 pr-2">
            <li className="pb-2">
              1ツイートに収まらない場合は、リプライ（返信）やスレッドで繋げて下さい。
            </li>
            <li className="pb-2">
              一番最初のツイートには指定のハッシュタグを付けて下さい。
            </li>
            <li className="pb-2">応募キャラ以外が登場しても構いません。</li>
            <li className="pb-2">主人公はお好きな名前をどうぞ。</li>
            <li className="pb-2">
              <span className="text-red-500">
                恋愛（カップリング）描写を含む場合は、 原作程度の表現
              </span>
              でお願いします。応募ツイートに必ず明記してください。
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
