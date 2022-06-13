import type { NextPage } from 'next'

export const ApplicationLimitation: NextPage = () => {
  return (
    <>
      <h2 className="text-xl font-bold pb-4">応募数</h2>
      <div className="text-base text-left pb-4">
        何作品でもご応募できます。
        <br />
        ただし、お一人様で
        <span className="text-red-500">
          同じキャラへの応募は各お題1作品まで
        </span>
        です。
        <br />
        <br />
        例：ヒューゴでお題①②③を1作品ずつ書く、ゲドでお題①を書く、クリスでお題②を書く
        <br />
        →可能です
      </div>
    </>
  )
}
