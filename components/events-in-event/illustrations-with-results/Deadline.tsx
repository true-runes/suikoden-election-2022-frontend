import type { NextPage } from 'next'

export const Deadline: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">〆切</h2>
      <div className="text-base text-center pb-4">
        <div className="pb-2">
          <p>一次〆切</p>
          <p className="text-red-500 pl-1 pr-1">2022年6月19日（日）23:59</p>
        </div>
        <div className="pb-2">
          <p>最終〆切</p>
          <p className="text-red-500 pl-1 pr-1">2022年6月26日（日）23:59</p>
        </div>
      </div>
    </>
  )
}
