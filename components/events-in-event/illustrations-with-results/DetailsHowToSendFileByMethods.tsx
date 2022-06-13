import type { NextPage } from 'next'

import { ByForm } from '@/components/events-in-event/illustrations-with-results/details-how-to-send-file-by-methods/ByForm'
import { ByDm } from '@/components/events-in-event/illustrations-with-results/details-how-to-send-file-by-methods/ByDm'
import { ByFileTransferService } from '@/components/events-in-event/illustrations-with-results/details-how-to-send-file-by-methods/ByFileTransferService'

export const DetailsHowToSendFileByMethods: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">募集詳細 - 送信方法詳細</h2>
      <div className="text-base text-left pb-4">
        <ByForm />
        <ByDm />
        <ByFileTransferService />
      </div>
    </>
  )
}
