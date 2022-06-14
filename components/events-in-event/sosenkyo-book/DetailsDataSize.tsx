import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const DetailsDataSize: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">
        募集詳細 - 印刷用データのサイズ
      </h2>
      <div className="text-base text-left pb-4">
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">
            <div className="pb-2">
              印刷用データのサイズの規定は下記の通りです。
            </div>
            <ul className="list-disc pl-6 pr-2">
              <li className="pb-2">
                <div className="pb-2">縦長の場合</div>
                <ul className="list-none pl-0 pr-2">
                  <li className="pb-2">
                    <div>幅 1100px × 高さ 1500px 以上</div>
                    <div>幅 2508px × 高さ 3541px 以下</div>
                  </li>
                </ul>
              </li>
              <li className="pb-2">
                <div className="pb-2">横長の場合</div>
                <ul className="list-none pl-0 pr-2">
                  <li className="pb-2">
                    <div>幅 1500px × 高さ 1100px 以上</div>
                    <div>幅 3541px × 高さ 2508px 以下</div>
                  </li>
                </ul>
              </li>
              <li className="pb-2">
                <div className="pb-2">正方形の場合</div>
                <ul className="list-none pl-0 pr-2">
                  <li className="pb-2">
                    <div>幅 1300px × 高さ 1300px 以上</div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="pb-2">
            サイズに迷う方は「B7（350dpi）」か「ハガキ・ポストカード（350dpi）」サイズで描かれることをおすすめします。
          </li>
          <li className="pb-2">
            アナログイラストは可能であれば、スキャナーで取り込んだデータをお送りください（カラー、解像度300～350dpi）。
          </li>
          <li className="pb-2">
            アナログイラストをカメラで撮影する方は、規定サイズを超えても構いませんので、
            <span className="text-red-500">出来る限り高画質の画像</span>
            をお送りください。
          </li>
        </ul>
      </div>{' '}
    </>
  )
}
