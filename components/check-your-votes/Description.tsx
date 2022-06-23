import type { NextPage } from 'next'

export const Description: NextPage = () => {
  return (
    <>
      <div className="pb-0">
        <h2 className="text-xl font-bold pb-4">説明</h2>
        <div className="text-base">
          <ul className="text-left list-disc pl-6 pr-2">
            <li className="pb-2">
              説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。
              説明文が入ります。
            </li>
            <li className="pb-2">
              説明文が入ります。説明文が入ります。説明文が入ります。
            </li>
            <li className="pb-2">
              説明文が入ります。説明文が入ります。説明文が入ります。
              <span className="text-red-500 pl-1 pr-1">説明文が入ります。</span>
              説明文が入ります。
            </li>
            <li className="pb-2">説明文が入ります。説明文が入ります。</li>
          </ul>
        </div>
      </div>
    </>
  )
}
