import type { NextPage } from 'next'

import { Description } from '@/components/check-your-votes/Description'
import { CheckForm } from '@/components/check-your-votes/CheckForm'

export const Main: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center w-full">
          <div className="pb-0 w-full">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-8 underline font-zen-old-mincho">
                投票チェック
              </h1>

              <Description />
              <div className="divider" />

              <CheckForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
