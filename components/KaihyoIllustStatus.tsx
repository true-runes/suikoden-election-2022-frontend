import type { NextPage } from 'next'
import Link from 'next/link'

const KaihyoIllustStatus: NextPage = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">開票イラスト</h1>
            <p className="pt-6 pb-3 text-xl">受付期間</p>
            <p className="text-base">
              2022年12月24日(金) ～ 2023年01月01日(火)
            </p>
            <p className="py-3 text-2xl">
              応募状況は
              <Link href="/kaihyou-status">
                <span className="link">こちら</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KaihyoIllustStatus
