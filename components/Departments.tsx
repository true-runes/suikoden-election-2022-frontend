import type { NextPage } from 'next'

const Departments: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-4">部門</h1>
            <div className="text-base text-left pb-4">
              <ul className="list-disc pl-6 pr-2">
                <li className="pb-2">幻水総選挙2022では2つの部門があります</li>
                <li className="pb-2">
                  各部門でお一人様1回ずつ投票できます（どちらか一方の部門のみへの投票でも構いません）
                </li>
              </ul>
            </div>
            <div className="pb-4">
              <h2 className="text-xl font-bold pb-4">①オールキャラ部門</h2>
              <p className="text-base text-center pb-4">
                好きなキャラに投票する部門です。
              </p>
              <div className="pb-4">
                <h3 className="text-lg font-bold">投票数</h3>
                <p className="text-lg pb-4">
                  お一人様<span className="text-red-500">3票</span>まで
                </p>
                <div className="text-base text-left pb-4">
                  <ul className="list-disc pl-6 pr-2">
                    <li className="pb-2">
                      1キャラにつき1票（
                      <span className="text-red-500">
                        同じキャラへの複数投票はできません
                      </span>
                      ）
                    </li>
                    <li className="pb-2">1票だけ、2票だけの投票も可</li>
                  </ul>
                </div>
              </div>
              <div className="pb-4">
                <h3 className="text-lg font-bold">投票用ハッシュタグ</h3>
                <p className="text-lg">#幻水総選挙2022</p>
              </div>
            </div>

            <h2 className="text-xl font-bold pb-4">
              ②？？？部門（近日発表！）
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Departments
