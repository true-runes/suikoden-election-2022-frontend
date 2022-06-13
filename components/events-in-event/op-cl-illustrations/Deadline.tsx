import type { NextPage } from 'next'

export const Deadline: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">イラスト送付〆切</h2>
      <div className="text-base text-center">
        <p className="text-red-500 pb-1">2022年6月12日（日）</p>
        <p>（ご相談に応じます）</p>
      </div>
    </>
  )
}
