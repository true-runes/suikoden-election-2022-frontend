import type { NextPage } from 'next'

import { Condition01 } from '@/components/events-in-event/bonus-votes/counted-conditions/Condition01'
import { Condition02 } from '@/components/events-in-event/bonus-votes/counted-conditions/Condition02'
import { Condition03 } from '@/components/events-in-event/bonus-votes/counted-conditions/Condition03'
import { Condition04 } from '@/components/events-in-event/bonus-votes/counted-conditions/Condition04'

export const CountedConditions: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">ボーナス票が入る条件</h2>
      <div className="text-base text-left pb-4">
        <Condition01 />
        <Condition02 />
        <Condition03 />
        <Condition04 />
      </div>
    </>
  )
}
