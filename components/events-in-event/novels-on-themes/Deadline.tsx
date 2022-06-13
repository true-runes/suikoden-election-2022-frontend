import type { NextPage } from 'next'

export const Deadline: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">締切</h2>
      <div className="text-base text-center pb-4">
        <span className="text-red-500">2022年6月26日（日）23:59</span>
      </div>
    </>
  )
}
