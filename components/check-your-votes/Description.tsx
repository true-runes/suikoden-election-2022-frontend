import type { NextPage } from 'next'

export const Description: NextPage = () => {
  return (
    <>
      <div className="pb-8">
        <div className="text-base">
          <ul className="text-left list-disc pl-6 pr-2">
            <li className="pb-2">
              チェックをしたい Twitter の ID
              を入力して「投票チェック」のボタンを押して下さい。
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
