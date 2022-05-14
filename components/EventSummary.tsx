import type { NextPage } from 'next'

const EventSummary: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-8">開催概要</h1>

            <div className="pb-8">
              <h2 className="text-xl font-bold pb-4">投票期間</h2>
              <div className="text-base">
                <p>2022年6月24日（金）21:00 から</p>
                <p>2022年6月26日（日）23:59 まで</p>
              </div>
            </div>

            <h2 className="text-xl font-bold pb-4">開票日</h2>
            <div className="text-base">
              <div className="pb-4">
                <p className="font-bold pb-2">第一部</p>
                <p>2022年7月9日（土）19:00～（予定）</p>
              </div>

              <div className="pb-4">
                <p className="font-bold pb-2">第二部</p>
                <p>2022年7月16日（土）19:00～（予定）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventSummary
