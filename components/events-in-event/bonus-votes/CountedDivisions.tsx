import type { NextPage } from 'next'

export const CountedDivisions: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">ボーナス票が入る部門</h2>
      <div className="text-base text-center pb-0">
        <div className="pb-0">
          <div className="text-base text-center pb-4">
            ボーナス票は
            <span className="text-red-500">「オールキャラ部門」の票数</span>
            に反映されます。
          </div>
        </div>
      </div>
    </>
  )
}
