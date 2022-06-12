import type { NextPage } from 'next'

export const NumberOfWords: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">文字数</h2>
      <div className="text-base text-center pb-4">
        <p className="pb-2">140字前後 ～ 上限なし</p>
      </div>
    </>
  )
}
