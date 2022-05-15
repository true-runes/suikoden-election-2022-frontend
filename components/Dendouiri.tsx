import type { NextPage } from 'next'

const Dendouiri: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-4 underline font-zen-old-mincho">
              「殿堂入り」について
            </h1>
            <p className="text-base text-left pb-4">
              2017年より「殿堂入り」制度を実施しています。殿堂入り制度のルールは次のとおりです。
            </p>
            <div className="text-base text-left pb-4">
              <ul className="list-decimal pl-6 pr-2">
                <li className="pb-2">
                  1位を計2回獲得したキャラは「殿堂入り」です。
                </li>
                <li className="pb-2">
                  殿堂入りを果たしたキャラは翌年の総選挙のみ、順位が付かなくなります。
                </li>
              </ul>
            </div>
            <p className="text-base text-left text-red-500">
              今年は幻水総選挙10周年記念、及び、「部門」創設のため、全キャラへの投票を可能とします。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dendouiri
