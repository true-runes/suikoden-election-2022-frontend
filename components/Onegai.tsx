import type { NextPage } from 'next'

const Onegai: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-4">お願い</h1>
            <div className="text-base text-left pb-4">
              <ul className="list-disc pl-6 pr-2">
                <li className="pb-2">投票は各部門につき、お一人様1回です。</li>
                <li className="pb-2">
                  ツイート投票、あるいはDM投票のどちらかでのみ投票できます。
                </li>
                <li className="pb-2">
                  明らかに同じ方からの複数投票がありました場合は、無効にさせて頂く可能性がございます。
                  <br />
                  推しへの清き投票にご協力よろしくお願いいたします！一生のお願いだよ。
                </li>
                <li className="pb-2">
                  幻水総選挙関連のハッシュタグで、特定のキャラや特定のキャラを推す方への批判・悪口を目的としたツイートは、ご遠慮下さいますようお願い致します。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onegai
