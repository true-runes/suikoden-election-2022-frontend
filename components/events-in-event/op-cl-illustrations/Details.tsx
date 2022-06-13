import type { NextPage } from 'next'

export const Details: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">募集内容の詳細</h2>
      <div className="text-base text-left">
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">
            DMの送り先は{' '}
            <a
              href="https://twitter.com/gensosenkyo"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 text-blue-500 hover:text-blue-900"
            >
              @gensosenkyo
            </a>{' '}
            となります。
          </li>
          <li className="pb-2">
            <p>使用時にお名前と Twitter ID を掲載させて頂きます。</p>
            <p>（ID掲載を希望されない場合、お名前のみ記載致します）</p>
          </li>
          <li className="pb-2">イラストに文字を入れさせて頂きます。</li>
          <li className="pb-2">
            キャラや内容に指定はございません。ご自由にお描きください。
          </li>
          <li className="pb-2">
            <p>
              ご寄稿いただきましたイラストは、ご自身のSNSや同人誌への掲載などご自由にして頂いて構いません。
            </p>
            <p>
              （可能であれば、総選挙終了後の公開としていただけますと幸いです）
            </p>
          </li>
          <li className="pb-2">
            <p>来年以降の総選挙の宣伝に使わせていただく可能性がございます。</p>
            <p>（その場合は改めてご連絡します）</p>
          </li>
        </ul>
      </div>
    </>
  )
}
